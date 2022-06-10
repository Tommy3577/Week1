// Activity 5
// Create a varible called num. If num is divisible by 3 log fizz. Divisible by 5 log buzz. By both log fizz buzz
// If none, print num
console.log ()
console.log ("Challenge 1 - fizz buzz 3/5 divisions")
let num = 17
if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizz buzz")
} else if (num % 3 == 0) {
  console.log("fizz") 
} else if (num % 5 == 0) {
  console.log('buzz')
} else {
    console.log("num")
}
console.log ()
// Activity 3
// Generate a random number between 1 and 30 six times
// For each random number generated, check if this number is divisible by 7 or not
// Log out a message to the console if it is divisible by 7 or not
console.log ("Challenge 2 - random numbers divide by 7")
let num1 = []
let num2 = 0
for(let z = 0; z < 12; z++){
    if (z % 2 == 0){
        num2 = Math.floor(Math.random() *30)
        if (num2 % 7 == 0) {
            console.log(`${num2} - The number is divisible by 7.`)
        } else {
            console.log(`${num2} - The number is not divisible by 7.`)
        }
        num1.push(z)
    }
}
console.log ()
// Activity 2
// Generate 6 random numbers between 1 - 50 and log them in the console
console.log ("Challenge 3 - 6 random numbers between 1 - 50")
let num3 = []
for(let x = 0; x < 12; x++){
    if (x % 2 == 0){
        console.log(Math.floor(Math.random() * 50))
    }
}
console.log ()
// Activity 3
// If we  can create a loop to put 0 - 9 on the screen, how can we count 9 - 0? Create a program that does this
console.log ("Challenge 4 - count down 9 to 0")
let num4 = 9
for(let y = 0; y < 20; y++){
    if (y % 2 == 0){
        console.log(num4)
        num4--
    }
}
console.log ()
// Activity 3
// Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. 
// Otherwise log the password to the console 
console.log ("Challenge 5 - Create a password, check length")
const password = "password"
if (password.length <= 7 ){
    console.log("Password is too short. Enter 8 characters or more")
}
else if (password.length >= 8){ 
    console.log(`The password is ${password}`)
}
console.log ()
// Activity 4
// Create a variable called num. Check if the variable is divisible by 3 or 5. If it is, log "This number is divisible by 3 or 5". Otherwise log something else.
console.log ("Challenge 6 - Divisible by 3 or 5?")
let num5 = 15
if (num5 % 3 == 0 || num5 % 5 == 0){
    console.log(`${num5} - This number is divisible by 3 or 5.`)
} else{
    console.log(`${num5} - This number is not divisible by 3 or 5.`)    
}
console.log ()
// Activity 2
// Create an object called pet with key values of name, type of pet, age and colour. And methods called eat and drink.
// They should return a string saying yourpetname is eating/drinking
console.log ("Challenge 7 - Pet challange")
const pet = {
    name: "Chew Barka",
    typeOfPet: "Dog",
    age: 2,
    colour: "black",
    EatDrink() {
        console.log(`Hello my name is ${this.name} and I eat food and drink liquids`)
    }
}
pet.EatDrink()
console.log ()