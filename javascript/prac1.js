/*let no = prompt("Enter a no. :");
if(no%5===0){
    console.log(no," is divisible by 5");
}else{
    console.log(no," is not divisible by 5");
}*/

/*let marks= prompt("Enter marks :");

if(marks>=80 && marks<=100){
    console.log("You have got ",marks," marks, and your grade is A");
}

if(marks>=70 && marks<=79){
    console.log("You have got ",marks," marks, and your grade is B");
}

if(marks>=60 && marks<=69){
    console.log("You have got ",marks," marks, and your grade is C");
}

if(marks>=50 && marks<=59){
    console.log("You have got ",marks," marks, and your grade is D");
}

if(marks>=0 && marks<=49){
    console.log("You have got ",marks," marks, and your grade is F");
}
*/

/*let s=0;
for(let no=0;no<=100;no++){
    if(no%2===0){
        console.log(no);
        s++;
    }
}
console.log("No of even nos frm 0 to 100 is : ",s);*/
/*let orgnum=70
let num;
do{
     num=prompt("Guess kar!");
     if(num!=orgnum){
        console.log("Wrong ");
     }else break;
}
while(num!=orgnum);

console.log("Right guess kelas");
*/

/*let fullName=prompt("Enter your full name:");
let username = "@"+fullName+fullName.length;
console.log("Your username is : ",username);*/

/*let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let avrg=sum/(marks.length);
console.log("avrg is : ",avrg);*/
/*
let prices = [250,645,300,900,50];
let i=0;
for(let val of prices){

    console.log(`The price at index ${i}=${val}`);

    prices[i]=(prices[i]*90)/100;
    console.log(`discount : ${prices[i]}`);
    i++
}*/

/*let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"OLA");
console.log(companies);
companies.push("Amazon");
console.log(companies);
*/

/*let s=0;
const countVowels=(str)=>{
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
            console.log(char);
            s++;
        }
    }
    console.log(`There are ${s} Vowels present in the ip statement`);
}*/

/*let n=prompt("Enter the size of the array : ");
let arr=[];
for(let i=0;i<n;i++){
     arr[i]=prompt("Enter the element of the array :");
}
let calcSquare=(val,index)=>{
    console.log(`${(val*val)}, at index : ${index}`);
};

arr.forEach(calcSquare);*/


/*let n=prompt("Enter the no of students : ");
let arr =[];
for(let i=0;i<n;i++){
    arr[i]=prompt(`Enter the marks of ${i+1}th student :`);
}
let newArr =arr.filter((val)=>{
    return (val>90);

});

console.log(newArr);*/

/*let n=prompt("Enter the size of array : ");
let arr =[];
for(let i=1;i<=n;i++){
    arr[i]=i;
}
console.log(arr);
let sum = arr.reduce((prev,current)=>{
    return prev+current;
});
console.log(sum);

let mult=arr.reduce((prev,current)=>{
    return prev*current;
});*/


/*let newBtn = document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";

document.querySelector("body").prepend(newBtn);*/


/*let par = document.querySelector("p");*/


/*let div = document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log("You are inside the safezone\n now inform us by clicking the button ");
};

let button = document.querySelector("button");
button.ondblclick=()=>{
    console.log("where are you ?! \nWait for us ");
}*/


/*let button = document.querySelector("button");

button.addEventListener("click",()=>{
    console.log( "bol kuthey") ;
});*/ 

/*let button = document.querySelector("button");
let body = document.querySelector("body");
let currentMode="light";
button.addEventListener("click",(evt)=>{
    if(currentMode==="light"){
        currentMode="dark";
        console.log(currentMode);
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        currentMode="light";
        body.classList.remove("dark");
        body.classList.add("light");
        console.log(currentMode);
    }
});*/

const employee ={
    calcTax(){
        console.log("Salary tax 10 %");
    }   
}

const juhi ={
    salary : 5000,
}

juhi.__proto__=employee;

