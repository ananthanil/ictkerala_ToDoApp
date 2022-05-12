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

    // return flag;
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
            var output = "";
            // var title ="";
            var value ="";
            for(var i=1;i<response.length;i++){
                // ide.innerText = response[i].id;
                output = response[i].title;
                // // value = response[i].completed;
                // title.innerText =  response[i].title;
                // title.innerText =  response[i].title;
                // id = response[i].id;
                // document.write('<ul class="list-group">');
                // document.write('<li class="list-group-item d-flex align-items-center" id="response">'+response[i].title);
                
                // // document.write(output);
                // document.write('<input type="radio" name="scores" id="i" value="i">'+ response[i].completed);
                // // response.innerHTML = output;
                // document.write("</li>");
                // document.write('</ul>');
                // document.write('<input type="radio" name="scores" id="i" value="i">'+ i);
                // "<br>";
            }
            // id.innerText = id;
            // title.innerText = title;
            document.getElementById("demo").innerHTML = output;
        }
    }
    // xhttp.open("GET","./ajax/ajax.txt",true);
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }