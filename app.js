const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('submit');
const content = document.getElementById('content');
const result = document.getElementById('result')

btn.addEventListener('click', (e)=>{

    e.preventDefault();
    const heightVal = height.value;
    const weightVal = weight.value;

    let pound = 2.20462 * weightVal;
    let ounce = (pound/3) * 2;
    let liter = Math.round(ounce * 0.0295735);

    //content.style.display = "none";
    const html = `<div class="card text-white bg-primary mb-3 mx-auto" id ="result">
                    <div class="result"> You should drink ${liter} Liter </div>
                  </div>`
    result.innerHTML = html;

   

});
