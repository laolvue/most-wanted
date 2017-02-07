/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  switch(searchType){
    case 'yes':
      searchByName(people);// TODO: search by name
      break;
    case 'no':
      searchByTraits(people);// TODO: search by traits
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
			getFamily(person,people);
			// TODO: get person's family
			break;
		case "descendants":
			console.log(getDescendants(person, people));
			// TODO: get person's descendants
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
  // TODO: find the person using the name they entered
}
function searchByTraits(people){
  var traits=[{
				"age":"",
				"height":"",
				"weight":"",
				"occupation":"",
				"egeColor":""
  }]
			
  traits.age = promptFor("Type the age of the person: ");
  traits.height = promptFor("Type the height of the person in inches: ");
  traits.weight = promptFor("Type the weight of the person: ");
  traits.occupation = promptFor("Type the occupation of the person: ");
  traits.eyeColor = promptFor("Type the eye color of the person: ");
  var peopleAgeAdded=calculateAge(people);
  var teeth= filterByTraits(peopleAgeAdded,traits);
  displayPeople(teeth);
  
//  filterByName(firstName, lastName, people);
  // TODO: find the person using the name they entered
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
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
  } while(!response /*|| !valid(response)*/);
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return false; // default validation only
}
