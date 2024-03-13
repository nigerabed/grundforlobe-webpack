import andreasPic from "../images/andreas.jpg";

export default function AndersSection(){
    return `
     <section id="anders-Section">
        <div class="anders-Banner">
          <div class="anders-text">
            <img class="anders-pic" src="${andreasPic}" alt="" />
            <div class="anders-time-text-div">
              <h2>Tirsdags-klatring med Andreas</h2>
              <p>
                Andreas har været en aktiv klatrer i mange år. Kom og vær med
                når han deler ud af <br />
                tips og tricks til at udfordre dig selv på klatrevæggen. To
                sjove timer hvor vi både <br />
                klatrer, hygger os, får pulsen op og snakker om det nyeste
                klatre-gear.
              </p>
              <p>Tirsdage kl. 17.30 - 19.30</p>
              <button class="btn anders-btn">Tilmeld dig her</button>
            </div>
          </div>
        </div>
        <div class="color-bar">
          <div class="box1"></div>
          <div class="box2"></div>
        </div>
      </section>
    `
};