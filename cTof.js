function cTof(c){
    f1=(9*c/5)+32;
    console.log(c+"°C is "+f1+"°F");
}
let f=90
let fToc=function(f){
    c1=5*(f-32)/9
    return c1;
}

cTof(40);
fToc(f);
console.log(f+"°F is "+c1+"°C");