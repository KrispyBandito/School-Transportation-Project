function displayQuestion(answer, name) {

  document.getElementById(name + answer).style.display = "block";

  if (answer == "yes") { // hide the div that is not selected

    document.getElementById(name+'no').style.display = "none";

  } else if (answer == "no") {

    document.getElementById(name+'yes').style.display = "none";
  }

}
