class Dream {
    constructor(date, description) {
        this.date = date;
        this.description = description;
    }
}

var dreams = [];

function loadDreams() {

    let dream1 = new Dream('5/12/19', 'I dreampt about a blue car');
    let dream2 = new Dream('5/15/19', 'I dreampt about flying in a plane');
    let dream3 = new Dream('5/25/19', 'I dreampt about surfing on the sun');

    dreams.push(dream1);
    dreams.push(dream2);
    dreams.push(dream3);

    saveDreams();
}

function callDreams() {

        //Clears the p element if there's already something in it
    if (document.getElementById("list") != "") {
        document.getElementById("list").innerHTML = "";
    }
        //This checks if the dreams array contains information. It it does it turns the info into javascript,
        //else it calls loadDreams to add the hardcoded information into the array.
    if (localStorage.getItem('dreams')) {
        dreams = JSON.parse(localStorage.getItem('dreams'));
    }
    else {
        loadDreams();
    }

    dreams.forEach(
        dreamEntry => {
         addDreams(dreamEntry);
        });
}

function addDreams(dream) {
    
    let listDream = document.createElement("p");
    let listDate = document.createElement("p");
    let listText = document.createElement("p");

    listDate.innerText = dream.date;
    listText.innerText = dream.description;

    listDream.appendChild(listDate);
    listDream.appendChild(listText);

    document.querySelector('#list').appendChild(listDream);
}

function saveNewDream() {
    //this function adds new dreams from the submit form. Having the submit form in a separate page
    //was causing any information already in the array to be wiped clean whenever dreams.push(newDream)
    //was activated. 
    let newDream = new Dream(
        document.getElementById("fdate").value,
        document.getElementById("description").value
    );

    dreams.push(newDream);
    saveDreams();

}

function saveDreams() {
    localStorage.setItem('dreams', JSON.stringify(dreams));
}

document.querySelector('input[type="submit"]').addEventListener("click", saveNewDream);
