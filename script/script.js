var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");
function signin(){
    if(loginemail=="admin" || loginpwd==12345){
        return true;
    }else{
        error_message.innerText = "username or password is incorrect"
        return false;
    }
}

function logout(){
    window.location.href = "../index.html";
}
