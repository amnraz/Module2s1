 

let arr = [
    { product: "shirt", price: 350, category: "clothing" },
    { product: "mobile", price: 9999, category: "electronics" },
    { product: "toy train", price: 1500, category: "toys" },
    { product: "smart watch", price: 2500, category: "electronics" },
    { product: "car", price: 500, category: "toys" },
    { product: "cap", price: 150, category: "clothing" },
    { product: "taddy", price: 350, category: "toys" }
  ];
  
  let categoryCount = arr.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  
  console.log('Category Count:', categoryCount);
  
  let sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1]) 
    .map(entry => entry[0]);
  
  
  