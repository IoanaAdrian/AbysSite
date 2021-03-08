
function ShowLogin(){
    var x=document.getElementById("main");
    if(x.style.display=='none'){
        x.style.display='block';
    }else{
        x.style.display='none';
    }
}

function ShowInfo(){
    var y=document.getElementById("main2")
    if(y.style.display=='none'){
        y.style.display='block';
    }else{
        y.style.display='none';
    }
}

function Login(){
    window.location.href = "/test.html";
}