// Grab input from modal form and send
const newGameHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('bg-title-new').value;
  const min = document.getElementById('bg-min-new').value;
  const max = document.getElementById('bg-max-new').value;
  const timeToPlay = document.getElementById('bg-ttp-new').value;
  
console.log(title, min, max, timeToPlay);

};

document.getElementById('btn-modal').addEventListener('click', newGameHandler);