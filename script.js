var opac = 1;
var flag;
var range = 0;

function processar(){
    if(opac <= 0.7){
        flag = true;
    }
    if(opac >= 1){
        flag = false; 
    }

    if(flag){
        opac += 0.001;
        range += 0.05;
    }else{
        opac -= 0.001;
        range -= 0.05;
    }
    document.getElementById('scarecrow').style.opacity = opac; 
    document.getElementById('scarecrow').style.transform = "rotate("+range+"deg)"; 
}setInterval(processar,20);