
// buy ticket button
document.getElementById('buy-tickets-btn').addEventListener('click',function(){
    document.getElementById("buy-tickets-section").scrollIntoView({behavior: 'smooth'});
})
//apply btn hover:
const applyBtn = document.getElementById('apply');

    applyBtn.addEventListener('mouseover', function(){
        if(!applyBtn.disabled === true){
        applyBtn.style.transform = 'scale(1.03)';
        applyBtn.style.backgroundColor = '#29bd08'
        applyBtn.style.color = 'black'
    }
    })
    applyBtn.addEventListener('mouseout', function(){
        if(!applyBtn.disabled === true){
        applyBtn.style.transform = 'scale(1.0)';
        applyBtn.style.backgroundColor = '#1dd100'
        applyBtn.style.color = 'white'
        }
    })


// seats selection
const buttons = document.getElementsByClassName('but');

let keyCollect = [];
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', function (event) {
        const key = event.target.innerText;


        const press = event.target.style.backgroundColor;
        
        adrem(key);
        if (press === 'rgb(247, 248, 248)' || press === '') {
            addColor(key);
            increase('seatBooked',1);
            increase('totalPrice',550);
            increase('grandTotal',550);
            decrease('seatLeft',1);
            keyCollect.push(key);

            
            
        } else {
            removeColor(key);
            
            decrease('seatBooked',1);
            decrease('totalPrice',550);
            decrease('grandTotal',550);
            increase('seatLeft',1);
            keyCollect.pop();
            
            document.getElementById('warn').setAttribute('hidden',true);

        }
        let count = document.getElementById('seatBooked').innerText;
        console.log(typeof(count))
        if(count === '4'){
            for(const btn of buttons){
                if(btn.style.backgroundColor !== 'rgb(29, 209, 0)')
                btn.disabled = true;
            }
            document.getElementById('warn').removeAttribute('hidden');
            document.getElementById('apply').removeAttribute('disabled');
            document.getElementById('apply').style.backgroundColor = '#1dd100';
            
        }
        else{
            for(const btn of buttons){
                btn.disabled = false;
            }
            document.getElementById('apply').setAttribute('disabled', true);
            document.getElementById('apply').style.backgroundColor = '#a8b4a6';
            }
        
    });
}
const nam = document.getElementById('inputName');
const number = document.getElementById('inputNumber');
const nextButton = document.getElementById('nextBtn');


// next button enabling
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', function () {
        nam.addEventListener('input', next);
        number.addEventListener('input', next);
        function next() {
            const gett = document.getElementById('seatBooked').innerText
            if (number.value.length > 0 && gett !== '0') {
                if(!isNaN(number.value)){
                    nextButton.removeAttribute('disabled');
                    nextButton.style.color = 'white';
                    nextButton.style.backgroundColor = '#1dd100';
                }

            } else {
                disableNextButton()
            }
        }

    })}




// continue btn

// document.getElementById('continueBtn').addEventListener('click',disableNextButton);
// document.getElementById('continueBtn').addEventListener('click',unclick);