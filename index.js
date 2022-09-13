const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const btn = document.querySelector('#btn');
let report = document.querySelector('#bmi_report');

let roundoff = (a) =>{
    return Math.round(a*100) /100;
}

let square = (value) => {
    return value * value ;
}

let calculate = (w , h) => {
    return w / h ;
}

let main = () =>{
    let weight_input = parseFloat(weight.value);
    let height_input = parseFloat(height.value);
    let sq_of_heigth = square(height_input);
    let calculation = calculate(weight_input , sq_of_heigth);
    report.innerHTML = roundoff(calculation);
}

btn.addEventListener('click', main);