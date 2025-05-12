import './index.css';
import Swal from 'sweetalert2';
// import goToHomePage from './preload.js';

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');

    // Toggle Title Text on Login Page
    title.addEventListener('click', () => {
        // toggle text
        if (title.innerText === 'Mãezona Lindona!!😘') {
            title.innerText = 'Login';
            return;
        }
        title.innerText = 'Mãezona Lindona!!😘';
    });

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    document.getElementById('voltar').addEventListener('click', () => {
        window.location.href = 'src/pages/test.html';
        // window.location.href = './pages/test.html';
        // window.location = 'pages/test.html';
        // window.location.reload();
        // page1.classList.remove('hidden');
        // page1.classList.add('shown');
        // page2.classList.remove('shown');
        // page2.classList.add('hidden');

    });

    const loginButton = document.getElementById('login-btn');
    const nickname = document.getElementById('nickname');
    const password = document.getElementById('password');

    if (sessionStorage.getItem('loggedIn') === 'true') {
        page2.classList.remove('hidden');
        page2.classList.add('shown');
        page1.classList.remove('shown');
        page1.classList.add('hidden');
    }

    if (!window.open()){
        sessionStorage.removeItem('loggedIn');
    }

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!nickname.value || !password.value) {
            return;
        }
        if (nickname.value === 'plmt' && password.value === '132407') {
            Swal.fire({
                icon: 'success',
                title: 'Login realizado com sucesso!',
                timer: 1200,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
            });

            sessionStorage.setItem('loggedIn', 'true');

            setTimeout(() => {
                page2.classList.remove('hidden');
                page2.classList.add('shown');
                page1.classList.remove('shown');
                page1.classList.add('hidden');
            }, 1000);
            return;
        }
        Swal.fire({
            icon: 'error',
            title: 'Credenciais Inválidas!',
            timer: 2500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
        });
    });
    document.getElementById('logout-btn').addEventListener('click', () => {
        Swal.fire({
            icon: 'warning',
            title: 'Desejas realmente sair?',
            timer: 2500,
            showConfirmButton: true,
            toast: true,
            position: 'center',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sessão terminada',
                    timer: 1200,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                });
                setTimeout(() => {
                    sessionStorage.removeItem('loggedIn');
                    window.close();
                    location.reload(); // volta a mostrar o formulário
                }, 1000);
            }
        });
    });
});

