$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $("#register-form").on("submit", function(event){
    event.preventDefault();
    var link = $(this).attr('action')
    var form = $(this).serialize();
    console.log(this)
     console.log(form)
    var firstName =$(this).find('input[name=first_name]').val()
    var lastName =$(this).find('input[name=last_name]').val()
    var email =$(this).find('input[name=email]').val()
    var username =$(this).find('input[name=username]').val()
    var password =$(this).find('input[name=password]').val()
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(username);
    // console.log(password);
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (email.length === ""){
      $("#errors").append("<p>Please enter your email</p>")
    }

    if(emailReg.test(email)){
      "it works"
    }else{
      $("#errors").append("<p>MUST BE A VALID EMAIL ADDRESS</p>")
    }

    if (password === ""){
      $("#errors").append("<p>Please provide a password</p>")
    }

    if (!/[A-Z]/.test(password)){
      $("#errors").append("<p>Password must contain capital letter!</p>")
    }

    if (password.length != 9){
      $("#errors").append("<p>Must be 9 characters long</p>")
    }

    if (!/\d/.test(password)){
      $("#errors").append("<p>Must contain a digit</p>")
    }

    if (username.length === ""){
      $("#errors").append("<p>Please provide a username</p>")
    }

    if (firstName.length === ""){
      $("#errors").append("<p>Please enter your First Name</p>")
    }

     if (lastName.length === ""){
      $("#errors").append("<p>Please enter your Last Name</p>")
    }

    $.ajax({
        url: link,
        method: "post",
        data: form
    }).done(function(data){

    })

  })
});
