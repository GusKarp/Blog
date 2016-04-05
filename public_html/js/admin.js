/* global Backendless, Posts, Handlebars, moment */

$(function () {
    var APPLICATION_ID = "291AF3D8-BFD8-D246-FFEC-B57EC2F81200",
        SECRET_KEY = "58A3D718-B1CD-308E-FF5E-2C57691F4300",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.context || "";
    this.authorEmail = args.authorEmail || "";
}

