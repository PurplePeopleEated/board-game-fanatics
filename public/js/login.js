const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login');
  const pass = document.getElementById('pass-login');

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, pass}),
      headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {document.location.replace('/inventory');
    } else {alert(response.statusText);}
  }};

document.querySelector('.login-form').addEventListener('submit', loginHandler);