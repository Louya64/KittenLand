let form_food = document.getElementById("form_food");
form_food.addEventListener("submit", function(e) {
    e.preventDefault();
    let age = parseInt(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let idk_age = document.getElementById("idk_age").checked;
    let idk_weight = document.getElementById("idk_weight").checked;
    if (isNaN(age) || isNaN(weight || idk_age || idk_weight)) {
        console.log("empty");
    } else {
        console.log("pas empty")
        console.log(age)
        console.log(weight)
        console.log(idk_age)
        console.log(idk_weight)
    }
})