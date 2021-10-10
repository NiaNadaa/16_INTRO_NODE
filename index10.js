//const array = [12,34,1,78,2,99,34]
function mostrar(array){
    console.log(array)
}
//console.log(mostrar(array))
//module.exports = mostrar;
//const array2 = [55,76,2,89,3,12,43]
function mostrarRev(array2){
    for(i=array2.length-1;i>=0;i--){
        console.log(array2[i])
    }
}
//module.exports = mostrarRev
module.exports = {mostrar, mostrarRev};