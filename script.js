let buttonDraw = document.querySelector('.dButton');
let notification = document.createElement('span');

function createDraw() {
    document.querySelector('.dButton').remove();
    let p = document.createElement('p');
    p.innerHTML = `input diameter`;
    p.className = 'paragraf'
    let input = document.createElement('input');
    input.className = 'inputDiameter'
    let drawButton = document.createElement('button');
    drawButton.className = 'drawButton'
    drawButton.innerHTML = `Draw`;

    document.querySelector(`div`).append(p);
    document.querySelector(`div`).append(input);
    document.querySelector(`div`).append(drawButton);
    document.querySelector('.drawButton').addEventListener("click", () =>
        createTabl(input),
    );
}

function destroyTheButton() {

    document.querySelector(`.paragraf`).remove();
    document.querySelector(`.drawButton`).remove();
    document.querySelector(`.inputDiameter`).remove();

};
buttonDraw.addEventListener("click", () => createDraw());

function createTabl(input) {
    if (input.value < 0 || !isFinite(input.value) || input.value.trim() == "") {
        notification.innerHTML = `Please enter correct diameter`;
        document.querySelector("button").after(notification);
        notification.style.color = "red";
    } else {
        destroyTheButton();
        notification.remove();
        let div = document.querySelector("div");        
        let container = document.createElement("div");
        container.style.width = `${(input.value)*10}px`;
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.flexDirection = "row";
        container.style.justifyContent = "start"

        for (let i = 0; i < 100; i++) {
                let circle = document.createElement("button")
                circle.className = "circle"
                circle.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
                circle.style.width = `${input.value}px`;
                circle.style.height = `${input.value}px`;
                inicilCircle(circle);
                container.appendChild(circle);
            }
            div.appendChild(container);

        }

        
    }


function inicilCircle(circle) {

    circle.addEventListener("click", () => {
        select(circle);
    });

};

function select(button) {

    let div = document.querySelector("div")
    let selected = div.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
    }
    button.classList.add('active');
    div.querySelector(".active").remove();

}