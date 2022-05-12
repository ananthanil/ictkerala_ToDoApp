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
    alert("ad ello");
}
