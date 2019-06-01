class Dream {
    constructor(date, description) {
        this.date = date;
        this.description = description;
    }
}

let dreams = [];

let dream1 = new Dream('5/12/19', 'I dreampt about a blue car');
let dream2 = new Dream('5/15/19', 'I dreampt about flying in a plane');
let dream3 = new Dream('5/25/19', 'I dreampt about surfing on the sun');

dreams.push(dream1);
dreams.push(dream2);
dreams.push(dream3);

function callDreams() {
    
var dreamList = document.querySelector('#date');

dreams.forEach(
    dreamEntry => {

        listDream = document.createElement("p");
        listDate = document.createElement("p");
        listText = document.createElement("p");

        listDate.innerText = dreamEntry.date;
        listText.innerText = dreamEntry.description;

        listDream.appendChild(listDate);
        listDream.appendChild(listText);

        dreamList.appendChild(listDream);
        
    }
);
}