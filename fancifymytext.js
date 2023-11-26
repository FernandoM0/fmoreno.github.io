

// calls alert when "Bigger" button is cliecked 
function alertFunction() {
    
    alert("Hello, world!");
    const textBox = document.getElementById("textBox");
    textBox.style.fontSize = "14pt";


}

function boringText() {
    const textBox = document.getElementById("textBox");
    const radioBtn = document.getElementById("boringRadio");

    if (radioBtn){
        textBox.style.fontWeight = "bold";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }


    
    
}

// set text to underline, bold, and blue
function fText() {
    const textBox = document.getElementById("textBox");
    const fancyBtn = document.getElementById("fancyRadio");

    if (fancyBtn){
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline"
    }


}

// upper case and append "-Moo"
function upperFunction(){
    const textBox = document.getElementById("textBox");
    textBox.style.textTransform = "uppercase";
    let text = document.getElementById("textBox").value;
    let moo = "-Moo";
    let newText = text + moo;
    textBox.value = newText;

}

