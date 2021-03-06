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
	for(var i = 0; i < 10; i++)
	{
		select.options[i] = new Option("" + (i + 1));
	}

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
		rightDivText = document.createTextNode((animalsList[index]).describe());
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

// Animals, info from https://en.wikipedia.org/wiki/List_of_domesticated_animals
var dog = new Animal("Dog", "The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.");
var cat = new Animal("Cat", "The cat, often referred to as the domestic cat, is a small, typically furry, carnivorous mammal.");
var goat = new Animal("Goat", "The goat is a member of the animal family Bovidae and the goat-antelope subfamily Caprinae, meaning it is closely related to the sheep.");
var sheep = new Animal("Sheep", "Domestic sheep are quadrupedal, ruminant mammals typically kept as livestock. Like most ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates.");
var chicken = new Animal("Chicken", "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.");
var donkey = new Animal("Donkey", "The donkey is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.");
var duck = new Animal("Duck", "Duck is the common name for a large number of species in the waterfowl family Anatidae which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae.");
var bee = new Animal("Honey Bee", "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey and beeswax.");
var horse = new Animal("Horse", "The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.");
var goldfish = new Animal("Goldfish", "The goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is one of the most commonly kept aquarium fish. A relatively small member of the carp family, the goldfish is native to East Asia.");


// List of Animals
var animalsList = [dog, cat, goat, sheep, chicken, donkey, duck, bee, horse, goldfish];