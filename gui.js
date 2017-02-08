/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  searchType=searchType.toLowerCase();
  console.log(searchType);
  switch(searchType){
    case 'yes':
      searchByName(people);
      break;
    case 'no':
      searchByTraits(people);
      break;
    default:
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			calculateAge(people);
			displayPerson(person);
			break;
		case "family":
			displayFamily(getFamily(person,people));
			break;
		case "descendants":
			console.log(getDescendants(person, people));
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
}
function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  filterByName(firstName, lastName, people);
}

function searchByTraits(people){
  var traits=[{
				"age":"",
				"height":"",
				"weight":"",
				"occupation":"",
				"eyeColor":""
  }]
			
  traits.age = prompt("Type the age of the person or enter 0 if you don't know: ");
  traits.height = prompt("Type the height of the person in inches or press enter if you don't know: ");
  traits.weight = prompt("Type the weight of the person or press enter if you don't know: ");
  traits.occupation = prompt("Type the occupation of the person or press enter if you don't know: ");
  traits.eyeColor = prompt("Type the eye color of the person or press enter if you don't know: ");
  var peopleAgeAdded=calculateAge(people);
  var teeth= filterByTraits(peopleAgeAdded,traits);
  displayPeople(teeth);
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayFamily(people){
  alert("Current Spouse: "+people.currentSpouse +"\n\n"+"Parents: "+people.parents);
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
		return !result; // default validation only
	}
