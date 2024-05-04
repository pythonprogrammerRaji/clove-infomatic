function SubmitHandler(username, email, mobile, message, subject){
   
    // e.preventDefault();
    console.log(username)
    let userdata = {
        Name:username,
        Email:email,
        Mobile:mobile,
        Subject:subject,
        Message:message
    }

    fetch('https://stormy-flannel-nightgown-ox.cyclic.app/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(response => response.json())
    .then(data => {
        // Call function to display received data
        // displayData(data);
        alert('done')
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error)
    });
    // console.log(userdata) 
}

function ContactFormSubmit(){
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let mobile = document.getElementById('mobile').value;
    SubmitHandler(username, email, mobile, message, subject);

}

function EnquiryFormSubmit(){
    let username = document.getElementById('E_name').value;
    let email = document.getElementById('E_email').value;
    let subject = document.getElementById('E_subject').value;
    let message = document.getElementById('E_message').value;
    let mobile = document.getElementById('E_mobile').value;
    SubmitHandler(username, email, mobile, message, subject);

}