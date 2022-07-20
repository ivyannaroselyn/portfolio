
function myFunction(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    emailjs.send("service_e5ur7id","template_pe0oip5",{
        from_name: "andrew",
        to_name: "andrew.adisaputra1@gmail.com",
        message: "test",
        reply_to: "bob",
        });
}