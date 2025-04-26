
  const menuBtn = document.querySelector('.card');
  const menuLateral = document.getElementById('menuLateral');

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede redirecionamento
    menuLateral.classList.toggle('active');
  });

