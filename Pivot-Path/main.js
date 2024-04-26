document.getElementById('submit-btn').addEventListener('click', function() {
  const domain = document.getElementById('domain').value;
  const interest = document.getElementById('interest').value;

  if (domain.trim() !== '' && interest.trim() !== '') { 
      const resultContainer = document.getElementById('result');
      let result;

      switch (domain) {
          case 'science':
              result = '';
              break;
          case 'commerce':
              result = ``;
              break;
          case 'arts':
              result = ``;
              break;
          default:
              result = 'Please select a domain.';
      }

      resultContainer.textContent = result;
      window.location.href = 'roadmap.html'; 
  } else {
      alert('Please select a domain and enter your interests.');
  }
});

