var shopper = {
    name: "Arnold",
    age: 27,
    isWealthy: true,
    groceryCart: [],
    addToCart: function (item){
        this.groceryCart.push(item);
    }
}

shopper.addToCart("spinach");
shopper.addToCart("strawberries");
shopper.addToCart("pineapples");
shopper.addToCart("peanuts");
shopper.addToCart("lettuce");

console.log(shopper.groceryCart);