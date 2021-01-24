 export const convertDate = str => {
    str = str.toString();
    let parts = str.split(" ");
    let months = {
    Jan: "Styczeń",
    Feb: "Luty",
    Mar: "Marzec",
    Apr: "Kwiecień",
    May: "Maj",
    Jun: "Czerwiec",
    Jul: "Lipiec",
    Aug: "Sierpień",
    Sep: "Wrzesień",
    Oct: "Październik",
    Nov: "Listopad",
    Dec: "Grudzień",
  }
  let days = {
    Mon: "Poniedziałek",
    Tue: "Wtorek",
    Wed: "Środa",
    Thu: "Czwartek",
    Fri: "Piątek",
    Sat: "Sobota",
    Sun: "Niedziela"
  
  }
    
    return ` ${days[parts[0]]} ${parts[2]} ${months[parts[1]]} ${parts[3]} ${parts[4]}`;
  }