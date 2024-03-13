import familyPic from "../images/family.jpg";
import juniorPic from "../images/junior.jpg";
import childrenPic from "../images/children.jpg";

export default function MainSection2() {
  return `
     <section id="activity-Til-alle">
        <div class="Prøv-klatre-Div">
          <h4 class="title-prøv">Prøv at klatre!</h4>
          <p>
            Hvis du ikke har klatret før, kan det være en udfordring at komme i
            gang. Med vores klatre-pakker har <br />
            du mulighed for at snuse til klatring, inden du investerer i udstyr
            eller melder dig på et klatrehold.
          </p>
        </div>
        <div class="family-activity">
          <div class="klatring">
            <img src="${familyPic}" alt="" />
            <div>
              <h3>Familie-klatring</h3>
              <p>
                En sjov dag med klatre-aktiviteter for hele familien. I kan frit
                benytte hele centret, og lade de mindste bruge klatre- og
                legeområdet, mens far og mor kravler mod toppen på den store
                klatrevæg.
              </p>
              <button class="btn bestil-btn ">Bestil</button>
            </div>
          </div>
          <div class="klatring">
            <img src="${juniorPic}" alt="" />
            <div>
              <h3>Junior-klatring</h3>
              <p>
                Vores juniorklatrepakke er beregnet på mindre grupper og I får i
                gruppen stillet en klatreinstruktør til rådighed i 45 minutter.
                Herefter kan I klatre i parken i to timer på egen hånd.
              </p>
              <button class="btn bestil-btn">Bestil</button>
            </div>
          </div>
          <div class="klatring">
            <img src="${childrenPic}" alt="" />
            <div>
              <h3>Børne-klatring</h3>
              <p>
                Er du klar på at holde en festlig børnefødselsdag i Karlstrup
                Klatrepark? Børneklatrepakken giver fri adgang til vores klatre-
                og legeområde i tre timer samt en plads i café-området til far
                og mor.
              </p>
              <button class="btn bestil-btn">Bestil</button>
            </div>
          </div>
        </div>
      </section>
    `;
}
