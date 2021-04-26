let puntos = 0,
tiempo = 10,
necesarios = 5,
pointer = document.getElementById("idPointer"),
pointerHijos = document.querySelector(".claseHijos"),
activado = document.querySelector(".activado"),
desactivado = document.querySelector(".desactivado"),
restarTiempo = () => {
    tiempo--
    document.getElementById("tiempo").innerHTML = `&nbsp;&nbsp;&nbsp  Tiempo: ${tiempo}`
    if(tiempo === 0 && puntos !== necesarios){
        document.getElementById("tiempo").style.display = "none"
        pointerHijos.style.display = "none"
        desactivado.style.display = "inline"
        // alert("perdiste")
        tiempo = 0
        puntos = 0
    }
},
sumarPuntos = ()=>{
    puntos++;
    document.getElementById("puntos").innerHTML = `Puntos : <strong> ${puntos}/${necesarios}</strong> `
    let randNum = Math.round(Math.random()*500);
    let randNum2 = Math.round(Math.random()*500)
    document.getElementById("player").style.marginTop = `${randNum}px`
    document.getElementById("player").style.marginLeft = `${randNum2}px`
    if(puntos == necesarios){
        document.getElementById("tiempo").style.display = "none"
        pointerHijos.style.display = "none"
        activado.style.display = "inline"
        // alert("ganaste")
        tiempo = 0
        puntos = 0
    }
};
// let calcularTiempo = ()=>{
//     setTimeOut(()=>{
//         restarTiempo()
//     },1000)
// }
setInterval(restarTiempo,1000)

// calcularTiempo()

document.getElementById("player").addEventListener("click",function(){sumarPuntos()})

