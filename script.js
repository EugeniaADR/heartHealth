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

    document.querySelector("#totalAmountOfSatFats").textContent = `If you need about ${calories} calories a day, the recommended amount of saturated fat for you is ${ grPer5caloriesFromSatFats.toFixed() } to ${ grPer6caloriesFromSatFats.toFixed() } grams per day.`
}

const btnCalculate = document.querySelector("#calculate");
btnCalculate.addEventListener('click', calorieCalculator);

function calorieCalculator(e) {
    e.preventDefault()
    let age = document.querySelector('#age').value;
    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    
    let male = document.querySelector('#male')
    let female = document.querySelector('#female')
    let activityLevel = document.querySelector("#activityLevel").value
    let calorieCount
    

    if (age === '' || height === '' || weight === '') {
       alert('Error!')
    }
    if (male.checked) {
        calorieCount = (10 * `${weight}` + 6.25 * `${height}` - 5 * `${age}` + 5 ) * +activityLevel
    }
    else if (female.checked) {
            calorieCount = (10 * `${weight}` + 6.25 * `${height}` - 5 * `${age}` - 161) * +activityLevel  
    }
    calorieCount = calorieCount.toFixed()
   
    document.querySelector("#dailyAmountOfCalories").textContent = `Your daily calorie needs to maintain current weigth is ${calorieCount} calories.`
    }
   
    