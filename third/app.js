let r, op, resultados = [],
container = document.getElementById("container"),
buttonUltVez = document.getElementById("buttonUltVez")
ultVez = document.getElementById("ultVez"),
indexArray = ultVez.value,
form = document.getElementById("form"),
suma = document.getElementById("suma"),
resta = document.getElementById("resta"),
mult = document.getElementById("mult"),
div = document.getElementById("div"),
myAlert = document.createElement("p");
const printAlert = text => {
    myAlert.classList.add("alerta")
    myAlert.style.display = "inline"
    myAlert.setAttribute("role", "alert");
    myAlert.innerHTML = text;
    document.getElementById("alerta").appendChild(myAlert);
}, checarOperacion = ()=>{
    if (resultados[indexArray-1] === undefined){
        container.innerHTML = `${container.innerHTML} <br> No existe esa operación. Por favor, ingrese un número válido`
    } else {container.innerHTML = `${container.innerHTML} <br> Operación no.${indexArray}: ${resultados[indexArray-1][0]} ${resultados[indexArray-1][1]} ${resultados[indexArray-1][2]} = ${resultados[indexArray-1][3]}`}
}

suma.addEventListener("click",()=> op = "+")
resta.addEventListener("click",()=> op = "-")
mult.addEventListener("click",()=> op = "*")
div.addEventListener("click",()=> op = "/")

document.querySelector("#calcular").addEventListener("click",()=>{
    let n1 = parseInt(document.getElementById("n1").value),
    n2 = parseInt(document.getElementById("n2").value);
    if (isNaN(n2) || isNaN(n1)){
        if(op !== undefined && isNaN(n2) && isNaN(n1)){
            printAlert("mete números")
        }else if((isNaN(n2) && isNaN(n1)) && op == undefined){
            printAlert("mete números y un operando (+, -, /, *)")
        }
    } else if (op == undefined) printAlert("mete un operando (+, -, /, *)")
    else{
        switch(op){
            case "+":
                r = n1 + n2
                break;
            case "-":
                r = n1 - n2
                break;
            case "*":
                r = n1 * n2
                break;
            case "/":
                r = n1 / n2
                break;
        } 
        if(myAlert.role = "alert"){
            myAlert.removeAttribute("role")
            myAlert.style.display = "none"
        }
        console.log(r)
        resultados.push([n1,op,n2,r])
        container.style.display = "block"
        container.innerHTML =`Operación reciente: ${resultados[resultados.length-1][0]} ${resultados[resultados.length-1][1]} ${resultados[resultados.length-1][2]} = ${resultados[resultados.length-1][3]} <br> Primer número: ${resultados[resultados.length-1][0]}<br> Operación: ${resultados[resultados.length-1][1]}<br> Segundo número: ${resultados[resultados.length-1][2]}<br> Resultado: ${resultados[resultados.length-1][3]}`
        form.style.display = "flex"
        ultVez.min = "1"
        ultVez.max = `${resultados.length}`
    }
})
ultVez.addEventListener("keydowm",(event)=>{
    if(event.key === "enter"){
        checarOperacion()
    }
})
buttonUltVez.onclick = ()=>{
    checarOperacion()
}