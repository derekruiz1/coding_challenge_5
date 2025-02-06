//Task 1 - Object Properties 
let customer = {
    name: "John Doe",
    age: 35,
    email: "Johndoe@email.com"
}; //Object Information

console.log(`Name: ${customer.name}`); //Displaying Name
console.log(`Age: ${customer.age}`); //Displaying Age
console.log(`Email: ${customer.email}`); //Displaying Email

//Task 2 - Object Methods
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function displayOrder() {
        console.log(`Order ID: ${this.orderId}`)
        console.log(`Total Amount: ${this.totalAmount}`)
        console.log(`Order Status: ${this.status}`)
    }
    
}; //Object Information, Displays Order ID, Total Amount, Order Status

order.displayOrder();

//Task 3 - Array Manipulation
let cartItems = ["Pillow", "Blanket", "Charger"] //Original Array

cartItems.push("Straws"); //Adds Straws to the array
cartItems.pop(); //Removes last item from array

cartItems.unshift("Candle"); //Adds Candle to array
cartItems.shift()//Removes first item from array

console.log(cartItems);

//Task 4 - Map Method
let prices = [100,200,300] //Original Array 
let discounted = prices.map (prices => prices *= 0.9) //Gives 10% Discount to each item

console.log("Discounted Prices:", discounted);

//Task 5 - Filter Method
let inventory = [8, 0, 6, 1, 12]
let Filter = inventory.filter(inventory => inventory > 0)

console.log("Filtered Array:", Filter);

//Task 6 - Reduce Method
let sales = [500,300,200,400] //Original Array
let total = sales.reduce((sum, sales) => sum + sales, 0); //Adding all the numbers in the array
console.log("Total Sales:",total);

//Task 7 - find() Method
let customers = ["Alice", "Bob", "Charlie", "David"] //Original Array
let user = customers.find(customers => customers === "Charlie"); //Finds Charlie in the Array
console.log("Customer:", user);

//Task 8 - Function Declaration 
function calculateTax(amount,taxRate) {
  return (amount * taxRate);
}; //Function to calculate tax by multiplying the amount and the tax rate
console.log("Tax:",calculateTax(100,0.07));

//Task 9 - Function Expression
function applyDiscount(price,discount) {
    price *= (1 - discount)
    console.log("Discounted Price:",price);
}; //Multiples price by discount and showing discounted price
applyDiscount(100,0.07);

//Task 10 - Arrow Function
const calculatePoints = purchaseAmount => `Points Earned: ${purchaseAmount / 10}` //Calculating points, for every $10 = 1 point
console.log(calculatePoints(100));