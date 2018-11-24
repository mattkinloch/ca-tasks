function createDiv()
{
	// Create Left Div
	var leftDiv = document.createElement('div');
	leftDiv.id = 'theLeftDiv';

	//Create Right Div
	var rightDiv = document.createElement('div');
	rightDiv.id = 'theRightDiv';

	//Create Left Div text
	var leftDivText = document.createTextNode("Select a Number ");
	leftDivText.className = "lDivText";
	leftDiv.appendChild(leftDivText);

	var rightDivText;

	// Create Select Box
	var select = document.createElement('select')

	// Iteratively fill Select Box
	for(var i = 0; i < 15; i++)
	{
		select.options[i] = new Option("" + (i + 1));
	}

	readDatabase();

	// Create Event Listener
	select.addEventListener("change", function(){

		// If Right Div has any children, remove them
		if(rightDiv.hasChildNodes())
		{
			while(rightDiv.firstChild)
			{
				rightDiv.removeChild(rightDiv.firstChild);
			}
		}
		
		// Get the text of the option chosen, convert to int, and get the animal at that index
		var index = parseInt(select.options[select.selectedIndex].textContent) - 1;

		// Append the information about the chosen animal to the right div
		rightDivText = document.createTextNode(animalList[index].describe());
		rightDiv.appendChild(rightDivText);

	});
		
	// Append Select Box to Left Div
	leftDiv.appendChild(select);

	// Append Left Div and Right Div to body
	document.body.appendChild(leftDiv);
	document.body.appendChild(rightDiv);
}

// Animal Object
function Animal(theName, theDescription)
{
	this.name = theName;
	this.description = theDescription;

	this.describe = function(){
		return "Name: " + this.name + "\n" + "Description: " + this.description;
	}
}

var animalList = [];

function readDatabase()
{
	var index = 0;
	fetch('db.json')
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		for(var i=0; i<data.length; i++)
		{
			newA = new Animal(data[i].name, data[i].description);
			animalList[i] = newA;
		}
	})
}
