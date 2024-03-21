function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    //get triangle height value
    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    if(isNaN(base)|| isNaN(height)){
        alert("Please insert a number");
        return;
    }
    const area = 0.5 * base * height;
    addToCalculationEntry('Triangle', area);


    //show triangle area
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById("rectangle-width");
    //get rectangle width value
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    //get rectangle length value
    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    if(isNaN(width)|| isNaN(length)){
        alert("Please insert a number");
        return;
    }

    const area = width * length;
    addToCalculationEntry('Rectangle', area);


    //show rectangle area
    const areaSpan = document.getElementById("rectangle-area");
    areaSpan.innerText = area;
}

// Parallalogram
function calculateParallelogramArea(){
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");

    if(isNaN(base)|| isNaN(height)){
        alert("Please insert a number");
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    //add to calculation entry
    addToCalculationEntry('parallelogram', area)

}

//Ellips
function calculateEllipseArea(){
    const major = getInputValue("ellipse-major-radius");
    const minor = getInputValue("ellipse-minor-radius");

    if(isNaN(major)|| isNaN(minor)){
        alert("Please insert a number");
        return;
    }
    const area = 3.1416 * major * minor;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText("ellipse-area", areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}
//reusable get input value field in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

//reusable set span , p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

//add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount + 1;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count}. ${areaType} ${area} cm<sup>2</sup>
    <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}