const slider = document.querySelector(".slider input"),
img = document.querySelector(".images .img-2"),
dragLine = document.querySelector(".slider .lineaAgarre"),
buttons = document.querySelector(".buttons")
botonFiltroOne = document.getElementById("botonFiltroOne"),
botonFiltroTwo = document.getElementById("botonFiltroTwo"),
botonFiltroThree = document.getElementById("botonFiltroThree"),
linkTercero = document.getElementById("linkTercero");
img.style.width = `50%`
slider.oninput = ()=>{
    var sliderVal = slider.value;
    dragLine.style.left = `${sliderVal}%`;
    img.style.width = `${sliderVal}%`;
}

/* script del slider */

const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //variable para usar en múltiples funciones

button.onclick = ()=>input.click(); //cuando el usuario presione el botón, el input también se presionará

input.addEventListener("change", function(){
    file = this.files[0]; //el usuario puede seleccionar varios archivos, entonces imprimirá exclusivamente uno
    dropArea.classList.add("active");
    showFile(); 
});

//para que el usuario dropee el archivo
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); 
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); 
    file = event.dataTransfer.files[0];
    showFile();
});

let wrapper = document.querySelector(".wrapper"),
wrapperImg = document.querySelector(".wrapper .images .img-1");

function showFile(){
    let fileType = file.type,
    validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //array de archivos válidos
    if(validExtensions.includes(fileType)){ 
        let fileReader = new FileReader(); 
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            wrapper.style.display = "block"
            wrapperImg.src = fileURL ;
            img.innerHTML = `<div></div>`
            img.firstElementChild.style.background = `url("${fileURL}") no-repeat`;
            img.firstElementChild.style.backgroundSize = "cover";
            img.firstElementChild.style.filter= "brightness(0.5)"
            buttons.style.display = "flex"
            linkTercero.style.display = "block"
        }
    fileReader.readAsDataURL(file);
    }else{
    alert("No es un archivo de imagen");
    dropArea.classList.remove("active");
    }
}

botonFiltroOne.onclick = ()=>img.style.filter= "invert(100%)"
botonFiltroTwo.onclick = ()=>img.style.filter= "sepia(100%)"
botonFiltroThree.onclick = ()=>img.style.filter= "saturate(0%)"
