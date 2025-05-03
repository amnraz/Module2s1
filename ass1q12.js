function createCounter(){
    let bag = 0;
         return{
           increment:function (){
            bag ++
               return bag
           } ,
             getCount:function (){
              return bag
           }
       }
 };
 let counter = createCounter(); 
 
 console.log(counter.increment()); 
 console.log(counter.increment()); 
 console.log(counter.getCount()); 