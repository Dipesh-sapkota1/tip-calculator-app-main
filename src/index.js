 document.addEventListener('DOMContentLoaded',()=>{
    const bill = document.getElementById('bill');
    const tipBtns = document.querySelectorAll('.tip-btn');
    const people = document.getElementById('people');
    const customTip = document.getElementById('custom-tip');
    const totalTip = document.getElementById('total-tip');
    const totalBill = document.getElementById('total-bill');
    const resetBtn  = document.getElementById('reset-btn');
    const errorMsg  = document.getElementById('error-text');
    const errorInput = document.getElementById('people-box');

    let bill_Amount = 0;
    let tip_Amount = 0;
    let people_count = 0;

    function calculateTip() {
        resetBtn.classList.add('active');
        const tipAmt =  (((tip_Amount  / 100) * bill_Amount) / people_count );
        const billAmt =  (tipAmt + (bill_Amount / people_count));
        if(people_count <= 0 || people.value === ''){
            totalTip.innerText = `$0.00`;
            totalBill.innerText = `$0.00`;
        }else{     
            totalTip.innerText = `$${tipAmt.toFixed(2)}`;
            totalBill.innerText = `$${billAmt.toFixed(2)}`;
        }
    }
     
    bill.addEventListener('input',(e)=>{
        bill_Amount = +e.target.value;
        if(bill_Amount > 0){
            calculateTip();
        }else{
            bill_Amount = 0;
            bill.value = 0;
        }
            
    });

    tipBtns.forEach(button =>{
        button.addEventListener('click',()=>{
            tipBtns.forEach(btn =>{
                customTip.value = '';
                btn.classList.remove('active');
                calculateTip();
            });
            button.classList.add('active');
            tip_Amount = +button.dataset.tip; 
            calculateTip();
        })
    });
    people.addEventListener('input',(e)=>{
        people_count = +e.target.value;
        if(people_count > 0){
            calculateTip();
            errorInput.classList.remove('outline');
            errorMsg.classList.add('hidden');
        }else{
            people_count = 0;
            people.value = 0;
            totalTip.innerText = `$0.00`;
            totalBill.innerText = `$0.00`;
            errorInput.classList.add('outline');
            errorMsg.classList.remove('hidden');
        }
    });
    customTip.addEventListener('input',(e)=>{
        tipBtns.forEach(btn=>{btn.classList.remove('active')});
        tip_Amount = +e.target.value;
        if(tip_Amount > 0 && bill_Amount > 0 && tip_Amount > 0){
            calculateTip();
        }else{
            tip_Amount = 0;
        }
    })
    resetBtn.addEventListener('click',reset);

    function reset(){
       bill.value = '';
       people.value = '';
       customTip.value = '';
       totalTip.innerText = '$0.00';
       totalBill.innerText = '$0.00';
       bill_Amount = 0;
       tip_Amount = 0;
       people_count = 0;
       resetBtn.classList.remove('active');
       tipBtns.forEach(btn=>{btn.classList.remove('active')});
    }
   
 })