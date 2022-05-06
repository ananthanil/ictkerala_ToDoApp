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

function ajax(){
    // creating sn XHR Object
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    xhttp.onreadystatechange =function(){
        //condition
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output =""
            for(var i=0;i<response.length;i++){
                // output += "<span>"+response[i].id+"</span>";
                output += "<li>"+response[i].title+"</li>";
            }
            document.getElementById("demo").innerHTML = output;
        }
    }
    // xhttp.open("GET","./ajax/ajax.txt",true);
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }