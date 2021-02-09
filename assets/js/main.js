
function changeTo(name) {
    const submit = document.getElementById('form-submit');
    submit.innerText = name;

    const regex = /^((\w+)|(\W+))@\w+.com/g;
    const email = document.getElementsByName('email')[0];
    const hidden = document.getElementById('hidden');
    const option = document.getElementById('intern-type').selectedOptions[0].text;

    console.log(option);
    
    const forward = regex.test(email.value);
    
    if(forward == false) {
        let httpRequest = setInterval(function() {
            email.style.border = "2px solid #d02035";
            hidden.style.display = "flex";
            submit.innerText = "submit";
        }, 2000);
        return;
    }

    else if(option == "Your Interest") {
        let httpRequest = setInterval(function() {
            document.getElementById('intern-type').style.border = "2px solid #d02035";
            submit.innerText = "submit";
        }, 2000);

        return;  
    }

    else if(forward == true && option !== "Your Interest") {
        let httpRequest = setInterval(function() {
            console.log(email.value);
            console.log(option);
            document.getElementById('hide').style.display = "none";
            document.getElementById('thankyou').style.display = "block";
            document.getElementById('signup-form-id').style.display = "none";
        }, 2000);

        return;     
    }
}