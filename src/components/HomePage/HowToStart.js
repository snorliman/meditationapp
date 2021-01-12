import React from 'react';
import "./HowToStart.scss";
import ornament from "../../assets/ornament/floral-design-with-curled-edges.svg";


export default function HowToStart() {
    return (
    
    
    <section className="how-to-start" id="how-to-start">
        <h2>Jak zacząć praktykę?</h2>
    <div className="section-container" data-aos="fade-up">
        
    <p>Medytacja ma wiele wariantów i warto poczytać o niej żeby wybrać praktykę, 
        która nam najbardziej pasuje. Najbardziej polecamy medytację siedzącą, wystarczy krzesło,
         nie musi mieć oparcia. Bardzo polecane są poduszki medytacyjne na kŧórych się siada.
          Ważną zasadą jest wyprostowanie pleców, oczy najlepiej gdy są zamknięte choć mogą 
          być skupione na jednym przedmiocie, częstą praktyką jest patrzenie na ogień świecy.</p>

          <p>Podczas medytacji unikamy gonitwy myśli i staramy się wyczyścić umysł, co jest 
          najtrudniejszą częścią, bo mózg będzie nam podrzucać pełno niechcianych myśli. 
          Ważne jest żeby się tym nie denerwować tylko spokojnie akceptować to, że myśl 
          się pojawiła i pozwolić jej odejść. Najlepiej jest się skupić na odczuciach z 
          własnego oddechu i badanie odczuć z ciała. Można skupić się na powietrzu, które 
          wdychamy i jego wrażeniach w nozdrzach, na wypełnianiu się płuc. Medytacja jest 
          chwilą odpoczynku i służy relaksowi. Na początku 
        może nam przeszkadzać wiele rzeczy, jednak po paru próbach znajdziemy ukojenie 
        w medytacji i będzie nam pozwalać lepiej czuć się ze sobą.</p>
        <img src={ornament} alt="ornament"/>
    </div>
    
</section>)
}