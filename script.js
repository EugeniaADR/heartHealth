const button = document.querySelector("#btn");
button.addEventListener('click', calculateSatFats)

function calculateSatFats(e) {
    e.preventDefault()// do not reload the page automatically
    let calories = document.querySelector("#dailyCalories").value;

    if (calories === "") {
        alert("Error!")
    }

    let grPer5caloriesFromSatFats = calories * 0.05 * 13 / 120; // 5% of calories from saturated fat, 13/120 коэффицент gr per cal

    let grPer6caloriesFromSatFats = calories * 0.06 * 13 / 120; // 6% of calories from saturated fat, 13/120 коэффицент gr per cal

    document.querySelector("#totalAmountOfSatFats").textContent = `If you need about ${calories} calories a day, the recommended amount of saturated fat for your is ${ grPer5caloriesFromSatFats } to ${ grPer6caloriesFromSatFats } grams per day`
}

