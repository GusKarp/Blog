/* global Backendless, Posts, Handlebars, moment, userLoggedIn, gotError */

$(function () {
    var APPLICATION_ID = "291AF3D8-BFD8-D246-FFEC-B57EC2F81200",
        SECRET_KEY = "58A3D718-B1CD-308E-FF5E-2C57691F4300",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
    $(document).on('submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
            
        Backendless.UserService.login(email,password, true, new Backendless.Async(userLoggedIn, gotError));
    });
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.context || "";
    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn(user) {
    console.log("user succesfully logged in");
    
    var welcomeScript = $('#welcome-template').html();
    var welcomeTemplate = Handlebars.compile(welcomeScript);
    var welcomeHTML = welcomeTemplate(user);
    
    $('.main-container').html(welcomeHTML);
}

function gotError(error) {
    console.log("Error message - " + error.message);
    console.log("Error coode - " + error.code);
}

