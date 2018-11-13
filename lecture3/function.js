function undef(val){
    if (val===undefined){
        return console.log("undefined");
    }
    else return console.log("no undefined");
    
}
function nul(val){
    if (val===null){
        return console.log("null");  
    }
    else return console.log("no null");
    
}
function nan(val){
    if (val===NaN){
        return console.log("NaN");
    }
}
obj = new Object();
newObj=new Object();
function pustota(obj){
    if (Object.keys(obj).length===0){
        return console.log("пусто");
    }
    else return console.log("не пусто");
}
function alyaMap(obj){
    for (var i in obj){
        obj[i]=obj[i]*2;
    }
    return obj;
}
function rand(min, max){
    return (Math.random()*(max-min)+min).toFoxed();
}
function sravnenie(valA, valB){
    if(valA===valB){
        return true;
    }
    if (valA==null || typeof(valA) !="object" ||
        valB==null || typeof(valB) !="object"){
        return false;
    }
    var propA=0, propB=0;
    for (var property in a){
        propA+=1;
    }
    for (var property in b){
        propB+=1;
        if (!property in a || !deepEqual(a[property], b[property])){
            return false;
        }
    }
    return propA==propB;

}
function delet(obj){
    for (var i in obj){
        if (!checkNull(obj[i]))delet obj[i];
    }
    return obj;
}