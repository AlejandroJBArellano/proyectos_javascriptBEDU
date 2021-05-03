const slider = document.querySelector(".slider input"),
img = document.querySelector(".images .img-2"),
dragLine = document.querySelector(".slider .lineaAgarre"),
containerFilters = document.querySelector(".contenedor-filtros")
filters = document.querySelectorAll(".filtros"),
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
wrapperImg = document.querySelector(".wrapper .images .img-1"),
descargarImagen=()=>{
    myAlert.classList.add("alerta")
    myAlert.style.display = "inline"
    myAlert.setAttribute("role", "alert");
    myAlert.innerHTML = text;
    document.getElementById("alerta").appendChild(myAlert);
},
grayscale = document.getElementById("grayscale"),
blurFilter  = document.getElementById("blurFilter"),
sepia  = document.getElementById("sepia"),
saturate  = document.getElementById("saturate"),
opacidad  = document.getElementById("opacidad"),
brillo  = document.getElementById("brillo"),
contraste  = document.getElementById("contraste"),
hueRotate  = document.getElementById("hueRotate"),
invertir = document.getElementById("invertir"),
positionX = document.getElementById("posx"),
positionY = document.getElementById("posy"),
difuminadoDeg = document.getElementById("difuminadoDeg"),
color = document.getElementById("color"),
sombra = document.getElementById("sombra"),
normal = document.getElementById("normal"),
botonesPrueba = document.querySelector(".botonesPrueba"),
aplicarImagen = document.getElementById("aplicarImagen"), //botón para aplicar filtro seleccionado a la imagen puesta
// descargar = document.getElementById("descargar"),
arrayFiltros = [grayscale.value,blurFilter.value,sepia.value,saturate.value,brillo.value,contraste.value,hueRotate.value,invertir.value],
showFile=()=>{
    let fileType = file.type,
    validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //array de archivos válidos
    if(validExtensions.includes(fileType)){ 
        let fileReader = new FileReader(); 
        fileReader.onload = ()=>{
            var fileURL = fileReader.result;
            // if(fileType == validExtensions[2]){
            //     containerFilters.children[children.length-1].style.display = "block"
            // }
            wrapper.style.display = "block"
            wrapperImg.src = fileURL ;
            img.firstElementChild.style.background = `url("${fileURL}") no-repeat`;
            img.firstElementChild.style.backgroundSize = "cover";
            // img.firstElementChild.style.filter= "brightness(0.5)"
            containerFilters.style.display = "flex"
            linkTercero.parentElement.style.display = "flex"
            linkTercero.parentElement.style.justifyContent = "center"
            linkTercero.style.display = "inline"
            botonesPrueba.style.display = "block"
            // descargar.download = "imagen filtrada"
            // descargar.href = `download/${fileURL}`
        }
    fileReader.readAsDataURL(file);
    }else{
    alert("No es un archivo de imagen");
    dropArea.classList.remove("active");
    }
};
img.innerHTML = `<div></div>`;

let aplicar = ()=>img.firstElementChild.style.filter = `grayscale(${grayscale.value}%) blur(${blurFilter.value}px) sepia(${sepia.value}%) saturate(${saturate.value}%) brightness(${brillo.value}%) contrast(${contraste.value}%) hue-rotate(${hueRotate.value}deg) invert(${invertir.value}%)`;

grayscale.oninput = ()=> aplicar();
blurFilter.oninput = ()=> aplicar();
sepia.oninput = ()=> aplicar();
saturate.oninput = ()=> aplicar();
// opacidad.oninput = ()=>img.firstElementChild.style.filter= `opacity(${opacidad.value}%);
brillo.oninput = ()=> aplicar();
contraste.oninput = ()=> aplicar();
hueRotate.oninput = ()=> aplicar();
invertir.oninput = ()=> aplicar();

normal.onclick = ()=>{
    grayscale.value = `0`;
    blurFilter.value = `0`;
    sepia.value = `0`;
    saturate.value = `100`;
    brillo.value = `100`;
    contraste.value = `100`;
    hueRotate.value = `0`;
    invertir.value = `0`;
    aplicar()
}
aplicarImagen.onclick = ()=>wrapperImg.style.filter = `grayscale(${grayscale.value}%) blur(${blurFilter.value}px) sepia(${sepia.value}%) saturate(${saturate.value}%) brightness(${brillo.value}%) contrast(${contraste.value}%) hue-rotate(${hueRotate.value}deg) invert(${invertir.value}%)`