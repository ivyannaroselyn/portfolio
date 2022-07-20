<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
    </script>
    <script type="text/javascript">
        (function () {
            emailjs.init("gDlx5htbcCm65sVQa");
        })();
    </script>
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