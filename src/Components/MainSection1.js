import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";

export default function MainSection1(){
return `
<section id="activity">
        <div class="activity-Img">
          <div class="bigImg">
            <img id="mainImg" src="${gallery1}" alt="" />
          </div>

          <div class="smallImg">
            <img id="galleryimg-1" class="pic" src="${gallery1}" alt="" />
            <img id="galleryimg-2" class="pic" src="${gallery2}" alt="" />
            <img id="galleryimg-3" class="pic" src="${gallery3}" alt="" />
          </div>
        </div>

        <article class="activity-text">
          <div class="activity-text-Div">
            <h5>Aktiviteter</h5>
            <h2>Karlstrup Klatrepark er aktiv livsstil for hele familien</h2>
            <p>
              Karlstrup Klatrepark tilbyder en aktiv livsstil for hele familien!
              Udforsk vores varierede klatrebaner, skab minder og styrk
              familiens bånd i naturen. Fra børnevenlige stier til udfordrende
              ruter - oplev sammen i Karlstrup Klatrepark!
            </p>
            <button class="btn">Vores aktiviteter ></button>
          </div>
        </article>
      </section>
`;
}