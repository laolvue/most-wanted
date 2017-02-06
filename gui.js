/*
  You do not need to modify this file. However, you may.
*/

function app(people){

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
