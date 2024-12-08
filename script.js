document.write("Масив1" + "</br>");
let mas1 = [];
for (let i = 0; i < 10; i++) {
    mas1[i] = Math.random();
    document.write(mas1[i] + '</br>');
}

document.write("Масив2" + "</br>");
let mas2 = mas1.map(num => num * 10);
mas2.forEach(num => document.write(num + '</br>'));

document.write("Масив3" + "</br>");
mas2.forEach(num => {
    document.write("floor: " + Math.floor(num) + '</br>');
    document.write("round: " + Math.round(num) + '</br>');
    document.write("ceil: " + Math.ceil(num) + '</br>');
});


let arr = [25, 12, 1,28,5];
let sorted=(firstEl,secondEl)=>firstEl-secondEl;
arr.sort(sorted);
console.log(arr);

let arr_1 = ['Daniil', 'Denis', 'Vitalik','Anton','Denis'];
let sliced=arr_1.slice(1,4);
console.log(sliced);

let arr_2=[6,7,15,9,5,10,7];
let unshifted=arr_2.unshift(5,6,7);
console.log(unshifted);
console.log(arr_2);

let fiArray=[27,7,3,9,5,10,15];
let fiArray2 = fiArray.findIndex(el=> el==15);
console.log(fiArray2);