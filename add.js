// const form = document.querySelector('from');
// form.addEventListener('submit', function (e){
//     e.preventDefault();

//     const height = perseInt(document.querySelector('#height').value);
//     const weight = perseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML =`Please give a valid height ${height}`;
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight ${weight}` ;
//     }else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//         results.innerHTML = `<span>${bmi}</span>`;
//     }
 
// })
function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById('results').textContent = `Your BMI is ${bmi}`;
    } else {
        document.getElementById('results').textContent = 'Please enter both height and weight.';
    }
}
