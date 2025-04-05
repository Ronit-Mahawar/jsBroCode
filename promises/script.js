function task1(){
  
   return new Promise((resolves,reject)=>{
    setTimeout(()=>{resolves("task1 completed");},3000)
   })
}
function task2(){
    const tak=true;
     return new Promise((resolves,reject)=>{
        setTimeout(()=>{

            if(tak){
                resolves("task2 completed");
            }
            else{
                reject("task2 not completed")
            }
        },3000)
            
       
     })
}
function task3(){
    return new Promise((resolves,reject)=>{
        setTimeout(()=>{resolves("task3 completed");},3000)
       })
    
}
function task4(){
    return new Promise((resolves,reject)=>{
        setTimeout(()=>{resolves("task4 completed");},3000)
       })
    
}
task1().then((value)=>{
    console.log(value);return task2()})
    .then((value)=>{
        console.log(value);
        return task3()})
    .then(val=>{
        console.log(val)
    })
    .catch(val=>{
        console.log(val)
    })




