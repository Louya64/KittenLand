let form_food = document.getElementById("form_food");
form_food.addEventListener("submit", function (e) {
  e.preventDefault();
  let result_food_calculator = document.getElementsByClassName("result_food_calculator");
  result_food_calculator[0].style.display = "none";
  result_food_calculator[1].style.display = "none";
  result_food_calculator[2].style.display = "none";
  
  let age = parseInt(document.getElementById("age").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let idk_age = document.getElementById("idk_age").checked;
  let idk_weight = document.getElementById("idk_weight").checked;
  let res_div = document.getElementById("food_result_div");
  let res_span = document.getElementById("food_result_span");

  if (isNaN(age) || isNaN(weight) || idk_age || idk_weight) {
    document.getElementById("food_table").style.display = "block";
  } else {

    if (weight < 1 && age == 1) {
      res_div.style.display = "block";
      res_span.innerHTML = "25-40";
    } else if (weight >= 1 && weight < 1.8 && age == 2) {
      res_div.style.display = "block";
      res_span.innerHTML = "40-50";
    } else if (weight >= 1.8 && weight < 2.5 && age == 3) {
      res_div.style.display = "block";
      res_span.innerHTML = "55";
    } else if (weight >= 2.5 && weight < 3 && age == 4) {
      res_div.style.display = "block";
      res_span.innerHTML = "55-60";
    } else if (weight >= 3 && weight < 3.6 && age == 5) {
      res_div.style.display = "block";
      res_span.innerHTML = "60-70";
    } else if (weight >= 3.6 && weight < 6 && age > 5 && age <= 12) {
      res_div.style.display = "block";
      res_span.innerHTML = "75";
    } else {
      document.getElementById("food_wrong_result_div").style.display = "block";
      document.getElementById("food_wrong_result_age").innerHTML = age;
      document.getElementById("food_wrong_result_weight").innerHTML = weight;

    }
  }
});
