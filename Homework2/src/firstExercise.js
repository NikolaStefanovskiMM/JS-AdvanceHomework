function Product (name, category, discount, price){
    this.name = name;
    this.category = category;
    this.discount = discount;
    this.price = price;
}

let products = [new Product("Pizza", "Food", true, 15), new Product("Pasta", "Food", false, 10), new Product("Sushi", "Food", true, 23), new Product("Fish", "Food", false, 25), new Product("Chips", "Food", false, 10),
new Product("Juice", "Drinks", false, 5), new Product("Whiskey", "Drinks", true, 25), new Product("Vodka", "Drinks", true, 10), new Product("Beer", "Drinks", false, 5), new Product("Cocktail", "Drinks", true, 21),
new Product("Espresso", "Coffe", false, 5), new Product("Ice-Coffe", "Coffe", true, 10), new Product("Cream-Coffe", "Coffe", true, 12), new Product("Irish", "Coffe", false, 21), new Product("Hot-Chocolate", "Coffe", false, 23)];

console.log(`Product array:`)
console.log(products);

function checkPrice(products){
    return products.price > 20;
}
let callA = products.filter(checkPrice);
console.log(`Call: A - Product with price more than 20`)
console.log(callA);

function productsOnDiscount(products){
    return products.discount == true
}
let discountProduct = products.filter(productsOnDiscount);
//console.log(discountProduct);

function foodCategory(products){
    return products.category == "Food"
}

function productsName(products){
    console.log(products.name);
}

console.log(`Call: B - Name of product from food category on discount`);
let callB = products.filter(productsOnDiscount).filter(foodCategory).forEach(productsName);
 
let callC = [];
for(let product of products){
    if(product.discount == true){
        callC.push(`${product.price}`)
    }
}

function findAverage(arr){
    let sum = 0
    for(i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i])
        sum += arr[i]
    }return sum / arr.length
    
}

let test = findAverage(callC);
console.log(`Call: C - The average price on every product on discount is: ${test}`);

function productInfo(product){
    return `Product name: ${product.name} and has price of: ${product.price}$`
}

let noDiscountProduct = [];
for(let product of products){
    if(product.discount == false){
        noDiscountProduct.push(`${product.name} ${product.price} ${product.discount}`);
    }
}

console.log(`Call: D - Product who start with vowels and is not on discount:`)
console.log(noDiscountProduct.filter(str => /^[aeiou]/i.test(str)));
console.log(`=====Last call==========`)

function copyArr(arr){
    let copyProduct = [];
    arr.forEach(item => copyProduct.push(item));
    return copyProduct
}

console.log(`Call: E - Sort the copyArray - ascending`)
let productSecond = copyArr(products);
//productSecond.forEach(p => console.log(`${p.price}`));
productSecond.sort((p1, p2) => p1.price - p2.price);
//productSecond.forEach(p => console.log(p));
console.log(productSecond)
