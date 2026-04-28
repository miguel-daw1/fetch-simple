const contenido = document.getElementById("contenido")
const boton= document.getElementById("cargar")

boton.addEventListener("click",()=>{
    fetch("obtener.php")
    .then(response=>response.json())
    .then(data=>{
        contenido.innerHTML=""
        data.forEach(element => {
            contenido.innerHTML+=`
            <div>
            <p>ID : ${element.id}</p>
            <p>Nombre: ${element.producto}</p>
            <p>precio: ${element.precio}</p>
            <p>cantidad: ${element.cantidad}</p>
            <p>descripción: ${element.descrip}</p>
            </div>
            <hr>
            `
            
        });
    })
})