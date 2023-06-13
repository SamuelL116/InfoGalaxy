// Get the login and signup buttons and the modals
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');

// Add event listeners to the buttons to open the modals
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Add event listener to the close button in the modals to close them
const closeBtns = document.getElementsByClassName('close');
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
}

// When the user clicks anywhere outside of the modals, close them
window.addEventListener('click', (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target == signupModal) {
    signupModal.style.display = 'none';
  }
});