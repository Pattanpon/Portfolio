	document.getElementById("myButton").onClick = function(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var result = document.getElementById("result").value;
	
	if (username === "Non" && password === "Nont34090"){
		result.innerHTML	= "<p>Login successful </p>"
	
	}else{
		result.innerHTML = "<p>Login failed</p>"
	
	}
	
	
	}