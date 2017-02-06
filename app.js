/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function filterByName(firstName, lastName, people){
	var j=0;
	for( var i=0; i<people.length; i++){
		if(firstName===people[i].firstName && lastName===people[i].lastName){
				j++;
				break;
		}
	}
	
	if(j>0)
	{
		mainMenu(people[i],people);
	}
	else if (j===0)
	{
		mainMenu(0,people);
	}
	// return an aray containing the people matching the name
}


function getFamily(person, people){

	// return an array containing the family members (objects)
}

function getDescendants(person, people){

	// return an array containing the descendants (objects)
}
