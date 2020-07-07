let buttonDraw = document.querySelector('button');
console.log(buttonDraw);

function createDraw() {
    document.querySelector('.dButton').remove();
    let input = document.createElement('input');
    input.className = 'inputDiameter'
    console.log(input);
    let drawButton = document.createElement('button');
    drawButton.className = 'drawButton'
    drawButton.innerHTML = `Draw`;
    console.log(drawButton);
    document.querySelector(`div`).append(input);
    document.querySelector(`div`).append(drawButton);
    drawButton.addEventListener("click", () =>
     createTabl(),
    //  drawButton.remove(),
    //  input.remove()
     );
}
buttonDraw.addEventListener("click", () => createDraw());

function createTabl() {
    let div = document.querySelector("div"),
        // tableWidth = document.getElementById("table-width"),
        // tableHeight = document.getElementById("table-height"),
        // width = tableWidth.value,
        // height = tableHeight.value,
        // numRows = document.getElementById("rows"),
        // numColumns = document.getElementById("columns"),
        // rows = numRows.value,
        // columns = numColumns.value,
        tr = "",
        td = "",
        firstTable = document.querySelector("table");
    // console.log(width);
    // console.log(height);
    // console.log(rows);
    // console.log(columns);

    table = document.createElement("table");
    // checkbox = document.getElementById("checkbox");
    // if (checkbox.checked == true) {
    //     table.setAttribute("border", "2px");
    // } else {
    //     table.setAttribute("border", "0");
    // }
    //     table.setAttribute("width", width);
    // table.setAttribute("height", height);
    for (let i = 0; i < 10; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            td = document.createElement("td");
            // text = document.createTextNode((i + 1) + "." + (j + 1));
            let circle = document.createElement("button")
            circle.className="circle"
            td.appendChild(circle);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(tr);
    console.log(td);
    if (firstTable == null) {
        return div.appendChild(table);
    } else {
        let newTable = div.appendChild(table);
        return document.div.replaceChild(newTable, firstTable);
    }
}

// function destroyTable() {
//     let body = document.querySelector("body"),
//         table = document.querySelector("table"),
//         checkbox = document.getElementById("checkbox")
//     tableWidth = document.getElementById("table-width"),
//         tableHeight = document.getElementById("table-height"),
//         numRows = document.getElementById("rows"),
//         numColumns = document.getElementById("columns");
//     if (document.querySelector("table") != null) {
//         document.body.removeChild(table);
//         checkbox.checked = false;
//         tableWidth.value = "";
//         tableHeight.value = "";
//         numRows.value = "";
//         numColumns.value = "";
//     }
//     for (let j = 0; j < 10; j++) {
//         td += "<td>" + j + "</td>";
//     }
//     for (let i = 0; i < 10; i++) {
//         tr += "<tr>" + td + "</tr>";
//     }
//     console.log(tr);
//     console.log(td);
//     table.innerHTML = tr;
// };

// let notification = document.createElement('span');


// function createNotification(anchor, position, html) {

//     notification.className = "note";
//     let curentPrice = document.querySelector('input');



//     if (curentPrice.value < 0 || !isFinite(curentPrice.value) || curentPrice.value.trim() == "") {

//         notification.innerHTML = `Please enter correct price`;
//         form.after(notification);

//         positionAt(anchor, "bottom", notification);
//         curentPrice.style.color = "red";
//         createCloseCross(notification, 'closeButton')
//         console.log(`value = "${curentPrice.value}"`);



//     } else {

//         notification.innerHTML = `Curent price: ${curentPrice.value}`;
//         form.before(notification);

//         positionAt(anchor, "top", notification);
//         curentPrice.style.color = "green";
//         createCloseCross(notification, 'closeButton')
//     }


// }
// let form = document.querySelector('button')

// function getCoords(elem) {
//     let box = elem.getBoundingClientRect();

//     return {
//         top: box.top,
//         left: box.left,
//     };
// }


// function positionAt(anchor, position, elem) {

//     let anchorCoords = getCoords(anchor);
//     switch (position) {
//         case "top":
//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top - 15 - elem.offsetHeight + "px";
//             break;
//         case "right-in":

//             elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
//             elem.style.top = anchorCoords.top + "px";
//             break;
//         case "bottom":

//             elem.style.left = anchorCoords.left + "px";
//             elem.style.top = anchorCoords.top + 75 - elem.offsetHeight + "px";
//             break;
//     }
// }
// // 
// let crossButton = document.querySelector('button');

// function createCloseCross(anchor, position, ) {
//     let crossButton = document.createElement('button');
//     crossButton.className = 'closeButton'

//     crossButton.innerHTML = `+`;
//     anchor.append(crossButton);

//     positionAt(anchor, position, crossButton);


// }


// // crossButton.addEventListener("onclick", () => notification.remove());
// crossButton.addEventListener("onclick", () => createNotification(button, top, html));

// function selectValue() {
//     let input = document.querySelector('input');
//     document.querySelector('.closeButton').addEventListener("click", () => {
//         notification.remove()
//         input.value = ""
//         input.style.color = "black"
//     });

//     // console.log(input.value);
// };


// form.addEventListener("focusout", () => {
//     createNotification(form, "top", "bottom", "note")
//     selectValue()
// });

// let closeButton = document.querySelector('button');
// // console.log(closeButton)