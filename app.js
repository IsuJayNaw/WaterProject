const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.getElementById('submit');
const content = document.getElementById('content');
const result = document.getElementById('result');
const alertBox= document.querySelector('.alert');
const loder = document.querySelector('.loding');

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    const heightVal = height.value;
    const weightVal = weight.value;

    let validateResult  = inputValidation(heightVal, weightVal);

    if(validateResult){
        let pound = 2.20462 * weightVal;
        let ounce = (pound/3) * 2;
        let liter = Math.round(ounce * 0.0295735);
    
        //content.style.display = "none";
        content.classList.add('d-none');

        const html = `
        <div class="col-8 mx-auto">
            <div class="card">
                <div class="card-body text-center">
                    <h3 class="card-title">You should drink</h3>
                    <h3 class="card-title">${liter} liter</h3>
                </div>
            </div>
        </div>
        `;

        loder.classList.remove('d-none');

        setTimeout(()=>{

            result.innerHTML = html;

        },6000);
       


       
        
      
    }else{

          const alertHtml = `
                            <strong>Height & Weight is empty. Please Enter the values.</strong> 
                        `;

          alertBox.innerHTML = alertHtml;
          alertBox.classList.add('alert-danger');

          setTimeout(()=>{
            
            alertBox.classList.add('d-none');

          }, 3000);
    }

    

   

});



// Input Vaidation

function inputValidation(heightVal, weightVal){
    
    if(heightVal && weightVal){
        return true;
    }else{
        return false;
    }
}