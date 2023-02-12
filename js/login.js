  document.getElementById('btn').addEventListener('click',function(){
       const input = document.getElementById('log');
       const email = input.value;
       const pass = document.getElementById('pass');
       const password = pass.value;
      if(email == "rana@gmail.com" && password=='1234'){
           window.location.href = 'update.html'; 
      }
      else{
        alert('provide your valid email and password');
      }
      
 })