document.getElementById('bbt').addEventListener('click',function(){
      const tt = document.getElementById('with');
       const bb = tt.value;
       const input = parseFloat(bb);
       tt.value = '';
        if(isNaN(input)){
            alert("please provide your money");
            return;
        }
       
       
       const aa = document.getElementById('drew');
       const withh = aa.innerText;
      
       const totalwith = parseFloat(withh);


       const ball = document.getElementById('bal');
       const total = ball.innerText;
       const totalbal = parseFloat(total);
       
       if(totalbal<input){
        alert("Not enough money");
        return;
     }
      
        aa.innerText = totalwith + input;
       ball.innerText = totalbal - input;
       
       
})