document.getElementById('signup-login-btn').addEventListener('click', redirectToPage);
document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    redirectToPage();
  }
});

function redirectToPage() {

  window.location.href = 'login.html';
}
