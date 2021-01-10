import React from 'react';
import "./WhyMeditation.scss";
import ornament from "../../assets/ornament/floral-design-with-curled-edges.svg";

export default function WhyMeditation() {
    return (
        <section id="why-meditation">
            <div className="section-container" data-aos="fade-up">
                <h2>Dlaczego warto Medytować?</h2>
            <p>Medytacja pomaga się skupić, zwiększa odporność na stres, pomaga w rozpędzonym świecie. 
                Ludzie medytujący mają więcej energii oraz lepiej funkcjonują. Medytacje poleca się wszystkim 
                i każdy może to robić. Nie potrzeba drogiego sprzętu, wystarczy przez chiwlę nic nie robić i 
                dać sobie odpocząć. Ludzie medytujący po praktyce bardziej cieszą się tym co mają i przyjemność 
                sprawiają im małe rzeczy. Jeśli żyjesz w stresie i dużym napięciu, medytacja pozwoli ci powrócić
                 do równowagi, której potrzebujesz do kolejnych wyzwań.</p>
                 <p> Medytacja przyszła ze wschodu, ale dziś 
                 w zachodniej cywilizacji medytuje coraz więcej osób. Popularne stało się mindfulness, jest to 
                 zachodnie podejście do wybranych wschodnich praktyk, które pomija wszystkie aspekty religijne i z 
                 podejściem naukowym wykorzystuje korzyści medytacji. Ludzie wierzący mogą sobie zadawać pytanie czy
                  mogą praktykować. Medytacja jest bezpieczna i nie jest w konflikcie z żadną religią, można z niej 
                  zrobić swój świecki zwyczaj, który nie ma wpływu na życie religijne. </p> 
                  <p> Oczywiście wiele wierzeń wykorzystuje medytacje,
                   nawet modlitwa katolicka ma działanie podobne do medytacji, jednak do samej medytacji nie trzeba dodawać aspektu wiary, 
                   która dla każdego jest opcjonalna. Wieć jeśli chcesz nabrać dystansu i lepiej radzić sobie z wyzwaniami to medytacja
                   jest dla ciebie! Pierwszym wyzwaniem jest rozpoczęcie praktyki, która 
                początkującym sprawia problemy, co sprawia że łatwo zrezygnować z praktyki już na samym początku. 
                Do pomocy posłuży wam nasza aplikacja:)</p>
                <img id="how-to-start" src={ornament} alt="ornament"/>
            </div>
            
        </section>
    )
}