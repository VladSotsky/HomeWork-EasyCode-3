/*
1. Напишите функцию которая принимает в качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = [];

function addToArray(arr, newElem) {
    //1. Найти последний индекс в массиве
    //2. Записать в последний индекс новый элемент
}
console.log(arr.length);
arr[0] = 35
addToArray(arr, 35);

console.log(arr); // [35]
addToArray(arr, 35);
arr[1] = 35;
console.log(arr); // [35,35]
let newElem = {
    functionTypes: ['functionExpression', 'functionDeclaration']
};
addToArray(arr, {functionTypes: ['functionExpression', 'functionDeclaration']});
arr[2]=newElem;
console.log(arr); // [35, 35, { functionTypes: ['functionExpression', 'functionDeclaration'] }]



//2. Напишите функцию которая получает 3 параметра и возвращает объект типа: 
    
//     function simpleObjectGenerator(param1, param2, param3) {
//  var param={
//      param1:param1,
//      param2:param2,
//      param3:param3
//  }  
//  return (param);
//     }
 
// console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));


var userNames=[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
function simpleObjectGenerator(number,arr,text){
        var argument={
    argument1 : 77,
    argument2 : userNames,
    argument3 : 'PRIVET KAK DELA CHTO NOVOGO' }
    return (argument)
}
console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));

/*

3.  Напишите функцию которая принимает 3 аргумента, третий аргумент - это объект.
    
    Функция создает объект где ключ это первый аргумент, а значение - второй аргумент
    и добавляет свойство "name" из объекта и возвращает данный новый объект
*/

 
var myName = {
    name: 'Oleg'
};

function addNameToUser(family, Lustenko, myName) {
family=family,
    Lustenko=Lustenko;
    let newObject = {
        family: Lustenko
    }
    newObject.name=myName
    return (newObject)
}

console.log(addNameToUser('family', '%Lustenko%', myName));


/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

 function fizzBuzz(Fizz){
    if ((Fizz%3 ==0 && Fizz%5!=0)){                                                              
console.log("Fizz")
return(Fizz);
 }

 else if ((Fizz%5==0 && Fizz%3!=0 )){
     console.log('Buzz')
     return(Fizz)}
     else if ((Fizz%3==0 && Fizz%5==0)){
         console.log('FizzBuzz')
         return(Fizz);
}
 else if ((Fizz%3!=0 && Fizz%5!=0)){
    console.log(Fizz)
     return(Fizz)

 }
}
 
fizzBuzz(1 );
  


