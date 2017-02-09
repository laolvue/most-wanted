/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  searchType=searchType.toLowerCase();
  switch(searchType){
    case 'yes':
      mainMenu(filterByName(searchByName(people)));
      break;
    case 'no':
	  displayPeople(filterByTraits(searchByTraits(calculateAge(people))));
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
			displayPerson(dataArray.person);
			break;
		case "family":
			displayFamily(getFamily(dataArray.person,dataArray.people));
			break;
		case "descendants":
			displayDescendants(getDescendants(dataArray.person, dataArray.people));
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

function searchByName(people){
  var nameArray = [];
  var cloneOfPeople=[];
  nameArray.firstName = promptFor("What is the person's first name?", chars);
  nameArray.lastName = promptFor("What is the person's last name?", chars);
  nameArray.people = people;
  return(nameArray);
}

function searchByTraits(people){
  var traits=[];
  traits.age = promptFor("Type the age of the person or enter 0 if you don't know: ", numbers);
  traits.height = promptFor("Type the height of the person in inches or enter 0 if you don't know: ", numbers);
  traits.weight = promptFor("Type the weight of the person or enter 0 if you don't know: ", numbers);
  traits.occupation = promptFor("Type the occupation of the person or enter 0 if you don't know: ", charsIncludeZero);
  traits.eyeColor = promptFor("Type the eye color of the person or enter 0 if you don't know: ", charsIncludeZero);
  var dataList=[];
  dataList.people=people;
  dataList.traits=traits;
  return(dataList);
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayFamily(people){
  alert("Current Spouse: "+people.currentSpouse +"\n\n"+"Parents: "+people.parents+"\n\n"+"Children: "+people.children);
}

function displayDescendants(people){
  alert("Descendants: "+people);
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

// helper function to pass in as default promptFor validation
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
