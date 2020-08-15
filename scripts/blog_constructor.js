const $blogs = document.querySelector('#contenidos');

var list = []
list[0] = {
            url: 'blog/aichallenge/index.html',
            title: 'AI For Future equipo Ganador del AI Challenge',
            imgURL: 'images/AiChallenge.jpg',
            alt: 'sensor',
            sub: 'Ganador del primer puesto en el concurso AI Challenge de la universidad del magdalena en alianza con Bancolombia.',
            autor: 'Ricardo Romo',
            date: 'Septiembre 24 2018'
          }

renderContents($blogs,list,content)
