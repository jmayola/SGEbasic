async function INSERT(){
    let curso = document.getElementById("curso")
let division = document.getElementById("division")
    console.log(curso.value)
    console.log(division.value)
    return await window.db.insert(curso.value,division.value)
}
async function UPDATE(){
let id_u = document.getElementById("id_u")
    let curso_u = document.getElementById("curso_u")
let division_u = document.getElementById("division_u")
    return await window.db.update(id_u.value,curso_u.value,division_u.value)
}
async function DELETE(){
let id_d = document.getElementById("id_d")
    return await window.db.delete(id_d.value)
}