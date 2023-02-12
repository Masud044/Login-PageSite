 document.getElementById('btt').addEventListener('click',function(){
        const aa = document.getElementById('int');
         const man = aa.value;
         const newMan = parseFloat(man);
         aa.value='';
         if(isNaN(newMan)){
            alert("please provide your money");
            return;
        }
       const bb = document.getElementById('head');
       const text = bb.innerText;
       const previousText = parseFloat(text);
        bb.innerText = newMan + previousText;
        const ball = document.getElementById('bal');
        const ballt = ball.innerText;
        const total = parseFloat(ballt);
        //console.log(total);
        ball.innerText =  total + newMan;
        

       
 })