const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const pass = document.getElementById('pass-login').value;

  if (email && pass) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, pass}),
      headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {document.location.replace('/inventory');
    } else {alert(response.statusText);}
  }};

document.getElementById('login-form').addEventListener('click', loginHandler);