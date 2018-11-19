function createDiv()
{
	var div = document.createElement('div');
	div.className = 'main-div';
	div.id = 'mainDiv';
	div.setAttribute('title', 'Main Div');
	var divText = document.createTextNode("Select a Number ");
	div.appendChild(divText);

		var select = document.createElement('select')

			for(var i = 0; i < 10; i++)
			{
				select.options[i] = new Option("" + (i + 1));
			}

			/*
			select.options[0] = new Option("1");
			select.options[1] = new Option("2");
			select.options[2] = new Option("3");
			select.options[3] = new Option("4");
			select.options[4] = new Option("5");
			select.options[5] = new Option("6");
			select.options[6] = new Option("7");
			select.options[7] = new Option("8");
			select.options[8] = new Option("9");
			select.options[9] = new Option("10");
			*/

		select.addEventListener("change", function() {alert("changed to "+select.value)});
		
		div.appendChild(select);


	document.body.appendChild(div);
	console.log(div);
}

function Animal(name, description){
	this.name = name;
	this.description = description;

	this.describe = function(){
		return "Name: " + name + " Description: " + color;
	}
}

var dog = new Animal("Dog (Canis lupus familiaris)", "The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.");
var cat = new Animal("Cat (Felis catus)", "The cat, often referred to as the domestic cat, is a small, typically furry, carnivorous mammal.");
var goat = new Animal("Goat (Caora aegagrus aegagrus)", "The goat is a member of the animal family Bovidae and the goat—antelope subfamily Caprinae, meaning it is closely related to the sheep.");
var sheep = new Animal("Sheep (Ovis aries)", "Domestic sheep are quadrupedal, ruminant mammals typically kept as livestock. Like most ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates.");
var chicken = new Animal("Chicken (Gallus gallus domesticus)", "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.");
var donkey = new Animal("Donkey (Equus africanus asinus)", "The donkey or ass is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.");
var duck = new Animal("Duck (Anas platyrhynchos domesticus)", "Duck is the common name for a large number of species in the waterfowl family Anatidae which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae.");
var bee = new Animal("Honey Bee (Apis melifera)", "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey and beeswax.");
var horse = new Animal("Horse (Equus ferus caballus)", "The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.");
var goldfisn = new Animal("Goldfish (Carassius auratus)", "The goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes. It is one of the most commonly kept aquarium fish. A relatively small member of the carp family, the goldfish is native to East Asia.");
