const button = document.querySelector("#btn");
button.addEventListener('click', calculateSatFats)

function calculateSatFats(e) {
    e.preventDefault()// do not reload the page automatically
    let calories = document.querySelector("#dailyCalories").value;
   

    if (calories === "") {
        alert("Error!")
    }


    let calFromSatFats5 = calories * 0.05 // 5% of calories from saturated fat,

    let calFromSatFats6 = calories * 0.06 // 6% of calories from saturated fat,
        
    let gramsOfSatFats5 = calFromSatFats5 * 13 / 120; //  13/120 коэффицент gr per cal

    let gramsOfSatFats6 = calFromSatFats6 * 13 / 120; // 13/120 коэффицент gr per cal

    document.querySelector("#totalAmountOfSatFats").textContent = `If you need about ${calories} calories a day, 
    no more than ${calFromSatFats5.toFixed()} - ${calFromSatFats6.toFixed()} of them should come from saturated fat.
   That's about ${gramsOfSatFats5.toFixed()} - ${gramsOfSatFats6.toFixed()} grams of saturated fat per day`
}

