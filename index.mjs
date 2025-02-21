import fs from 'fs';
const jsonData = fs.readFileSync('./data.json', 'utf-8'); 
const data = JSON.parse(jsonData); console.log(data);


//TASK #1 | LEVEL #1  | MAP
const productnames =  data.map(product => product.name);
console.log(productnames);




//TASK #2 | LEVEL #1 | MAP
const pricedeta =  data.map(product => ({
   name: product.name,
  price: product.price
}));
console.log(pricedeta)




//TASK #3 | LEVEL #1 | FILTER
const products = data.map(product => ({
   name: product.name,
  inStock: product.inStock
}));
console.log(products);



//TASK #4 | LEVEL #1 | FILTER
const productprice = data.filter(product => product.price > 100) .map(product => ({
    name: product.name,
    price: product.price
  }));
console.log(productprice);



//TASK #5 | LEVEL #1 | FILTER
const electronics = data.filter(product => product.category === "Electronics").map(product => ({
    name: product.name,
    category: product.category
  }));
 console.log(electronics);



//TASK #6 | LEVEL #1 | FILTER
const rating = data.filter(product =>  product.rating >=4.5).map(product => ({
    name: product.name,
  rating: product.rating
  }));
console.log( rating);


//TASK #6 | LEVEL #1 | REDUCE
const total = data.reduce((accumulator,  product) => accumulator  + product.price, 0);
console.log(total);



//TASK #7 | LEVEL #1 | REDUCE
const average = data.reduce((accumulator,  product) => accumulator + product.price, 0) / data.length;
console.log(average);




//TASK #9 | LEVEL #2 
const expensive = data.reduce(( max, product) => product.price > max.price ? product : max);
const cheap = data.reduce((min, product) => product.price < min.price ? product : min);
console.log([ { name: cheap.name, price: cheap.price } ]);
console.log([ { name: expensive.name, price: expensive.price } ]);

//TASK #10 | LEVEL #2 
const average = data.reduce(( acc, product) => acc + product.rating, 0) / data.length;
console.log(average);

//TASK #12 | LEVEL #2 
const quantities = data.map( product => product.reviews.length).reduce((acc, reviewsCount) => acc + reviewsCount, 0);
console.log(quantities);
