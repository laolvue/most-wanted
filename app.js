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

function filterByTraits(people, traits){
	var pop= people.filter(function(el){
		return (el.age == traits.age||el.height == traits.height||el.weight == traits.weight||el.occupation == traits.occupation||el.eyeColor == traits.eyeColor);
	});
	return(pop);
}

function calculateAge(people){
	var peep=people;
	for(var i=0;i<people.length;i++){
		peep[i].age=(people[i].dob.split("/"));
		peep[i].age=(2017- peep[i].age[2]);
	}
	return (peep);
}
	

	/*
	var array=[];
	for(var i=0;i<people.length; i++){
		people.filter(function(el){
				if (el === traits.age){
					console.log("hi");
					array.push(people[i]);
					
				}
			}
			
			
		});*/


function getFamily(person, people){
/*	for(var i=0; i<people.length; i++){
		if(lastName===people[i].lastName){
			
			
		}
	}
	*/
	// return an array containing the family members (objects)
}

function getDescendants(person, people,pop=[],x=0){
	if(x==people.length){
		return(pop);
	}
	
	else if(x<people.length){
		for(i=0;i<people[x].parents.length;i++){
			if (person.id===people[x].parents[i]){
				pop = pop +"\n"+people[x].firstName+" "+people[x].lastName+"\n";
			}
		}
		x++;
		return getDescendants(person, people, pop,x);
	}
}
