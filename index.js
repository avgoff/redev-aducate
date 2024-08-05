"use strict";

// function checkSpam(str){
//     if ( str.includes('viagra') || str.includes('XXX')) {
//         return true;
//     } else {
//         return false;
//     }
// }

//  console.log(checkSpam('viagra'));


// function truncate(str, maxlength) {
//     let strLength = str.length;
//     if (strLength > maxlength) {
//         str = str.substr(0,17) + "...";
//         return str;
//     } else {
//         return str;
//     }
// }

// console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );


//  function abc(str) {
//     return str.indexOf('мне',str);
//  }

// console.log( abc('Вот, что мне хотелось бы сказать на эту тему'));


// function abc(str){
//     str.trim();
//     return str.length;

// }
// console.log( abc('   fff   a   '));


// let str = "я люблю маму";
// console.log(str.indexOf('люблю')); //узнаем индекс где начинается "люблю"
// console.log(str.indexOf('ю',4)); //узнаем индекс где заканчивается "люблю", второе 'ю'
// console.log(str.slice(2,7)); 
// console.log(str.substring(2,7));
// console.log(str.substr(2,5));

// function acb(str) {
//    return str.slice(0,1) + str.at(1).toUpperCase() + str.slice(2,3) + str.at(3).toUpperCase() + str.slice(4);
  
   
// }

// console.log(acb('abcdef'));


// const person = {
//    name: 'Pavel',
//    age: 25,
//  };
 
//  const person2 = {
//   name2: 'Igor',
//   age2: 22,
// };
 
// let people = Object.assign(person,person2); 
// console.log(people); //слияние 2 объектов


// let a = '   123df';
// console.log(parseInt(a));//123

// console.log(Math.min(5,4,3,7));//3
// console.log(Math.pow(2,4));//2*2*2*2=16
//  let v = 13n;
//  console.log(typeof v);//bigint
//  let c= null;
//  console.log(typeof c);
//  let s;
//  console.log(s);

//  const person = {
//    name: 'Pavel',
//    age: 25,
//  };

//  const person2 = Object.assign({},person);

//  console.log( Object.keys(person2));
//  console.log( Object.values(person2));
//  console.log( Object.entries(person2));

//  console.log( person2);

//  let bb ='abcdefg';
//  console.log(bb.indexOf('c'));

//  let name = "Александр";
// console.log(`Привет, ${name}`);

// console.log(5&&9); //9
// console.log(8&&0);//0
// console.log(0&&8);//0
// console.log(0&&7||9);//9
// console.log(7&&0||4);//4
// console.log(0&&7||9&&4);
// console.log(8&&8&&0);//0
// console.log(8||8||8);//0


// let aaa = { 
// age: 25,
// ceil: 30
// };

// let bi ={...aaa};

// console.log(bi);
// console.log(aaa.age == bi.age)


// console.log(2 && 3 && 4);//4
// console.log(2 || 3 || 4);//2
// console.log(2 || 3 && 4);//2
// console.log(2 && 3 || 4);//3
// console.log("pasha" || 0);//str
// console.log("pasha" && 0);//0
// console.log(0 && "pasha");//0
// console.log(0 || "pasha");//str
// console.log(null || 7 && -4);//-4
// console.log(null && 7 || -4);//-4
// console.log(null && !7 || -4);//-4



// let oo = '  машина город дерево  ';
// console.log(oo.length);

// console.log(person[name]);
// console.log(oo.substr(2,9))

// let p = 'getckdrr';
// let t = 'bc';
// //console.log(p.localeCompare(t));
// console.log(p.codePointAt());
// console.log(t.codePointAt());
// console.log(p.slice(0,1)+p.at(1).toUpperCase()+p.slice(2));

// console.log(oo);
// oo = oo.trim();
// console.log(oo.at(0).toUpperCase()+oo.slice(1));

//защита 2----------------------------------------------------------------------------------------
// let a = {
//   age:25,
//   sauHi(){

//   },
//   say: ()=>{
    
//   }
// };

// let b ;
//  for ( let key in a) {
//   b[key] = a[key];
//  }
// console.log(b);

// let user = {
//   name: "Владислав",
//   age: 23,
//   talents: ['JS', 'HTML', 'CSS'],
//   sayAge: function () {
//       return this.age;
//   },
//   sayName: () => this.name,
//   sayTalents: function () {
//       let fn = () => this.talents;
//       return fn();
//   }
// };
// // 1
// console.log(user.sayAge());
// console.log(user.sayName());
// console.log(user.sayTalents());
//  delete user.name;

// function User (name){
//     this.name = name;
// };

// let alex = new User('Alex');

// // console.log(Math.max);

// var num = 10;
// var num = 15;
// console.log(!7);

//массивы 'a+b, c+d'


// -----------------------------------------------------------------------------------------
// let mass = [1,11,2,2]; //1 задача массивы

// function m(arr){
//     let sum = 0;

//     for(const item of arr){
//         if(item % 2 == 0){
//             sum += item;
//         } 
//     } 
//     console.log(sum);
// }
// m(mass);

// let mass = [1,11,2,2,8]; //2 задача массивы

// function s(arr){
//     let sum = 0;
//     let sr = 0;

//     for (let num of arr){
//         sum += num;
//         sr = sum /arr.length;
//     }
//     console.log(sr);
// }
// s(mass);

//3 задача массивы
// function b(arr, elem){
//     if( arr.includes(elem)){
//         return arr.indexOf(elem);
//     }
// };
// console.log(b([1,2,3,6,8, false], false));


// 4 задача массивы
// function shortStr(arr){
//     let strLength = arr.map((value) => value.length ); //переводим в длину 
//     let arrSort = strLength.sort((a, b) => a-b); // сортируем
//     return  arrSort[0]       // выводим первый элемент массива
// }
// console.log(shortStr(['первое', 'второе', 'третье','aa','d']));


//5 задача массивы
// function arrReverce(arr){
//     arr.reverse();
//     return arr
// };
// console.log(arrReverce([1,2,3,4,5]));

//6
// function maxNumber(arr){
//     let n = arr.filter((value) => {
//     return value > 18
//     })
//     return n;
// };
// console.log(maxNumber([1,2,19,20,5]));





//методы массивов------------------------------------------------------------------------------------
// 1
// function up(arr){
//     let upper = arr.map((value) => value.toUpperCase());
//     return upper 
// };
// console.log(up(['строка', 'еще строка']));

//2-------------------------------
// function a(arr){
//     for(let item of arr){
//         arr[item].push(`Привет, ${name} (${age})!`);
//         console.log(item);
//     }
// };
// console.log(a([{name:'Alex', age:23}, {name:'Igor', age: 25}, {name:'Pasha', age: 24}]));


//3
// function a(arr){
//     let result = 'Numbers: ' + arr.toString(arr);
//     return result
// };
// console.log(a([1,2,3,4]));

//4
// function chick(arr){
//     let result = arr.map((value) => value.slice(0,3));
//     return result
// };
// console.log(chick(['строка', 'еще строка']));

//5
// function onlyNum(arr){
//     let result = arr.filter((value) =>  Number.isFinite(value)) //тут сразу проверяет без преобразования явл ли числом
//     return result
// };
// console.log(onlyNum(['строка',2,5,'еще строка',4,'5']));

//6
// function s(arr){
//     let result = arr.filter((item) => arr.indexOf(item,1) % 2 === 0);
//     return result
// };
// console.log(s(['строка',2,5,'еще строка',33,'5']));

//7
// function a(arr){
//     let result = arr.filter(value => value.age>18)
//     return result
// };
// console.log(a([{name:'Alex', age:23}, {name:'Igor', age: 18}, {name:'Igor', age: 19}]));

//8
// function checkA(arr){
//     let result = arr.filter(value => value.includes("а"))
//     return result
// };
// console.log(checkA(['строка', 'еще строка','нету','тоже нету', 'а есть']));

//9
// function aboveTen(arr){
//     let result = arr.filter(value => value>10 && Number.isFinite(value) === true) //+проверка на число
//     return result
// };
// console.log(aboveTen([1,2,80,25,4,69,'45']));

//10
// function checkAge(arr){
//     let result= arr.sort((a, b) => a.age-b.age)
//     return result
// }
// console.log(checkAge([{ name: 'Pavel', age: 25 }, { name: 'Alex', age: 20 },  { name: 'Irina', age: 30 },]));








//------------------------------------------------------------------------------------------------------------------------------
//задача 10 трелло
// function findNeedle(str) {
//     let result = str.indexOf('needle');
//     return(`Нашел иголку на позиции: ${result}`);
// }

// console.log(findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]));

//задача 2 трелло
// function deleteVowels(str) {
//     let vowels = ['о','а', 'я','е', 'у','Э','О'];
//     let splitting = str.split('')
//    let filterSplitting = splitting.filter(splitting => !vowels.includes(splitting));// проверяет что не содержится в volwes из splitting
//     let joining = filterSplitting.join('');
//    return joining 
// }
// console.log(deleteVowels('Этот сайт для лузеров ЛОЛ!'));

//задача 11 трелло
// function invert(arr){
//     let result = arr.map(item => item * -1)
//     return result
// }
// console.log(invert([1,-2,4,-5]));

//задача 4 трелло 
// function reverseWord(str) {  
//     let splitting = str.split(" ")
//     let splittingReverse = splitting.map(item => item.split('').reverse().join(''))
//     let joining = splittingReverse.join(" ");
//     return joining 
// }
// console.log(reverseWord('This is an example!'));


//задача 4 трелло
// function accum(str){
//    let splittingStr = str.split('');
//    let repeatIndex = splittingStr.map(item => item.toLowerCase()).map((item, index) => item + item.repeat(index));
//    let upperCase = repeatIndex.map( item => item.at(0).toUpperCase() + item.slice(1))
//    let joining = upperCase.join('-');
//    return joining
// }
// console.log(accum('RqaEzty'));

//задача  12 трелло
// function arrDiff(arr1,arr2){
//     let result = arr1.filter(value => !arr2.includes(value))
//     return result
// }
// console.log(arrDiff([1,2,2,2,3,4],[2,3]));


// const arr = [
//     {name: "Маша", age: 25, isMan: false},
//     {name: "Саша", age: 38, isMan: true},
//     {name: "Катя", age: 17, isMan: false},
//     {name: "Ваня", age: 10, isMan: true},
//     {name: "Максим", age: 40, isMan: true},
//    ];

// let res = arr.map(item => item.name);
// let res2 = arr.filter(item => !item.isMan);
// let res3 = arr.sort( (a,b) => a.age - b.age);
// let res4 = arr.reduce((prev, item)=> prev+item);
//let res5 = arr.find(10);


// -------------------------------------------------------

// const chainMaker = {
//   arr: [],
  
//   addLink: function(value){
//     this.arr.push(value);
//     return this;
//   },

//   reverseChain: function(arr){
//     this.arr.reverse();
//     return this;
//   },
  
//   getLength: function(arr){
//     let arrLength = this.arr.length;
//     return arrLength;
//   }, 

//   removeLink: function(position) {
//     try {
//       if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.arr.length) {
//         throw new Error('Invalid position');
//       }
    
//       this.arr.splice(position - 1, 1);
//     } catch (error) {
//       console.error(error.message);
//     }
    
//     return this;
//   },

//   finishChain: function(){
//     const result = this.arr.map(value => `( ${value} )`).join('~~');
//     this.arr = []; // чистим, а то оно все предыдущее складывает
//     return result;
//   }
  
// };
// console.log(chainMaker.addLink(1).addLink(2).removeLink('hh').addLink(3).finishChain ());

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()); //'(1)~~(2)(3)'
//console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain ()); //=> '(2)~~(1)~~(3)'
//console.log(chainMaker.getLength());


//----------------------------------
// 1
// function calculateSum(a,b) {
//   if (typeof a === 'undefined' || typeof b === 'undefined') {
//     throw "нет аргумента";
//   }

//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw "Не является числом!";
//   }
//   return a + b;
// }

// try {
//   const result = calculateSum(2,'g');
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }

// 2
// function average(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//           throw 'Один или несколько элементов не являются числом';
//         }
//       }

//     if (arr.length === 0){
//         throw 'У вас пустой массив';
//     }
//     let sum =  arr.reduce((sum, value)=> sum + value, 0);
//     return sum / arr.length;
// }

// try{
//     let result = average([2,8,'5']);
//     console.log(result);
// }catch(error){
//     console.log(error);
// }

// 3
// const myJobject = {x:1, y:2};

// function sum(obj){
//     if( !Object.keys(obj).includes('x') || !Object.keys(obj).includes('y')){
//         throw 'Не х или у';
//     }

//     if(typeof Object.values(obj) !== 'number'){
//         throw 'Не является числом';
//     }

//     return Object.values(obj).reduce((x,y)=> x + y, 0);
// } 

// try{
//     console.log(sum(myJobject));
// }catch(error){
//     console.log(error);
// }

// 4
// function strLength(str){
//     if ( typeof str !== 'string'){
//         throw 'Не является строкой';
//     }
//     return str.length;
// }

// try{
//     console.log(strLength(2));
// }catch(error){
//     console.log(error);
// }

// 5
// function factorial(num){
//     if(typeof num !== 'number'){
//         throw 'Значение не является числом';
//     }

//     if(num < 0){
//         throw 'Введите положительное число';
//     }

//     let result = 1;
//     for( let i = 1; i<=num; i++){
//         result = result * i ;
//     }
//     return result;
// }

// try{
//     console.log(factorial(5));
// }catch(error){
//     console.log(error);
// }


//-------------------------------------------------------------------------------------------------------------------------------------
// 1
// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// Person.prototype.Greeting = function(){
//     console.log(`Hi, my name is ${this.name}! I'm ${this.age} and i from ${this.city}`);
// };

// const Alex = new Person('Alex', 23, 'Gomel');

// Alex.Greeting();



// 2
// const health = {
//     sport: function() {
//         console.log('занятие спортом');
//     }
// };


// const teach = Object.create(health);
// teach.education = function(){
//         console.log('саморазвитие');
//     };


// const dream = Object.create(teach);
// dream.sleep = function(){
//     console.log('больше спать');
// };
// dream.sport();
// dream.education();
// dream.sleep();


// 3
// const obj = {
//     a: "AAA",
//     __proto__: {
//         a: "BBB",
//         funcA() {
//             return this.a;
//         }
//     }
// };
 
// console.log(obj.funcA());

// выведет ААА, хоть мы и добавили прототип объекта.Но метод мы вызываем в obj, поэтому выведет AAA.

// 4
// const obj = {
//     a: "AAA",
// }
// const obj2 = {
//     a: "BBB",
//     funcA() {
//         return this.a;
//     }
// }

// obj.__proto__ = obj2;

// console.log(obj.funcA());
// / AAA, так как мы obj2 сделали прототипом для obj, и теперь obj наследует метод от obj2. Ну и метод мы вызываем для obj

// 6
// const arr = [1,2,3,4];

// Array.prototype.myfilter = function(callback, thisArg) {
//     const filteredArr = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback.call(thisArg, this[i], i, this)) {
//         filteredArr.push(this[i]);
//       }
//     }
//     return filteredArr;
//   };

// const result = arr.myfilter(item=> item > 2);

// console.log(result); //[3,4]

// 5
// const arr = [1,2,3];

// Array.prototype.myMap = function(callback, thisArg){
//     const mapedArr = [];
//     for (let i = 0; i < this.length; i++) {
//         mapedArr.push(callback(this[i], i, this));
//     }
//     return mapedArr;

// };

// const result = arr.myMap(item=> item + 1);
// console.log(result); //[2,3,4]

// 8
// / все типы данных являются потомками объектов.







//------------------------------------------------------------------------------//3 дата

// function getCurrentDateTime() {
//     const currentDate = new Date();
//     const localDateTime = currentDate.toLocaleString('en-US', { timeZone: '+03:00' });
//     return localDateTime;
//   }
  
//   console.log(getCurrentDateTime());





//1
// function roundToNearestFiveMinutes(dateTime){
//     const dateParse = dateTime.split(" ");
//     const date = dateParse[0].split("-");
//     const time = dateParse[1].split(":");

//     const day = parseInt(date[0]);
//     const month = parseInt(date[1]) - 1; 
//     const year = parseInt(date[2]);

//     const hours = parseInt(time[0]);
//     const minutes = parseInt(time[1]);

//     const dateObject = new Date(day, year, month, hours, minutes);

//     const roundedMinutes = Math.ceil(minutes / 5) * 5;
//     dateObject.setMinutes(roundedMinutes);

//     const formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     return formattedTime;
// }

// console.log(roundToNearestFiveMinutes("17-03-2023 12:13"));

//2
// function raznica(date1, date2) {
//     const dateFirst = new Date(date1);
//     const dateSecond = new Date(date2);
  
//     return dateFirst.getDate() - dateSecond.getDate();
//   }
  
//   console.log(raznica("2024-01-17", "2024-01-16"));


//3
// function formateDate(year, month, day){
//   const date = new Date( year, month, day);
//   const result = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
//   return result;
// }

// console.log(formateDate(2024, 1, 11));

//4
// function timeAgo(year, month, day, hours, minutes){
//     const dateZadano = new Date(year, month, day, hours, minutes);
//     const dateNow = new Date();

//     const timeDifferenceMs = dateNow - dateZadano;
//     const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
//     const hoursRemainder = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutesRemainder = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));

//     let timePassedString = "";

//     if (days > 0) {
//         timePassedString += `${days} ${days === 1 ? 'день' : 'дня'} `;
//     }
//     if (hoursRemainder > 0) {
//         timePassedString += `${hoursRemainder} ${hoursRemainder === 1 ? 'час' : 'часа'} `;
//     }
//     if (minutesRemainder > 0) {
//         timePassedString += `${minutesRemainder} ${minutesRemainder === 1 ? 'минута' : 'минуты'}`;
//     }

//     if (timePassedString === "") {
//         timePassedString = "менее минуты назад";
//     } else {
//         timePassedString += " назад";
//     }

//     return timePassedString;
    
// }

// console.log(timeAgo(2024, 1, 26, 20, 10, 0));










//------------------------------------------коллекции------------------------------------------------------------------------------


// function countWords(str){
//     const arrWords = str.toLowerCase().split(' ');
//     const countWordsObj = {}; //сюда записываем какого слова сколько раз

//     for( let word of arrWords){
//         if(countWordsObj[word]){
//             countWordsObj[word]++; 
//         } else{
//             countWordsObj[word] = 1;
//         }
//     }
    
//     function countWordsObjToMap(obj){
//         const map = new Map();

//         for(let key in obj){
//             if(Object.keys(obj)){
//                 map.set(key, obj[key]);
//             }
//         }
//         return map;
//     }
//     return countWordsObjToMap(countWordsObj);

// }
// console.log(countWords("Я люблю маму, а так же я люблю JavaScript"));


// const myArr = ['апельсин', 'груша', 'яблоко', 'манго', 'апельсин', 'киви', 'ананас', 'груша', 'мандарин'];

// function uniqueItems(arr){
//     const set = new Set();
//     for (let item of arr) {
//         set.add(item);
//       }
//     return set;
// }

// console.log(uniqueItems(myArr)); 

//---------------------------------замыкание, рееккурсия, каррирование


// function abc(number){
//     let sum = 0;

//     function efg(num){
//         sum += num;
//         return sum;
//     }
//     return efg;
// }
// let zamuk = abc();

// console.log(zamuk(2)); //2
// console.log(zamuk(4)); //6


// function sum(arr) {
//   let res = arr.shift();

//   if(arr.length != 0){
//     res += sum(arr);
//   }
//     return res;
//   }
   
// console.log(sum([1, 3, 5]));
// console.log(sum([3, 3, 5]));



// function factorial(num) {
//   if(num === 0){
//     return 1;
//   } else{
//     return num * factorial(num - 1);
//   }
// }
//  console.log(factorial(5));
 

// function sum(a,b,c){
//     return a+b+c;
// }

// function currySum(func){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return func(a,b,c);
//         };
//     };
// };
// }

// console.log(currySum(sum)(1)(2)(3)); // 6
// console.log(currySum(sum)(3)(3)(3)); // 9

// const now = new Date();

// console.log(now.getHours()+':'+now.getMinutes());
// console.log(now.getHours()+':'+now.getMinutes());

// const person = {fullName: "Pavel Hutsu", age: 25};
// const a = 'fullName';
// console.log(person[a]); // Pavel Hutsu











// const user = {
//     'aa': 21,
//      'b': 22
// };

// function Person(name){
//     this.name = name;
// }

// Person.prototype = user;

// const nn = new Map(Object.entries(user));

// console.log(Object.fromEntries(nn));



// const now = new Date();
// now.setDate(now.getDate()-2);
// now.setHours(now.getHours()+3);
// console.log(now);






// const a = {
//     'a': 1,
//     'b': 2,
//     'c': 3
// };
// console.log(Object.values(a));

// const {b: property = 20} = a;
// const arr = [1,2,3,4,5];

// const [, , ,a] = arr;

// function a(){
//     const b = 10;

//     function n(){
//         return b;
//     }
//     return n();
// }

// console.log(a());



// function sum(a,b){
//     return a + b;
// }

// function curr(fn){
//     return function(a){
//         return function(b){
//             return fn(a,b);
//         };
//     };
// }

// function countDown(n){
//     console.log(n);
//     if( n > 0){
//         return countDown(n-1);
//     }
// }
// console.log(countDown(5));










// сделать коллекию map из данного объекта
// const example = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// //[[a,1], [b, 2], [c, 3]]

// const a = new Map(Object.entries(example));
// console.log(a);


// Array.prototype.myMap = function (callback, thisArg){
//     const newArr = [];
//     for(let i = 0; i<this.length; i++){
//         newArr.push(callback.call(thisArg, this[i], i, this))
//     }
//     return newArr;
// };


// const now = new Date();

// console.log(now.setDate(10));



//----------------------------------------------------------------КЛАССЫ-----------------------------------------------------
//1
// class Rectangle{
//   constructor(width, heigh){
//     this.width = width;
//     this.heigh = heigh;
//   }

//   getArea(){
//     return 'Площаль прямоугольника равна:' +' '+ this.width * this.heigh;
//   }
// }

// const rectangle1 = new Rectangle(10,5);
// console.log(rectangle1.getArea());

// //2

// class Square extends Rectangle{
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//     this.sideLength = sideLength;
//   }

//   getArea(){
//     return 'Площаль квадрата равна:' +' '+ this.sideLength * this.sideLength;
//   } 
// }

// const square = new Square(5);
// console.log(square.getArea());

// //3
// class Teacher{
//     constructor(name,ratings){
//         this.name = name;
//         this.ratings = [ratings];
//     }
//     gradeStudent(grade){
//         this.ratings.push(grade);

//     }
// }

// const person1 = new Teacher('alex',10);
// person1.gradeStudent(7);
// console.log(person1); //Teacher { name: 'alex', ratings: [ 10, 7 ] }

// //4
// class BankAccount {
//     constructor(balance,ownerName){
//         this.balance = balance;
//         this.ownerName = ownerName;
//     }

//     deposit(amount){
//         if(Number.isFinite(amount) && typeof amount === 'number'){
//             this.balance += amount;
//         } else{
//             console.log('Введите корректное значение');
//             return;
//         }
//     }

//     withdraw(amount){
//         if(Number.isFinite(amount) && typeof amount === 'number'){
//             this.balance -= amount;
//         } else{
//             console.log('Введите корректное значение');
//             return;
//         }
//     }

//     getBalance(){
//         return 'текущий баланс составляет:'+' '+ this.balance;
//     }
// };

// const Alex = new BankAccount(10, 'Alex' );
// console.log(Alex.getBalance());

// //5
// class Product {
//     #tax ;

//     constructor(name,price,tax = 0.1){
//         this.name = name;
//         this.price = price;
//         this.#tax = tax;
        
//     }

//     priceWithTax(){
//         return this.price + (this.price * this.#tax);
//     }

//     get tax(){
//         return this.#tax;
//     }

//     set tax(tax){
//         this.#tax = tax;
//     }
// }
// const apple = new Product('apple', 700);
// console.log(apple);  //Product { name: 'apple', price: 700 }
// console.log(apple.priceWithTax()); //770



//доп для классов

// class Student{
//     #age;
//     #isMan;
//     #validAge = { min: 18, max: 65 };

//     constructor(name, age, isMan, createdDateStr){
//         this._name = name;
//         this.#age = age;
//         this.#isMan = isMan;
//         this._createdDateStr = createdDateStr;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(name){
//         if(typeof name !== 'string' || name.length < 2 || name.length > 15){
//             console.log('некорректно введено имя, длина от 2 до 15');
//             return;
//         } 
//         this._name = name;
//     }

//     get age(){
//         return this.#age;
//     }

//     set age(age){
//         if (typeof age !== 'number' || !Number.isFinite(age) || age < this.#validAge.min || age > this.#validAge.max){
//             console.log(`Возраст должен быть от ${this.#validAge.min} до ${this.#validAge.max} лет`);
//             return;
//         }
//         this.#age = age;
//     }

//     get isMan(){
//         return this.#isMan; 
//     }

//     set isMan(isMan){
//         if (typeof isMan !== 'boolean'){
//             console.log('принимается значение true или false');
//             return;
//         } this.#isMan = isMan;
//     }

//     get createdDateStr(){
//       return this._createdDateStr;
//     }

//     set createdDateStr(createdDateStr){
//       if(typeof createdDateStr !== 'string'){
//           console.log('Введите дату в формате "DD/MM/YYYY"');
//           return;
//       };

//       const strToArr = createdDateStr.split('/') //строку в массив по разделителю
//       if (strToArr.length !== 3) {
//         console.log('Введите дату в формате "DD/MM/YYYY"');
//         return;
//       };

//       const [day, month, year] = strToArr;
//       const date = new Date();
//       date.setDate(day);
//       date.setMonth(month - 1);
//       date.setFullYear(year);
//       this._createdDateStr = createdDateStr;
//     } 

//     showInfo(){
//       const gender = this.#isMan ? 'male' : 'female';
//       return `Name: ${this._name}, Age: ${this.#age}, Gender: ${gender}, Date: ${this._createdDateStr}`
//     }
// }
// const alex = new Student('ALex', 25, true, "26/06/2024");
// console.log(alex.age); //Возраст должен быть от 18 до 65 лет

// console.log(alex.showInfo());

// const studentsData = [
//   { "name": "Pasha", "age": 70, "isMan": true, "createdDateStr": "26/6/2024" },
//   { "name": "Olga", "age": 18, "isMan": false, "createdDateStr": "15/3/2023" },
//   { "name": "Ivan", "age": 22, "isMan": true, "createdDateStr": "1/1/2024" },
//   { "name": "Katya", "age": 19, "isMan": false, "createdDateStr": "30/11/2023" },
//   { "name": "Dmitry", "age": 21, "isMan": 'male', "createdDateStr": "1/2/2024" }
// ];

// const json = JSON.stringify(studentsData);






//-------------------защита 5 чек-----------------
// class Car {
//     #acceptableBrands = ["Tesla", "BMW", "Mercedes"];
//     constructor(brand, model) {
//       this.brand = brand;
//       this.model = model;
//     }

//     set brand(value){
//         if( this.#acceptableBrands.includes(value)){
//             console.log('указан неверный бренд');
//             return;
//         }
//         return this._brand = value;
//     }
  
//     static isElectric(car) {
//      return car instanceof ElectricCar
     
//     }
//   }

//   class ElectricCar extends Car {
//     constructor(make, model) {
//       super(make, model);
//     }
//   }
  
//   const myCar = new Car("Toyota", "Corolla");
//   const electricCar = new ElectricCar("Tesla", "Model S");
//   console.log(Car.isElectric(myCar)); // false
//   console.log(Car.isElectric(electricCar)); // true

//   const mixin = {
//     imixin(){
//         return `я примесь`;
    
//     }
//   };

//   Object.assign(ElectricCar.prototype, mixin);

//   console.log(electricCar.imixin());
  


  //Преобразовать массив объектов с полями name и age в массив строк вида "Имя: Возраст", где Имя и Возраст берутся из объектов.
// const peoples = [
//     {
//         name: 'Николай',
//         age: 19
//     },
//     {
//         name: 'Василий',
//         age: 45
//     },
//     {
//         name: 'Женя',
//         age: 22
//     },
//     {
//         name: 'Олег',
//         age: 30
//     }
// ]

// function evArr(arr){
//     return arr.every(value => { return value.age > 18});

// };
// console.log(evArr(peoples));


// function redArr(arr){
//     return arr.reduce((previousValue, currentValue, currentIndex, array) => { return previousValue + currentValue.age},0)/arr.length;
// }

// console.log(redArr(peoples));


// function sortArr(arr){
//     return arr.sort((a, b) => {return a.name[0].charCodeAt() - b.name[0].charCodeAt()});
// }

// console.log(sortArr(peoples));




//---------------------------callback задачи--------------
// //1

// function sumNumbers(a, b, callback){
//     const result = a + b;
//     callback(result)
// }

// function resultCallback(result) {
//     console.log('Результат: ' + result);
// }

// console.log(sumNumbers(2,5, resultCallback));

// //2
// function someFunction2(arr, callback){
//     for( let i = 0; i<arr.length; i++){
//         callback(arr[i]);
//     }
// };

// function myCallback2(item){
//     console.log(item);
// };

// let numbers = [1,2,3,4];

// console.log(someFunction2(numbers, myCallback2));

// //3
// function someFunction3(arrStr, callback){
//     for (const str of arrStr){
//        callback(str); 
//     }
    
// };

// function myCallback3(str){
//     console.log(str.toUpperCase());
// };

// let arrSomeString = [
//     'строка1',
//     'строка2',
//     'ещё строка'
// ];

// console.log(someFunction3(arrSomeString, myCallback3));

// //4
// function someFunction4(arrNum, callback){
//     for (const num of arrNum){
//         callback(num);
//     }
    
// }

// function myCallback4(num){
//     if (num % 2 == 0){
//         console.log(`${num} - Это четное число`);
//         return;
//     } console.log(`${num} - Это нечетное число`);
//     return
// }
// let someNumbersArr = [ 1,2,33,4];

// console.log(someFunction4(someNumbersArr, myCallback4));

// //5
// function someFunction5(arr, callback){
//     for (let obj of arr){
//         callback(obj);
//     }
// };

// function myCallback5(obj){
//     if( obj.hasOwnProperty('age')){
//         console.log(`Возраст: ${obj.age}`);
//         return;
//     } else{
//         console.log('Такого свойства нет');
//     }
// }

// const someArr = [
//     {
//         name: 'Николай',
//         age: 19
//     },
//     {
//         name: 'Василий',
//         age: 45
//     },
//     {
//         name: 'Женя',
//         age: 22
//     },
//     {
//         name: 'Олег',
//     }
// ];
// console.log(someFunction5( someArr, myCallback5));




//---------------------тема Promise------------------------


// //1 Напиши функцию, которая получает на вход два числа и возвращает Promise, который разрешается через 1 секунду с результатом суммы этих чисел. Если одно из чисел не является числом, Promise должен быть отклонен с ошибкой.

// function someFunction(a,b){
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (typeof a != 'number' || typeof b != 'number'){
//       reject('Аргументы должны быть числами');
//     } else{
//       resolve (a+b);
//     }
//   }, 1000);
// });
// };

// someFunction(1,4)  //5
//   .then((result) => {
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   someFunction(1,'g')  //Аргументы должны быть числами
//   .then((result) => {
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// //2 Напиши функцию getUser(id), которая возвращает промис, который разрешается (resolve) пользователем с заданным идентификатором, или отклоняется с ошибкой, если пользователь не найден.

//  const users = [
//   { id: 1, name: "Nastya" },
//   { id: 2, name: "Ivan" },
//   { id: 4, name: "Pavel" }
// ];

// const getUser = (users, id) => {
//   return new Promise((resolve, reject)=>{
//     const user = users.find(user => user.id === id)

//     if(user){
//       resolve(user)
//     }else {
//       reject( `пользователь с ID ${id} не найден`);
//     }
//   })
// }

// getUser(users, 2) // { id: 2, name: "Ivan" }
//   .then(user => console.log(user))
//   .catch(error => console.error(error));
// getUser(users, 3) // "Пользователь не найден"
//   .then(user => console.log(user))
//   .catch(error => console.error(error));


// //3 Напиши функцию sum(numbers), которая возвращает промис, который разрешается (resolve) суммой чисел в массиве, или отклоняется с ошибкой, если массив пуст

// const sum = (numbers) => {
//   return new Promise((resolve, reject)=>{
    
//       if( numbers.length == 0){
//         reject('Этот массив пуст')
//       } else{
//         let summury = 0;
//         for(let num of numbers){
//         summury += num;
//       } 
//       resolve(summury)
//     }
//   })
// }

// sum([1, 2, 3, 4, 5]).then(sum => console.log(sum)) // 15
// sum([]).catch(err => console.log(err)) // "Массив пуст"

// //4 Напиши функцию delayedGreeting(name, delay), которая будет возвращать Promise, который будет разрешаться (resolve) через заданный промежуток времени delay и выводить на экран приветствие Hello, ${name}!. 
//  const delayedGreeting = (name, delay) =>{
//   return new Promise((resolve)=> {
//       setTimeout(()=>resolve(`Hello, ${name}!`), delay*1000)
//   })
//  }

//  delayedGreeting('Alex',3)
//   .then(date => console.log(date));

// //5 Напиши функцию waitForAll(promises), которая будет принимать массив Promise и возвращать новый Promise, который разрешится (resolve), когда все Promise из массива promises будут выполнены. Результатом выполнения нового Promise будет массив результатов выполнения каждого из Promise из исходного массива.
// function waitForAll(promises){
//     return Promise.all(promises);
// }

//   let pr1 = new Promise(resolve=> setTimeout(()=>resolve('prom1',1000)));
//   let pr2 = new Promise(resolve=> setTimeout(()=>resolve('prom2',2000)));
//   let pr3 = new Promise(resolve=> setTimeout(()=>resolve('prom3',3000)));

// waitForAll([pr1, pr2, pr3])
//   .then(date => console.log(date));

// //6
// Promise.reject('a')//промис завершается с ошибкой
//   .catch(p => p + 'b')//его обрабатывает первый .catch() будет ab ,больше ошибки нет
//   .catch(p=> p +'c')//ошибки нет, идем дальше
//   .then(p => p +'d')//далее выполнится then abd
//   .finally(p => p +'e')//получается значение из finally игнорируется и промис передается дальше
//   .then(p => console.log(p))//вывод в консоль






//----------------------async/await---------------------


// // 1 Напиши асинхронную функцию, которая принимает на вход строку и callback-функцию. Внутри асинхронной функции нужно вызвать callback-функцию через указанное количество миллисекунд, где количество миллисекунд равно длине строки. callback функция должна выводить в консоль переданную строку

// async function someFunction(str, callback){
//   setTimeout(() => callback(str), str.length*1000)
// }

// function myCallback(str){
//   console.log(str);
// }

// someFunction('JS', myCallback);

// //2 Напиши функцию, которая получает на вход число и возвращает промис, который будет разрешен только после того, как будет вычислено факториал этого числа.

// async function asyncFunction(num){
//   const myProm = (num) => new Promise((resolve, reject)=>{
//     if(num < 0){
//       reject('Введите положительное число')
//     } else{
//       resolve(factorial(num));
//     }
//   } );

//   function factorial(num) {   //в этой функции вычисляем факториал
//     if (num === 0) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   };

//   try{
//     const data = await myProm(num);
//     console.log(data);
//   } catch (error){
//     console.log(error);
//   }
// }

// asyncFunction(3)

// //5 Напиши функцию, которая принимает 2 промиса (оба успешно завершенных). Первый возвращает твое имя, второй твою фамилию. Функция должна вернуть успешно завершенный промис с имя + фамилия


// async function some(name, sourName){
//   const namePromise = (name) => Promise.resolve(`${name}`);
//   const sourNamePromise = (sourName) => Promise.resolve(`${sourName}`);

//   try{
//     const date1 = await namePromise(name);
//     const date2 = await sourNamePromise(sourName);
//     console.log(date1 + ' ' + date2);
//   } catch (error){
//     console.log(error);
//   }
// }

// some('alex', 'Gum');


// //4 Напиши функцию, которая получает на вход два аргумента: строку и число. Функция должна возвращать промис, который будет разрешен только после того, как введенная строка будет выведена в консоль указанное количество раз. Например, если функции переданы аргументы "hello" и 3, то промис должен разрешиться только после того, как строка "hello" будет выведена в консоль 3 раза.

// async function someFunction(str, num){
//   const prom1 = (str, num) => new Promise(resolve => {
//     for (let i = 0; i < num; i++) {
//       console.log(str);
//     };
//   })

//   try{
//     const date = await prom1(str, num)
//     console.log(date);
//   } catch (error){
//     console.log(error);
//   }
// };
// someFunction('hello', 3)

// //3 В задаче нужно написать 2 промиса. Первый вернет твое имя. Второй вернет твой возраст.
// //Через асинхронную функцию обработать промисы и вернуть промис, который завершается успешно со значением строки. 
// //Пример строки: "Имя - возраст" "Паша - 26"
// //Полученую строку вывести в консоль...
// //Если хотя бы один из промисов завершается с отклонением, функция должна вернуть промис со строкой "плохой запрос"

// async function some(name, age){
//   const namePromise = (name) => new Promise((resolve, reject) => {
//     if(typeof name !== 'string'){
//       reject('плохой запрос')
//     }else{
//       resolve(`${name}`)
//     }
//   });

//   const agePromise = (age) => new Promise((resolve, reject) => {
//     if(typeof age !== 'number'){
//       reject('плохой запрос')
//     }else{
//       resolve(`${age}`)
//     }
//   });

//   try{
//     const date1 = await namePromise(name);
//     const date2 = await agePromise(age);
//     console.log(date1 + ' - ' + date2);
//   } catch (error){
//     console.log(error);
//   }
// }

// some('alex', 24);