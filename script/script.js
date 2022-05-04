var uname = document.getElementById("user_name");
var upassword = document.getElementById("user_password");

function signup(){
    if(uname.value == "" || upassword.value ==""){
        alert("in if");
        // me_user.innerText="required";
        // me_user.style.color="red";
        me_password.innerText="required";
        me_password.style.color="red";
        var flag =  false;
    }else{
        alert("else");
        var flag = true;
    }
    return flag;
}