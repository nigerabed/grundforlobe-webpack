
export default function Nav() {
  let nav = document.createElement("nav");
  nav.innerHTML = `
          <div id="logo"><h3>Karlstrup Klatrepark</h3></div>
          <ul class="header-nav-ul">
            <li>Hjem</li>
            <li>Aktiviteter</li>
            <li>Prøv at klatre</li>
            <li>Kontakt os</li>
          </ul>
          `;
  return nav;
}
