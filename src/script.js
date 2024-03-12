


let pics = document.querySelectorAll(".smallImg img");
pics.forEach(addClickEvent);

function addClickEvent(imageElement) {
  imageElement.addEventListener("click", handleClick);
}

function handleClick(event) {
  let mainImg = document.getElementById("mainImg");
  // console.log(event.target.src)
  mainImg.setAttribute("src", event.target.src);
}

// Form valodation stars

const form = document.querySelector(".contactForm");

let success;

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  success = true;

  let arryData = Array.from(event.target);
  arryData.forEach(validate);

  if (success) {
    form.submit();
  }
}

function validate(field) {
  if (field.nodeName === "BUTTON" ) return;

  field.nextElementSibling.textContent = "";

  if (field.required && !field.value) {
    field.nextElementSibling.textContent = "Feltet må ikke være tomt!";
    success = false;
  }

  if (field.type === "text" && !field.value) {
    field.nextElementSibling.textContent = "skriv dit navn!";
    success = false;
  }

  if (field.type === "email") {
    const indexOfAt = field.value.indexOf("@");
    const indexOfDot = field.value.indexOf(".");
    if (
      indexOfAt === -1 ||
      indexOfAt === 0 ||
      indexOfAt === field.value.length - 1 ||
      indexOfDot === -1 ||
      indexOfDot === 0 ||
      indexOfDot === field.value.length - 1 ||
      indexOfDot < indexOfAt ||
      indexOfAt === indexOfDot - 1
    ) {
      field.nextElementSibling.textContent =
        "Du skal skrive en korrekt email adresse din nar!";
      success = false;
    }
  }

  if (field.nodeName === "TEXTAREA") {
    if (field.value.length > 200 || field.value.length < 15) {
      field.nextElementSibling.textContent = "Din besked er dum!";
      success = false;
    }
  }
}
