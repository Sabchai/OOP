/* checkpoint steps: 1st task: product's class*/
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }


  /* checkpoint steps: 2nd task: ShoppingCartItem's class*/

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
    
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  /* checkpoint steps: 3rd task: ShoppingCart 's class*/
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
   /* reduce the array to a single value to  be able to calculate  the totalPrice */
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    /* add the items, check that's already exist, update the quantity and if is not found push it to add it*/
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity; 
      } else {
        this.items.push(new ShoppingCartItem(product, quantity)); 
      }
    }
  
    /*remove is used to remove an item, this.item:used to represents the list that already exist, the filter: used
    to create a new array and but the elements that matched with the condition, foreach is to execute the elements of
    the array one by one*/
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
    displayItems() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed()}`);
      });
    }
  }
  

  /* elaborate a constance of some products*/
const apple = new Product(1, 'Apple', 1.50);
const banana = new Product(2, 'Banana', 0.75);
const orange = new Product(3, 'Orange', 1.00);

/* Create a shopping cart and add the product with the quantity */
const cart = new ShoppingCart();
cart.addItem(apple, 3);  
cart.addItem(banana, 5);  
cart.addItem(orange, 2);  

/* execute the result of the code*/ 

console.log('Cart Items:');
cart.displayItems();

console.log(`Total Cost: $${cart.getTotal().toFixed()}`);

cart.removeItem(2);

console.log('Cart Items After Removal:');
cart.displayItems();

console.log(`Total Cost After Removal: $${cart.getTotal().toFixed()}`);
  

/* output: 
Cart Items:
Product: Apple, Quantity: 3, Total Price: $5
Product: Banana, Quantity: 5, Total Price: $4
Product: Orange, Quantity: 2, Total Price: $2
Total Cost: $10
Cart Items After Removal:
Product: Apple, Quantity: 3, Total Price: $5
Product: Orange, Quantity: 2, Total Price: $2
Total Cost After Removal: $7
*/