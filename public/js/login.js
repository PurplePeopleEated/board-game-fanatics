const signupHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name-signup');
  const email = document.getElementById('email-signup');
  const pass = document.getElementById('pass-signup');

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({name, email, pass}),
      headers: {'Content-Type:': 'signup/json'}
    });
    
    if (response.ok) {document.location.replace('/inventory');}
    else {alert(response.statusText);}
}};

const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login');
  const pass = document.getElementById('pass-login');

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, pass}),
      headers: {'Content-Type': 'signup/json'}
    });
    
    if (response.ok) {document.location.replace('/inventory');}
    else {alert(response.statusText);}
  }};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);
document.querySelector('.login-form').addEventListener('submit', loginHandler);