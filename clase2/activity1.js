const objects = [
    {
        apples:3,
        pears:3,
        meat:1,
        juices:5,
        candies:2
    },
    {
        apples:1,
        watermelons:1,
        eggs:6,
        juices:1,
        breads:4
    }
];


const allProducts = [];

objects.forEach((order)=>{
    console.log(order);
    Object.keys(order).forEach((product)=>{
        if(!allProducts.includes(product)){
            allProducts.push(product);
        }
    })
});

console.log(allProducts);
