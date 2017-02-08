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

function filterByTraits(data){
	for(var i=0;i<data.people.length;i++){
		if(data.traits.age==0){
			data.people[i].age=data.traits.age;
		}
		if(data.traits.height==0){
			data.people[i].height=data.traits.height;
		}
		if(data.traits.weight==0){
			data.people[i].weight=data.traits.weight;
		}
		if(data.traits.occupation==0){
			data.people[i].occupation=data.traits.occupation;
		}
		if(data.traits.eyeColor==0){
			data.people[i].eyeColor=data.traits.eyeColor;
		}
	}
		
		
	var result= data.people.filter(function(el){
		return (el.age == data.traits.age && el.height == data.traits.height && el.weight == data.traits.weight && el.occupation == data.traits.occupation && el.eyeColor == data.traits.eyeColor);
	});
	return(result);
}

function calculateAge(people){
	var ageOfPeople=people;
	for(var i=0;i<people.length;i++){
		ageOfPeople[i].age=(people[i].dob.split("/"));
		ageOfPeople[i].age=(2017- ageOfPeople[i].age[2]);
	}
	return (ageOfPeople);
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
