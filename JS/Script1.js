// Registration for Newsletter on-click event

function newsletter(){
    var mail = document.getElementById("mail").value;

    if(!mail)
        alert("Please Enter a mail address");
    else
        alert("Thanks for Subscribing to us!");
}

// Validating the contact form

function contactUs(){
    var query = document.getElementById("query");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var cname = document.getElementById("cname");
    var job = document.getElementById("jtitle");
    var phone = document.getElementById("phone");

    if(!query.value){
        alert("Please fill in the particulars");
        query.focus();
        return false;
    }
    if(!fname.value){
        alert("Please fill in the particulars");
        fname.focus();
        return false;
    }
    else if(!lname.value){
        alert("Please fill in the particulars");
        lname.focus();
        return false;
    }
    else if(!email.value){
        alert("Please fill in the particulars");
        email.focus();
        return false;
    }
    else if(!cname.value){
        alert("Please fill in the particulars");
        cname.focus();
        return false;
    }
    else if(!job.value){
        alert("Please fill in the particulars");
        job.focus();
        return false;
    }
    else if(!phone.value){
        alert("Please fill in the particulars");
        phone.focus();
        return false;
    } 
    alert("We will contact you shortly");
    return false;
}

// Validating the Subscription form

function membership(num){
    alert(num.value);
}
