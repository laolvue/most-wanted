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

function filterByTraits(dataList){
	var cloneOfDataList= JSON.parse(JSON.stringify(dataList.people));
	for(var i=0;i<cloneOfDataList.length;i++){
		if(dataList.traits.age==0){
			cloneOfDataList[i].age=dataList.traits.age;
		}
		if(dataList.traits.height== 0){
			cloneOfDataList[i].height=dataList.traits.height;
		}
		if(dataList.traits.weight==0){
			cloneOfDataList[i].weight=dataList.traits.weight;
		}
		if(dataList.traits.occupation==0){
			cloneOfDataList[i].occupation=dataList.traits.occupation;
		}
		if(dataList.traits.eyeColor==0){
			cloneOfDataList[i].eyeColor=dataList.traits.eyeColor;
		}
	}
	var result= cloneOfDataList.filter(function(el){
		return (el.age == dataList.traits.age && el.height == dataList.traits.height && el.weight == dataList.traits.weight && el.occupation == dataList.traits.occupation && el.eyeColor == dataList.traits.eyeColor);
	});
	return(result);
}

function calculateAge(people){
	var cloneOfPeople = JSON.parse(JSON.stringify(people));
	for(var i=0;i<people.length;i++){
		cloneOfPeople[i].age=(people[i].dob.split("/"));
		cloneOfPeople[i].age=(2017- cloneOfPeople[i].age[2]);
	}
	return (cloneOfPeople);
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

function getDescendants(person, people,descendants=[],x=0){
	if(x==people.length){
		return(descendants);
	}
	
	else if(x<people.length){
		for(i=0;i<people[x].parents.length;i++){
			if (person.id===people[x].parents[i]){
				descendants = descendants +"\n"+people[x].firstName+" "+people[x].lastName;
			}
		}
		x++;
		return getDescendants(person, people, descendants,x);
	}
}
