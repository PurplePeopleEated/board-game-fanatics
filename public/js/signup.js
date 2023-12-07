const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('name-signup').value;
  const email = document.getElementById('email-signup').value;
  const pass = document.getElementById('pass-signup').value;

  if (username && email && pass) {
    const response = await fetch('/api/users/form', {
      method: 'POST',
      body: JSON.stringify({username, email, pass}),
      headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {document.location.replace('/inventory');
    } else {alert(response.statusText);}
}};

document.getElementById('signup-form').addEventListener('click', signupHandler);