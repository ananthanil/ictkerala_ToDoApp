var uname = document.getElementById("user_name");
var upassword = document.getElementById("user_password");

function signup(callback){

    if(uname.value == "" || upassword.value ==""){

        alert("username and password cannot be empty");
        flag = false;
        
    }else{
       
        callback(flag)

    }

    return flag;
}
function approval(flag){
    var flag;
    if(uname.value == "admin" && upassword.value == 12345){

        flag = true;

    }
    else{
        alert("username or password is incorrect");
        flag = false;
    }

    return flag;
}

function logout(){
    window.location.href = "../index.html";
}