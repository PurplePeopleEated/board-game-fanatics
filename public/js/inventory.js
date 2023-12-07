// Grab input from modal form and send
const newGameHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('bg-title-new').value;
  const min = document.getElementById('bg-min-new').value;
  const max = document.getElementById('bg-max-new').value;
  const timeToPlay = document.getElementById('bg-ttp-new').value;
  
console.log(title, min, max, timeToPlay);
  if (title && min && max && timeToPlay) {
    const response = await fetch('/api/boardgames/inventory', {
      method: 'POST',
      body: JSON.stringify({title, min, max, timeToPlay}),
      headers: {'Content-Type': 'application/json'}
    });

  if (response.ok) {document.location.reload();
  } else {alert('Failed to add boardgame');}
}};

document.getElementById('btn-modal').addEventListener('click', newGameHandler);