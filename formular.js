 function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,  
        message: document.getElementById("message").value
    };
  emailjs.send('service_2ahfmzv', 'template_2wyhhjr', parms).tehn(alert("Email sent successfully!"));
 }