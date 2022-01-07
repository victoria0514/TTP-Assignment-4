// Buttons

function leftButton() 
{
	let clickleftButton = doc.getElementById('container');
	let leftButtonText = doc.createElement('section');
	leftButtonText.innerText = "I'm right";
	clickleftButton.appendChild(leftButtonText);
}

function rightButton() 
{
	let clickrightButton = doc.getElementById('container');
	let rightButtonText = doc.createElement('section');
	rightButtonText.innerHTML = "No, I'm right!";
	clickrightButton.appendChild(rightButtonText);
}



// Hovering over Button
function onHover() 
{
    let change = doc.createElement('section');
	change.innerHTML = alert("Hey, I told you not to hover over me!");
}

window.onload = function() 
{
    doc.querySelector('#leftButton').addEventListener('click', leftButton);
    doc.querySelector('#rightButton').addEventListener('click', rightButton);
    doc.querySelector('#hover').addEventListener('mouseover', onHover);
};


  

// Submit Button and Entering user, email, and pass
function submitButton(event) 
{
	event.preventDefault();

	let underSubmitButton = doc.getElementById('');
	let user = doc.getElementById('input1').value;
	let pass = doc.getElementById('input2').value;
	let addingAh1 = doc.createElement('h1');
	underSubmitButton.appendChild(addingAH1);

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
