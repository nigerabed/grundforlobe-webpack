import AndersSection from "./AndersSection";
import FormSection from "./FormSection";
import MainSection1 from "./MainSection1";
import MainSection2 from "./MainSection2";


export default function Main(){
return `
<main>
      
    ${MainSection1()}
    ${MainSection2()}
     ${AndersSection()}
     ${FormSection()}
      
</main>

`;
}