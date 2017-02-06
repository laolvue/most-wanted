/*
  You do not need to modify this file. However, you may.
*/

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  var person;
  switch(searchType){
    case 'yes':
      person = searchByName(people);
      mainMenu(person, people);
      break;
    case 'no':
      person = searchByTraits(people);
      mainMenu(person, people);
      break;
    default:
      app(people);
      break;
  }
}

function searchByName(people){

}

function searchByTraits(people){

}

function mainMenu(person, people){

}


function promptFor(question, valid){
  do{
    var response = prompt(question);
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
