let formFood = document.getElementById("formFood");
let sterilizedQuestion = document.getElementById("sterilizedQuestion");
let age = document.getElementById("age");

//display the input only if the cat has the good age to be sterilized
function sterilized() {
  sterilizedQuestion.classList.add("hidden");
  let ageVal = parseInt(age.value);
  if (ageVal > 11) {
    sterilizedQuestion.classList.remove("hidden");
  }
}
sterilized()
age.addEventListener("input", sterilized);


formFood.addEventListener("submit", function (e) {
  e.preventDefault();

  let foodRes = document.getElementsByClassName("foodRes");
  let foodTable = document.getElementById("foodTable");
  let ageVal = parseInt(age.value);
  let weightVal = parseFloat(document.getElementById("weight").value);
  let idkAge = document.getElementById("idkAge").checked;
  let idkWeight = document.getElementById("idkWeight").checked;
  let sterilized = document.getElementById("sterilized").value;
  let foodCalculDiv = document.getElementById("foodCalculDiv");
  let foodCalculSpan = document.getElementById("foodCalculSpan");
  let foodResProblem = document.getElementById("foodResProblem");
  let weightProblem = false;
  foodCalculSpan.innerHTML = "";

  for (let i = 0; i < foodRes.length; i++) {
    foodRes[i].classList.add("hidden");
  }
  
  if (isNaN(ageVal) || isNaN(weightVal) || idkAge || idkWeight) {
    foodTable.classList.remove("hidden");
  } else {
    switch (ageVal) {
      case 1 :
        weightVal > 0.1 && weightVal < 0.3 ?
        foodCalculSpan.innerHTML = "13ml of milk for Baby Cats"
        : 
        weightProblem = true;
        break;
      case 2 :
        weightVal > 0.2 && weightVal < 0.4 ?
        foodCalculSpan.innerHTML = "17ml of milk for Baby Cats"
        : 
        weightProblem = true;
        break;
      case 3 :
        weightVal > 0.25 && weightVal < 0.55 ?
        foodCalculSpan.innerHTML = "20ml of milk for Baby Cats"
        : 
        weightProblem = true;
        break;
      case 4 :
        weightVal > 0.3 && weightVal < 0.65 ?
        foodCalculSpan.innerHTML = "22ml of milk for Baby Cats"
        : 
        weightProblem = true;
        break;
      case 5 :
        weightVal > 0.38 && weightVal < 0.77 ?
        foodCalculSpan.innerHTML = "15ml of milk for Baby Cats and 10g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 6 :
        weightVal > 0.46 && weightVal < 0.92 ?
        foodCalculSpan.innerHTML = "15ml of milk for Baby Cats and 15g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 7 :
        weightVal > 0.53 && weightVal < 1.05 ?
        foodCalculSpan.innerHTML = "10ml of milk for Baby Cats and 20g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 8 :
        weightVal > 0.6 && weightVal < 1.2 ?
        foodCalculSpan.innerHTML = "40-50g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 9 :
        weightVal > 0.9 && weightVal < 1.8 ?
        foodCalculSpan.innerHTML = "55g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 10 :
        weightVal > 1.2 && weightVal < 2.4 ?
        foodCalculSpan.innerHTML = "55-60g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 11 :
        weightVal > 1.5 && weightVal < 3 ?
        foodCalculSpan.innerHTML = "60-70g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 12 :
      case 13 :
      case 14 :
      case 15 :
      case 16 :
      case 17 :
        weightVal > 1.8 && weightVal < 4.8 ?
        foodCalculSpan.innerHTML = "75g of food for kittens"
        : 
        weightProblem = true;
        break;
      case 18 :
      case 19 :
        weightVal > 1.8 && weightVal < 4.8 ?
        foodCalculSpan.innerHTML = "40-50g of food for" + (sterilized == "yes" ? " sterilized" : "") + " aldult cats"
        : 
        weightProblem = true;
        break;
      case 20 :
      case 21 :
        weightVal > 1.8 && weightVal < 4.8 ?
        foodCalculSpan.innerHTML = "40-50g of food for" + (sterilized == "yes" ? " sterilized" : "") + " old cats"
        : 
        weightProblem = true;
        break;
      default :
        foodTable.classList.remove("hidden");
    }

    //display the div problem if there is a weight problem or the table if switch didn't matched... else, display the result
    (weightProblem ? foodResProblem : foodCalculSpan.innerHTML == "" ? foodTable : foodCalculDiv).classList.remove("hidden");
    if (weightProblem) {
      document.getElementById("foodResProblemAge").innerHTML = age.options[age.selectedIndex].text;
      document.getElementById("foodResProblemWeight").innerHTML = weightVal;
    }
  }
});
