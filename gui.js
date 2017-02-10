/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  switch(makeLowerCase(searchType)){
    case 'yes':
      mainMenu(filterByName(searchByName(makePeopleLowerCase(cloneArray(people)),people)));//send user to search by name
      break;
    case 'no':
	  displayPeople(filterByTraits(searchByTraits(calculateAge(people))));//send user to search by traits
      break;
    default:
      app(people); // restart app
      break;
  }
}


// Menu function to call once you find who you are looking for
function mainMenu(dataArray){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!dataArray.person){
    alert("Could not find that individual.");
    return app(dataArray.people); // restart
  }

	var displayOption = prompt("Found " + dataArray.person.firstName + " " + dataArray.person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			displayPerson(dataArray.person);//display info
			break;
		case "family":
			displayFamily(getFamily(dataArray.person,dataArray.people));//display family
			break;
		case "descendants":
			var copyPerson=[];
			copyPerson[0]=dataArray.person;
			displayDescendants(getDescendants(copyPerson, dataArray.people));//display descendants
			break;
		case "restart":
			app(dataArray.people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(dataArray); // ask again
	}
}

//return an array containing first name, last name, and data
function searchByName(cloneOfPeople,people){
  var nameArray = [];
  nameArray.firstName = makeLowerCase(promptFor("What is the person's first name?", chars));
  nameArray.lastName = makeLowerCase(promptFor("What is the person's last name?", chars));
  nameArray.cloneOfPeople = cloneOfPeople;
  nameArray.people = people;
  return(nameArray);
}

//return an array containing traits inputted by user and data
function searchByTraits(people){
  var traits=[];
  var dataList=[];
  traits.age = promptFor("Type the age of the person or enter 0 if you don't know: ", numbers);
  traits.height = promptFor("Type the height of the person in inches or enter 0 if you don't know: ", numbers);
  traits.weight = promptFor("Type the weight of the person or enter 0 if you don't know: ", numbers);
  traits.occupation = promptFor("Type the occupation of the person or enter 0 if you don't know: ", charsIncludeZero);
  traits.eyeColor = promptFor("Type the eye color of the person or enter 0 if you don't know: ", charsIncludeZero);
  dataList.people=people;
  dataList.traits=traits;
  return(dataList);
}


// alerts a list of people; used .map
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

//alerts the family of person
function displayFamily(people){
  alert("Current Spouse:\n"+people.currentSpouse +"\n\n"+"Parents:\n"+people.parents+"\n\n"+"Children:\n"+people.children+"\n\n"+"Siblings:\n"+people.siblings);
}

//alerts descendants of person
function displayDescendants(people){
  alert("Descendants:\n"+people);
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question);
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper functions to pass in as default promptFor validation
function chars(input){
	var str= /[0-9@!#$%^&*()`~=+_{}\-\/\\;:'".,?*<>]/;
	var result = str.test(input);
		return !result; 
}

function charsIncludeZero(input){
	var str= /[1-9@!#$%^&*()`~=+_{}\-\/\\;:'".,?*<>]/;
	var result = str.test(input);
		return !result;
}

function numbers(input){
	var str= /[a-zA-Z@!#$%^&*()`~=+_{}\-\/\\;:'".,?*<>]/;
	var result = str.test(input);
		return !result;
}

//makes input lowercase
function makeLowerCase(input){
	input=input.toLowerCase();
	return input;
}

//clones an array and returns new array
function cloneArray(array){
	var cloneOfArray= JSON.parse(JSON.stringify(array));
	return cloneOfArray;
}

//makes firstNames & lastNames into lowercase
function makePeopleLowerCase(input){
	for(var i=0; i<input.length; i++){
		input[i].firstName=input[i].firstName.toLowerCase();
		input[i].lastName=input[i].lastName.toLowerCase();
	}
	return input;
}