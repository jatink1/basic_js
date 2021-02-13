document.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");

  console.log("Name : ", name.value);
  console.log("Email: ", email.value);

  //do something with this data
});
