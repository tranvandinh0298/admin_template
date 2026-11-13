const login = document.querySelector('.login-page');
const form = login.querySelector('form');
const status = login.querySelector('[role="status"]');

form.addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = 'Demo sign-in complete. Credentials stay on this page.';
});
form.addEventListener('input', () => { status.textContent = ''; });
login.querySelectorAll('[data-login-info]').forEach(button => {
    button.addEventListener('click', () => {
        status.textContent = button.dataset.loginInfo + ' is a demo action.';
    });
});
form.querySelector('[type="submit"]').disabled = false;
