/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function filterByName(nameArray){
	var j=0;
	
	for( var i=0; i<nameArray.people.length; i++){
		if(nameArray.firstName===nameArray.people[i].firstName && nameArray.lastName===nameArray.people[i].lastName){
				j++;
				break;
		}
	}
	var result = [];
	if(j>0)
	{
		result.person=nameArray.people[i];
		result.people=nameArray.people;
		return(result);
	}
	else if (j===0)
	{
		result.person=0;
		result.people=nameArray.people;
		return(result);
	}
	// return an aray containing the people matching the name
}

function filterByTraits(people, traits){
	for(var i=0;i<people.length;i++){
		if(traits.age==0){
			people[i].age=traits.age;
		}
		if(traits.height==0){
			people[i].height=traits.height;
		}
		if(traits.weight==0){
			people[i].weight=traits.weight;
		}
		if(traits.occupation==0){
			people[i].occupation=traits.occupation;
		}
		if(traits.eyeColor==0){
			people[i].eyeColor=traits.eyeColor;
		}
	}
		
		
	var pop= people.filter(function(el){
		return (el.age == traits.age && el.height == traits.height && el.weight == traits.weight && el.occupation == traits.occupation && el.eyeColor == traits.eyeColor);
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


function getFamily(person, people){
	var familyArray=[];
	familyArray.parents=[];
	familyArray.children=[];
	if(!isNaN(person.currentSpouse)||!isNaN(person.parents)){
		for(var i=0; i<people.length; i++){
			if(person.currentSpouse==people[i].id){
				familyArray.currentSpouse=people[i].firstName+" "+people[i].lastName;
			}
			for(var j=0;j<person.parents.length;j++){
				familyArray.parents.length=person.parents.length;
				if(person.parents[j]==people[i].id){
					familyArray.parents[j] = people[i].firstName+" "+people[i].lastName;
				}
			}
			for (var k=0;k<people[i].parents.length;k++){
				if(person.id==people[i].parents[k]){
					familyArray.children = people[i].firstName+" "+people[i].lastName;
				}
			}
		}
	}
			
	return(familyArray);
	// return an array containing the family members (objects)
}

function getDescendants(person, people,pop=[],x=0){
	if(x==people.length){
		return(pop);
	}
	
	else if(x<people.length){
		for(i=0;i<people[x].parents.length;i++){
			if (person.id===people[x].parents[i]){
				pop = pop +"\n"+people[x].firstName+" "+people[x].lastName;
			}
		}
		x++;
		return getDescendants(person, people, pop,x);
	}
}
