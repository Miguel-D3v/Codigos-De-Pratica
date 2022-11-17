/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos,meses e dias
e mostre-a expressa apenas em dias.*/

const age=15;
const mounth=5;
const days=5;

   function ContDays(){
    let totalDays1=age*365;
    let totalMounth=mounth*30;
    let total=totalDays1+totalMounth+days;
    return total;
   }
  console.log(ContDays()) //saida 5630
  
  
  /* Faça um algoritmo que leia a idade de uma pessoa expressa em dias
  e mostre-a expressa em anos, meses e dias. */

let ageDays =5630;

 function myAge(){
    let age=0;
    let mounth=0;
     while(ageDays>365){
      ageDays--;
      ageDays-=365;
      age+=1;
   }
   let restDays=ageDays+age;
 
      while(restDays>30){
       restDays--;
       restDays-=30;
       mounth+=1;
   }
 let days=restDays+mounth;
     if(days>30){
        days-=30
       mounth+=1
   }
console.log(age+" anos "+mounth+" meses "+days+" dias")
   }
myAge() //saida 15 anos 5 meses 5 dias