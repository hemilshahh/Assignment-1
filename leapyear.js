let year=1993;
if (year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log("Leap year");
        }else{
            console.log("Not a leap year");
        }
    }else{
        console.log("Leap year");
    }
}else{
    console.log("Not a leap year");
}