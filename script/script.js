var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");

function signin(callback){
    alert("in function");
    if(loginemail.value == "admin" && loginpwd.value == 12345){
        alert("in if");
        callback();
        }else{
        alert("in else");
        error_message.innerText = "username or password is incorrect"
        return false;
    }
}

function redirect(){
    window.location.href = "../login_welcome_page.html";
}
