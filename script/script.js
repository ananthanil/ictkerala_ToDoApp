function signin(callback){
    let loginemail = document.getElementById("loginemail");
    let loginpwd = document.getElementById("loginpwd");
    if(loginemail.value.trim()=="admin" && loginpwd.value.trim()=="12345"){
        callback();
        }else{
        alert("username or password is incorrect");
        return false;
    }
}

function redirect(){
   window.location.href="login_welcome_page.html"
}

function signout(){
    window.location.href="../index.html"
 }

function displaylist(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange=function(){
        try{
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    display(httpRequest.responseText)
                }
                else{
                    alert("error from API");
                }
            }
        }
        catch(e){
            alert(e.description);
        }
    };
    try{
        httpRequest.open('Get','https://jsonplaceholder.typicode.com/todos',true);
        httpRequest.send();
    }
    catch(e){
        alert(e.description);
    }
}
 