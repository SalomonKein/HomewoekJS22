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
        let div = document.querySelector("div"),
            tr = "",
            td = "",
            firstTable = document.querySelector("table");
        table = document.createElement("table");
        for (let i = 0; i < 10; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < 10; j++) {
                td = document.createElement("td");
                let circle = document.createElement("button")
                circle.className = "circle"
                circle.style.background = `#${Math.floor(Math.random()*Math.floor(999999))}`;
                circle.style.width = `${input.value}px`;
                circle.style.height = `${input.value}px`;
                console.log(input.value);
                inicilCircle(circle);
                td.appendChild(circle);
                tr.appendChild(td);
            }
            table.appendChild(tr);

        }

        if (firstTable == null) {
            return div.appendChild(table);

        } else {
            let newTable = div.appendChild(table);
            return document.div.replaceChild(newTable, firstTable);

        }
    }
}

function inicilCircle(circle) {

    circle.addEventListener("click", () => {
        select(circle);
    });

};

function select(button) {

    let table = document.querySelector("table")
    let selected = table.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
    }
    button.classList.add('active');
    table.querySelector(".active").remove();

}