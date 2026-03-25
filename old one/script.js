function Login(){

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "posadas" && password === "123"){
         window.location.href = "home/home.html";
    } else if(username === "" && password === "") {
        document.getElementById('show-text').innerHTML="Invalid cridentials! Please try again.";
        
    }
}