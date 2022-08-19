let num=6

if(num<0){
    console.log("Error! Factorial for negative number does not exist.");
}else if(num===0){
    console.log("The factorial of 0 is 1");
}else{
    let fact=1
    for(let i=1;i<=num;i++){
        fact*=i;
    }
console.log("Factorial of "+num+" is "+fact);
}