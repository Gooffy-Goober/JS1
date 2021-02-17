//задание 1
console.log("Задание 1");

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

//задание 2
console.log(" ");
console.log("Задание 2");

let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

//задание 3
console.log(" ");
console.log("Задание 3");

let width = 10;
let height = 23;

let SPryam = width * height;
console.log("Площадь прямоугольника, см.:", SPryam);

//задание 4
console.log(" ");
console.log("Задание 4");

let heightCilindra = 10;

let VCilindra = Math.PI * Math.pow(a7 / 2, 2) * heightCilindra;
console.log("Объем цилиндра, м:", VCilindra);

//задание 5
console.log(" ");
console.log("Задание 5");

let radiusKruga = 10;

let SKruga = Math.PI * Math.pow(radiusKruga, 2);
console.log("Площадь круга, см:", SKruga);

//задание 6
console.log(" ");
console.log("Задание 6");

let a = 5;
let b = 7;
let h = 10;

let STrap = h/2*(a+b);
console.log("Площадь трапеции, см:", STrap);


//задание 7
console.log(" ");
console.log("Задание 7");

let S = 2;
let p = 10;
let years = 5;

let Pereplata = (S + (S / 100 * p * years)) - S;
console.log("Переплата по кредиту, млн. руб:", Pereplata);

//задание 8
console.log(" ");
console.log("Задание 8");

a = 8;
b = 3;
let x;

x=(16-a)/2+b;
console.log("a+2(x-b)=16 x=",x);

x=(a-15*b)/(b-6);
console.log("b(x+15)=a+6x x=",x);

x=23780/(a+b+3);
console.log("x+2x+ax+bx=23780 x=",x);

//задание 9
console.log(" ");
console.log("Задание 9");

console.log("Бывало, спит у ног собака,");
console.log("костер занявшийся гудит,");
console.log("и женщина из полумрака");
console.log("глазами зыбкими глядит.");
console.log(" ");
console.log(" ");
console.log("Потом под пихтою приляжет");
console.log("на куртку рыжую мою");
console.log("и мне, задумчивая, скажет:");
console.log(" ");
console.log(" ");
console.log("\"А ну-ка, спой!..\"- и я пою.");

//задание 10
console.log(" ");
console.log("Задание 9");

let string1="индо земля зашаталась под ногами-и вырос,";
let string2="и заревел он голосом диким...";
let string3="блеснула молния и ударил гром,";
let string4="а так какое-то чудище, страшное и мохнатое,";
let string5="как будто из-под земли, перед купцом:";
let string6="Он подошёл и сорвал аленький цветочек.";
let string7="зверь не зверь, человек не человек,";
let string8="В ту же минуту, безо всяких туч,";

let text= string6 + " " +string8 + " " + string3+" " + string1+" " + string5+" " + string7+" " + string4+" " + string2;

console.log(text);
