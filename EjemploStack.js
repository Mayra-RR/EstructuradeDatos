let items = [];
let top = 0;

function init(size){
    items = new Array(size);
    top = 0;
}

function push(item){
    items[top] = item;
    top++
}

function pop(){
    let x = items[top-1];
    items[top-1]=null;
    top--;
    return x;
}

function peek(){
    let x = items[top-1]
    return x;
    //return items[top-1];
}

function isEmpty(){
   return top == 0;
   /* if (top == 0){
    return true;
    }
    else
    return false;
    */
}

function isFull(){
    return top == items.length;
}

init(6);
console.log("Is it empty?", isEmpty());
console.log("Is it full?", isFull());
push(6);
console.log("Is it empty?", isEmpty());
push(7);
push(9);
push(10);
push(11);
push(12);
console.log("Is it full?", isFull());
isEmpty();
console.log("Pop: ", pop());
push(15);
console.log("Peek: ",peek());
console.log(items);