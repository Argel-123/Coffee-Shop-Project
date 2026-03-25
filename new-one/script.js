function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username ==='admin' && password === '123'){
        const countdiv = document.getElementById('text-show');
        countdiv.innerHTML = 'Redirecting to homepage...';
        countdiv.style.color = 'green';
        setTimeout(() => {
             const countdiv = document.getElementById('text-show');
             countdiv.innerHTML = 'Redirecting to homepage...';
             countdiv.style.color = 'green';
             let count = 3;
                const interval = setInterval(() => {
                    count--;
                    countdiv.innerHTML = `Redirecting to homepage... ${count}`;
                     countdiv.style.color = 'green';
                    if (count === 0) {
                        clearInterval(interval);
                        window.location.href = './homepage/landing.html';
                    }}, 1000);
            
        }, 2000);

    }else if (username === '' && password === '') {
        document.getElementById('text-show').innerHTML = 'Please enter both username and password.';
        document.getElementById('text-show').style.color = 'red';
        setTimeout(() => {
            document.getElementById('text-show').innerHTML = '';
            document.getElementById('text-show').style.color = '';
        }, 2000);
    }else if(username === '') {
        document.getElementById('text-show').innerHTML = 'Please enter your username';
        document.getElementById('text-show').style.color = 'red';
        setTimeout(() => {
            document.getElementById('text-show').innerHTML = '';
            document.getElementById('text-show').style.color = '';
        }, 2000);
    }else if(password === '') {
        document.getElementById('text-show').innerHTML = 'Please enter your password';
        document.getElementById('text-show').style.color = 'red';
        setTimeout(() => {
            document.getElementById('text-show').innerHTML = '';
            document.getElementById('text-show').style.color = '';
        }, 2000);
    }else{
        document.getElementById('text-show').innerHTML = 'Invalid username or password';
        document.getElementById('text-show').style.color = 'red';
        setTimeout(() => {
            document.getElementById('text-show').innerHTML = '';
            document.getElementById('text-show').style.color = '';
        }, 2000);

    };
}