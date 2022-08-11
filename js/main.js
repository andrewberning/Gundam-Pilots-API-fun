document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
  const suitsName = document.querySelector('input').value;
  try {
    const response = await fetch();
    const data = await response.json();

    console.log(data);
    document.querySelector('h2').textContent = data.pilotName;
  }
  catch(error) {
    console.log(error);
  }
}