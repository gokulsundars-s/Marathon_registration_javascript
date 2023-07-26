function validate()                                   
{
    var n1 = document.forms["signupform"]["inp1"]; 
	var n2 = document.forms["signupform"]["inp2"]; 
	var n3 = document.forms["signupform"]["inp3"]; 
	var n4 = document.forms["signupform"]["inp4"];
    var n5 = document.forms["signupform"]["inp5"];
    var regex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/); 
    var pno = (/^\d{10}$/);

    if(n1.value=="" && n2.value=="" && n3.value=="" && n4.value=="" && n5.value==""){
        window.alert("Some fields are empty");
    }
    
    else if(n4.value != n5.value){
        window.alert("Passwords doesn't match");
    }
        
    else if(!n4.value.match(regex)){
        window.alert("Please enter a strong password");
    }

    else if(!n3.value.match(pno)){
        window.alert("Enter a valid phone number");
    }

    else{
        window.open("register.html");
    }
}