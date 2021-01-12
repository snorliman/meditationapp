import React from 'react';
import "./HowToUseApp.scss";
import ornament from "../../assets/ornament/floral-design-with-curled-edges.svg";

export default function HowToUseApp() {
    return (
        <section className="how-to-use-app" id="how-to-use-app">
            <h2>Czym jest MeditationApp i jak używać?</h2>
            <div className="section-container" data-aos="fade-up">
                
                <p>Meditation App to pomoc z pozostaniem w praktyce medytacji. 
                    Jeśli dopiero zaczynasz, masz przepełniony grafik, ciężko jest znaleźć czas, 
                    ta aplikacja pozwoli śledzić ci twoje wyniki. Możesz w niej zaplanować czas 
                    na praktykę. Dostaniesz maila z powiadomieniem, możesz wybrać muzykę do 
                    medytacji z naszej biblioteki, lub wybrać cichą medytację która jest dla 
                    początkujących troszkę trudniejsza. Aplikacja jest dodatkowym bodźcem do 
                    ogarnięcia medytacji w swoim życiu. Naprawdę trudno jest sobie wyrobić 
                    nawyk medytacji. Dlatego warto zaplanować sobie drogę na początku, żeby 
                    po jakimś czasie medytacja była dla nas czymś naturalnym. </p>
                    <p> Aplikacja jest 
                    przede wszystkim stworzona z myślą o początkujących, którzy chcą sobie 
                    wyrobić nawyk praktyki i chcą mieć nad tym kontrolę, żeby w razie czego 
                    móc wrócić do systematycznych sesji medytacyjnych. Jest to świetne 
                    dla naszego zdrowia i samopoczucia, więc naprawdę warto podjąć wyzwanie, 
                    postawić sobie nowy cel, który nam przyniesie tyle korzyści.</p>
                    <p>Gdy już się zalogujesz będziesz miał do wyboru sesje spontaniczną 
                        lub zaplanowaną, sesja spontaniczna będzie bonusem w wynikach 
                        zakładce z historią. Sesje zaplanować można w zakładce z kalendarzem,
                         gdzie wybiera się dokładną datę sesji. Jeśli przyjdziesz wcześniej 
                         nic się nie stanie, możesz wykonać sesje chwilę wcześniej, tylko 
                         wybierz ją z listy zaplanowanych. Gdy wybierzesz sesje z muzyką, 
                         wybierz utwór który chcesz mieć w odsłuchu i będzie on leciał w 
                         czasie twojej medytacji. Przed zaczęciem sesji ustaw czas medytacji. 
                         Zakładka z historią pozwala śledzić wyniki twojej praktyki, co i ile 
                         udało się wykonać. Zobaczysz ile zaplanowanych sesji udało się zrealizować. 
                         Jest to dobry sposób żeby mieć kontrolę nad swoimi działaniami. 
                         Aplikacja jest po to żeby utrzymać dobry nawyk. Pozwala go rozwijać i 
                        motywuje do wykonania planu jaki sobie postawiliśmy. Mamy nadzieję że 
                        będzie państwu służyć i pomoże w drodze do lepszej praktyki!</p>
                <img src={ornament} alt="ornament"/>
            </div>
    
    </section>
    )
}