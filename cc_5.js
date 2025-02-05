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