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