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
	/*
	for(x=0; x<people.length; x++){
		for(i=0;i<people[x].parents.length;i++){
			if (person.id===people[x].parents[i]){
				
				console.log(people[x].firstName);
			}
		}
		
		
	}*/
	
	
	/*
	do{

		if (person.id === people[x].parents[0]){
			pop = pop +"\n"+people[x].firstName+" "+people[x].lastName+"\n";
			x++;
			console.log(pop);
			getDescendants(person,people,pop,x);
		}
		else
			x++;
			getDescendants(person,people,pop,x);
	}while(x<people.length);*/
}
	/*
		for(var i=0;i<people[x].parents.length;i++){
			if(person.id===people[x].parents[i]){
				pop = pop +"\n"+people[x].firstName+" "+people[x].lastName+"\n";
				console.log(pop);
				x++;
				getDescendants(person,people,pop,x);
			}
			else if(x===(people.length-1)){
				console.log(pop);
				return (pop);
			}
			else
				x++;
				getDescendants(person,people,pop, x);
		}
		if (people[x].parents.length===0){
			x++;
			getDescendants(person,people,pop,x);
		}
	}
	*/
	
	/*
	
	for(var i=0; i<people.length; i++){
		for(var j=0; j<people[i].parents.length; j++){
			
			if(person.id===people[i].parents[j]){
				return people[i].firstName +" "+ people[i].lastName getDescendants(person
			}
			
			
		}
	}*/
	// return an array containing the descendants (objects)

