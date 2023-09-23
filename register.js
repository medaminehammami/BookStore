function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (email.indexOf("@gmail.com") === -1) {
        alert("Invalid email address. Please enter a valid Gmail address.");}
    else {    

    if (password1 != password ) {
      alert("wrong password ");
    } else {
        if (username == "" || email == "" || password == ""){
            alert("please correct all fields");
        }
      else {
        alert("Signup successful");
      }
    }
}}

  function login() {
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password2").value;
  
    if (username == "admin" && password == "password") {
      alert("Login successful");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
function verification(){
    alert ("add succesful ");
}