
let button = document.getElementById('button');
console.log(button);
button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Button clicked");
    let Name = document.getElementById('Name').value;
        console.log(`Name: ${Name}`);
    let Email = document.getElementById('Email').value;
        console.log(`Email: ${Email}`);

    showInfo(Name, Email);
    }
);

let bodyClickHandler = function() {
    body.style.backgroundColor = "lightblue";
    console.log("Body clicked");
    removeEventListner();
};

let body = document.querySelector("body");
body.addEventListener('click', bodyClickHandler);

function removeEventListner() {
    body.removeEventListener('click', bodyClickHandler);
}

function showInfo( Name, Email) {
    let results = document.getElementById('results');
    let paragraph = document.createElement('p');    

    paragraph.innerHTML = `Name: ${Name} Email: ${Email}`;
    results.appendChild(paragraph);
}


