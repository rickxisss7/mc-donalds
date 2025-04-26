
  const menuBtn = document.querySelector('.card');
  const menuLateral = document.getElementById('menuLateral');

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede redirecionamento
    menuLateral.classList.toggle('active');
  });


  const links = document.querySelectorAll('.toggle');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      const descricao = this.nextElementSibling;
  
      if (descricao.style.display === 'none' || descricao.style.display === '') {
        descricao.style.display = 'block';
        this.classList.add('ativo'); // adiciona negrito
      } else {
        descricao.style.display = 'none';
        this.classList.remove('ativo'); // tira o negrito
      }
    });
  });
  