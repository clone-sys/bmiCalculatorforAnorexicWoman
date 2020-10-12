const readlineSync = require("readline-sync");

// Get the weight from user
const weight = readlineSync.questionInt(
  "What's your weight in Kg? (example: 80) "
);

// Get the height from user
const height = readlineSync.questionFloat(
  "What's your height in Meters? (example: 1.80) "
);

// Get the sex from user
const sex = readlineSync.question(
    "What sex are you? (example: f)"
  );

// Get the sex from user
const age= readlineSync.questionInt(
  "What's your age? (example: 19) "
);  

let user_input=[];
user_input.push(sex);
user_input.push(age);


var bmi = Math.round((weight/height ** 2))
let female_18 = ["f",18]
let female_19 = ["f",19]

let range_female_18 = JSON.stringify(female_18) === JSON.stringify(user_input);
let range_female_19 = JSON.stringify(female_19) === JSON.stringify(user_input);

if (range_female_18 === true){
const femaleAdult_18 = ()=>{
    if(bmi > 1 && bmi < 17) {
      return "UDERFAT your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else if(bmi > 17 && bmi < 31) {
      return "HEALTHY Congratulations!!! your BMI is:" +" " + bmi + " " + "💋💋💋💋💋💋💋" 
    }
    else if(bmi > 18 && bmi < 36) {
      return "OVERFAT your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else if(bmi> 20 && bmi < 51) {
      return "OBESE your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else{ return  "error with input your BMI is out of range it has to be between 1 and 51"}
}
console.log(femaleAdult_18())
}
if (range_female_19 === true){
const femaleAdult_19 = ()=>{
    if(bmi > 1 && bmi < 19) {
      return "UDERFAT your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else if(bmi > 17 && bmi < 31) {
      return "HEALTHY Congratulations!!! your BMI is:" +" " + bmi + " " + "💋💋💋💋💋💋💋"
    }
    else if(bmi > 18 && bmi < 37) {
      return "OVERFAT your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else if(bmi> 20 && bmi < 51) {
      return "OBESE your BMI is:" + " " + bmi + " " + "please!! Consult a nutritionist."
    }
    else{ return  "error with input your BMI is out of range it has to be between 1 and 51"}
}
console.log(femaleAdult_19())
}

if (range_female_19 === false && range_female_18 === false){
   console.log( "The program is only for woman from 18-19 year old")
    }




