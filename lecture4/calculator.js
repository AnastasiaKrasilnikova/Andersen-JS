function polnayaStroka(val){
    document.getElementById("d").value=val;
}

function valu(val){
    document.getElementById("d").value+=val;
}

function ravno() { 
    try { 
        var str=document.getElementById("d").value;
        str+="=" + eval(str);
        document.getElementById("l").value+=str +"\n";
        str="";
        polnayaStroka(eval(document.getElementById("d").value)) ;
    } 
    catch(e) {
        polnayaStroka('Error') ;
    } 
}

