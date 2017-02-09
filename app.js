/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/


// return an aray containing the people matching the name
function filterByName(nameArray){
	var j=0;
	for( var i=0; i<nameArray.people.length; i++){
		if(nameArray.firstName===nameArray.cloneOfPeople[i].firstName && nameArray.lastName===nameArray.cloneOfPeople[i].lastName){
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
}

//returns an array containing the persons matching traits inputted by the user; USED .filter
function filterByTraits(dataList){
	var cloneOfDataList= JSON.parse(JSON.stringify(dataList.people)); //makes a hard copy of array
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

//function to calculate the age of a person given their DOB
function calculateAge(people){
	var cloneOfPeople = JSON.parse(JSON.stringify(people));
	for(var i=0;i<people.length;i++){
		cloneOfPeople[i].age=(people[i].dob.split("/"));
		cloneOfPeople[i].age=(2017- cloneOfPeople[i].age[2]);
	}
	return (cloneOfPeople);
}

// return an array containing the family members (objects); USED Iteration
function getFamily(person, people){
	var familyArray=[];
	familyArray.currentSpouse=[];
	familyArray.parents=[];
	familyArray.children=[];
	for(var i=0; i<people.length; i++){
		if(person.currentSpouse==people[i].id){
			familyArray.currentSpouse= familyArray.currentSpouse+people[i].firstName+" "+people[i].lastName+"\n";
		}
		for(var j=0;j<person.parents.length;j++){
			familyArray.parents.length=person.parents.length;
			if(person.parents[j]==people[i].id){
				familyArray.parents[j] = familyArray.parents[j]+people[i].firstName+" "+people[i].lastName+"\n";
			}
		}
		for (var k=0;k<people[i].parents.length;k++){
			if(person.id==people[i].parents[k]){
				familyArray.children = familyArray.children+ people[i].firstName+" "+people[i].lastName+"\n";
			}
		}
	}
	return(familyArray);
}

//return an array containing descendants of person; USED RECURSION
function getDescendants(person, people, descendants=[], k=0){
	var p=0;
	for(var i=0;i<people.length;i++){
		for(var j=0; j<=people[i].parents.length; j++){
				if (person[k].id === people[i].parents[j]){
				
					descendants= descendants+people[i].firstName+" "+people[i].lastName+"\n";
					person.push(people[i]);
					console.log(person);
					p++;
				}
				if (k<person.length-1){
					p++;
				}
		}
	}
	
	if(p==0){
		return (descendants);
	}
	else if(p>0){
		k++;
	return getDescendants(person, people, descendants,k);
	}
}