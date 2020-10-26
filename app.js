const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('submit');

btn.addEventListener('click', (e)=>{

    e.preventDefault();
    const heightVal = height.value;
    const weightVal = weight.value;

    let pound = 2.20462 * weightVal;
    let ounce = (pound/3) * 2;
    let liter = Math.round(ounce * 0.0295735);

   

});
