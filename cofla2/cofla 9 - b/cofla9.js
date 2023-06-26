alumnos = [{
    nombre :'juan',
    email : 'juan@gmail.com',
    materia: 'quimica'
},
{
    nombre :'luisa',
    email : 'luisa@gmail.com',
    materia: 'fisica'
    
},
{
    nombre :'pedro',
    email : 'pedro@gmail.com',
    materia: 'ingles'
},
{
    nombre :'monica',
    email : 'monica@gmail.com',
    materia: 'matematicas'
},
{
    nombre :'andres',
    email : 'andres@gmail.com',
    materia: 'musica'
}]



const btn = document.querySelector('.btn-confirmar')
const contenedor = document.querySelector('.grid-container')


btn.addEventListener('click', ()=>{
    let confirmar = confirm('estas seguro de los cambios realizados?')
    if (confirmar){
        document.body.removeChild(btn)
        let elementos = document.querySelectorAll('.semana')
        let semanasElegidas = document.querySelectorAll('.semana-elegida')
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
    }
}
})




for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos['nombre'];
    let email = datos['email'];
    let materia = datos['materia'];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">semana 1</option>
            <option value="semana 2">semana 2</option>
        </select>
    </div>`
    contenedor.innerHTML += htmlCode
}

