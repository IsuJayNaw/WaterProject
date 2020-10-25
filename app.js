const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('submit');

btn.addEventListener('click', (e)=>{

    const heightVal = height.value;
    const weightVal = weight.value;

    let pound = 2.20462 * weightVal;

    console.log("pound");
    

});
