function processProduct(a){
     
    let arr2 = a.map((ele)=>{
        return ele.name
    })
    console.log(arr2)
          a.forEach((ele)=>{
           
            if(ele.price > "$50"){
                console.log(`${ele.name} is above $50 `)
            } else{
                console.log(`${ele.name} is below $50`)
            }
        });
     }
     
      let arr = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
      processProduct(arr)