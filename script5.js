let text = document.getElementById("buttonText");
    function clickLeft(){

            text.innerHTML = "Im right (left button)"

    }

    function clickRight(){

        text.innerHTML = "no Im right (right button)"
    }

 // Hovering over Button
function onHover() 
{
    let change = doc.createElement('section');
	// what section will say when you hover over it
	change.innerHTML = alert("Hey, I told you not to hover over me!");
}

window.onload = function() 
{
	// these are the actions that will trigger the buttons or phrase
	// ex: clicking on the left button will trigger it to say "I'm the right button"
    doc.querySelector('#leftButton').addEventListener('click', leftButton);
    doc.querySelector('#rightButton').addEventListener('click', rightButton);
    doc.querySelector('#hover').addEventListener('mouseover', onHover);
};


// Submit Button and Entering user, email, and pass
function submitButton(event) 
{
	event.preventDefault();

	// putting in the values and storing
	let underSubmitButton = doc.getElementById('');
	let user = doc.getElementById('input1').value;
	let pass = doc.getElementById('input2').value;
	let addingAh1 = doc.createElement('h1');
	underSubmitButton.appendChild(addingAH1);

	// checking for valid email, user, and pass
	for (var i = 0; i <= user.length; i++) 
	{
		// if the password matches 12345678
		if (parseFloat(user.length) && parseInt(pass) === 12345678)
	{

		addingAh1.innerHTML = 'Your information is correct!';
	} 
	// if you don't enter a username
	else if(user.length == "")
	{
          addingAh1.innerHTML = 'Enter your username: ';

    	}
	else 
	{
		addingAh1.innerHTML = 'Incorrect email and/or password';
   	}
        
	}
}