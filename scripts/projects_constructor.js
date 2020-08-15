const $projects = document.querySelector('#contenidos');

var list = []
list[0] = {
            url: 'proyectos/rbot-explorer.html',
            title: 'Rbot-explorer',
            imgURL: 'images/sensor.jpg',
            alt: 'sensor',
            sub: 'Rbot-explorer, robot que podrá recorer habitaciones de manera autonoma.',
            autor: 'Ricardo Romo',
            date: 'Junio 10 2018'
          }
list[1] = {
            url: 'http://rendergame.com',
            title: 'Render Game',
            imgURL: 'images/render.jpg',
            alt: 'sensor',
            sub: 'Futura tienda online, dedicada al armado de computadores a pedido.',
            autor: 'Ricardo Romo',
            date: 'Abril 10 2018'
          }
list[2] = {
            url: '#',
            title: 'Desarrollo Web',
            imgURL: 'images/desarrollo.jpg',
            alt: 'desarrollo',
            sub: 'Capacitado con las ultimas tecnologias en el desarrollo web y responsive desing.',
            autor: 'Ricardo Romo',
            date: 'Junio 14 2018'
          }
renderContents($projects,list,content)
