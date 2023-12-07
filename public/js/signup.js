const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('name-signup');
  const email = document.getElementById('email-signup');
  const pass = document.getElementById('pass-signup');

  if (username && email && pass) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({username, email, pass}),
      headers: {'Content-Type:': 'application/json'}
    });
    
    if (response.ok) {document.location.replace('/inventory');
    } else {alert(response.statusText);}
}};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);