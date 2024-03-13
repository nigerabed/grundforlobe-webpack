import Nav from "./Nav";

let Header = function () {
  return `
  <header>
      <div id="banner-container">
        <div class="flip-text">
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
        </div>
      </div>

      <div>
        ${Nav()}
      </div>
    </header>
`;
};

export default Header;
