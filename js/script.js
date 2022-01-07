// Buttons

// left button functions
function leftButton() 
{
	let clickleftButton = doc.getElementById('container');
	let leftButtonText = doc.createElement('section');

	// what button will say when you click on it
	leftButtonText.innerText = "I'm the right button";
	clickleftButton.appendChild(leftButtonText);
}

// right button functions
function rightButton() 
{
	let clickrightButton = doc.getElementById('container');
	let rightButtonText = doc.createElement('section');

	// what button will say when you click on it
	rightButtonText.innerHTML = "No, you're lying. I'm the real right button!";
	clickrightButton.appendChild(rightButtonText);
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
			if (parseFloat(user.length) && parseInt(pass) === 12345678)
		{

			addingAh1.innerHTML = 'Your information is correct!';
		} 
		
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
