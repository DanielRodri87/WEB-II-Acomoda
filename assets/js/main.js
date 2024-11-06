function loadHTML(elementId, filePath) {
    fetch(filePath)
      .then(response => {
          if (!response.ok) throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
          return response.text();
      })
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Erro:', error));
}

loadHTML("navbar", "/components/navbar.html");
