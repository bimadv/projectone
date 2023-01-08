
/*-------login------*/
document.getElementById('login-container').addEventListener('submit',function(event){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username === 'bima' && password === 'admin'){
      window.location.href = 'home.html';
    } else {
        alert('password atau user name salah');
    }
    
    
    });
/*-------login end------*/



