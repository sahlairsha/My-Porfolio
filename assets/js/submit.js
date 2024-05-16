let loginForm = document.getElementById("myForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("w3lName");
  let email = document.getElementById("w3lSender");

  if (username.value == "" || email.value == "") {

    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${email.value}`
    );

    username.value = "";
    email.value = "";
  }
});