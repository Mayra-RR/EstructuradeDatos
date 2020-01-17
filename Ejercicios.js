
// Suma
const items = [1,2,3,4,5];

function sum(nums){
    let suma = 0;
    for (let i=0; i<5; i++){
    suma = nums[i] + suma;
    }   
    return suma;
}

console.log("1-Suma: ", sum(items));

// Reverse
const items1 = [1,2,3,4,5];

/*const rev = items1.reverse(0,4);

console.log(rev);*/

function rev(items1){
    const copy = [...items1];
    for (let i=0; i<items1.length; i++){
    console.log(copy.pop())
    }
}
console.log("2-Reverse:")
rev(items1);

//Max

const array = [1,10,6,3,5];

function Max(array){
let maxnum = array[0];
    for (i=0; i<array.length; i++){
    if (maxnum < array[i])
        maxnum = array[i];
    }
    return maxnum;
}
console.log("3-Max: ", Max(array));
 
//Min

function Min(array){
let minnum = array[0];
    for (i=0; i<array.length; i++){
    if (minnum > array[i])
        minnum = array[i];
    }
    return minnum;
}
console.log("4-Min: ", Min(array));

//Concatenar

let chain = "";
function concat(frase){
    for (i=0; i<frase.length; i++){
    chain = chain + frase[i];
    };
    return chain;
};
concat(["5-", "Hola", " ", "Mundo", "!"])
console.log(chain);

//Promedio
const nums = [15,25,55];

function prom(nums){
    let prom = 0;
    for(i=0; i <nums.length; i++){
        prom = nums[i];
    }
    prom = prom/nums.length;
    return prom;
}
console.log("6-Promedio:", prom(nums));



