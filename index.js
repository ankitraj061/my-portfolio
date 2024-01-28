function sendMail() {
    var params = {
        name: document.getElementById("floatingInput").value,
        email:document.getElementById("floatingEmail").value,
        number:document.getElementById("floatingPassword").value,
        message:document.getElementById("floatingMessage").value,
        

    };
    const serviceID ="service_tvqi3eq";
const templateID ="template_bfk4j1l";

emailjs.send(serviceID,templateID,params)
.then((res)  =>{
        document.getElementById("floatingInput").value ="";
        document.getElementById("floatingEmail").value ="";
        document.getElementById("floatingPassword").value ="";
        document.getElementById("floatingMessage").value ="";
        console.log(res);
        alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));

}

