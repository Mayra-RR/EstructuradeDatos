
// Suma
const items = [1, 2, 3, 4, 5];

function sum(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
        suma = nums[i] + suma;
    }
    return suma;
}

console.log("1-Suma: ", sum(items));

// Reverse
const items1 = [1, 2, 3, 4, 5];

/*const rev = items1.reverse(0,4);

console.log(rev);*/

function rev(items1) {
    const copy = [...items1];
    for (let i = 0; i < items1.length; i++) {
        console.log(copy.pop())
    }
}
console.log("2-Reversa:")
rev(items1);

//Max

const array = [1, 10, 6, 3, 5];

function Max(array) {
    let maxnum = array[0];
    for (i = 0; i < array.length; i++) {
        if (maxnum < array[i])
            maxnum = array[i];
    }
    return maxnum;
}
console.log("3-Maximo: ", Max(array));

//Min

function Min(array) {
    let minnum = array[0];
    for (i = 0; i < array.length; i++) {
        if (minnum > array[i])
            minnum = array[i];
    }
    return minnum;
}
console.log("4-Minimo: ", Min(array));

//Concatenar

let chain = "";
function concat(frase) {
    for (i = 0; i < frase.length; i++) {
        chain = chain + frase[i];
    };
    return chain;
};
concat(["5-", "Hola", " ", "Mundo", "!"])
console.log(chain);

//Promedio
const nums = [15, 25, 55];

function prom(nums) {
    let prom = 0;
    for (i = 0; i < nums.length; i++) {
        prom = prom + nums[i];
    }
    prom = prom / nums.length;
    return prom;
}
console.log("6-Promedio:", prom(nums));

// Union
const union1 = [5, 10, 15];
const union2 = [20, 25, 30];

function union(union1, union2) {
    return [...union1, ...union2];
}

console.log("7-Union: ", union(union1, union2));

// Interseccion

const conj1 = [2, 4, 6, 8];
const conj2 = [12, 10, 8, 6];

function interseccion(conj1, conj2) {
    let comunes = [];
    for (let i = 0; i < conj1.length; i++) {
        for (let j = 0; j < conj2.length; j++) {
            if (conj1[i] == conj2[j]) {
               comunes.push(conj1[i]);
            }
        }
    }
    return comunes;
}
console.log("8-Interseccion: ", interseccion(conj1, conj2));

// Replace

const conj3 = [0,1,2,3,4];

function replace(conj3){
    const copy = [... conj3];
    for (i = 0; i < copy.length; i++){
         if (copy[i] == 0){
         copy[i] = -1;
         }
     }
 
     return copy;
 }
/*
function replace(conj3){
    for (i = 0; i < conj3.length; i++){
        if (conj3[i] == 0){
        conj3[i] = -1;
        return conj3;
        }
    }
}*/
console.log("9-Reemplazo: ", replace(conj3))

// Repetido

const rep = [1,1,2,3,3,4];

function duplicate(rep){
    numrep = [];
    for(i = 0; i < rep.length ; i++){
        for(j = 1; j < rep.length; j++){
            if(rep[i] == rep[j] && i !== j){
            numrep = rep[i];
            return numrep;
            }
         else{
            numrep = -1;
         }
        }
    }
}
/*
function duplicate(rep){
    for(i = 0; i < rep.length ; i++){
        for(j = 1; j < rep.length; j++){
            if(rep[i] == rep[j] && i !== j){
                return rep[i];
            }
        }
    }
    return -1;
}*/
console.log("10-Duplicado: ", duplicate(rep));