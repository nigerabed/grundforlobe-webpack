import Nav from "./Nav";

let Header = function () {
  let header = document.createElement("header");
  header.className = "header";
  let bannerContainerDiv = document.createElement("div");
  bannerContainerDiv.id = "banner-container";

  let flipTextDiv = document.createElement("div");
  flipTextDiv.className = "flip-text";
  flipTextDiv.innerHTML = `
        <p class="smallHeading-text">Karlstrup Klatrepark</p>
          <h1>
            Klatring for <br />
            alle aldre
          </h1>
          <p>
            Klatring er en fritidsbeskæftigelse som kan samle hele <br />
            familien. Et aktivt liv begynder i Karlstrup Klatrepark.
          </p>
          <button class="banner-btn">Læs mere ></button>
`;

  bannerContainerDiv.appendChild(flipTextDiv);

  header.appendChild(bannerContainerDiv);
  header.appendChild(Nav());

  return header;
};

export default Header;
