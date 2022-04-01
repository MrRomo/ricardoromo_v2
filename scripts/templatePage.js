const $header = document.querySelector('header');
const $footer = document.querySelector('footer');

const footer = function footerTemplate(content){
          return    `<div class="contenedor">
                   <div class="contacto">
                     <a href="${content.rute}index.html">
                       <img src="${content.rute}images/logo-white.jpg" alt="logotipo blanco" width="70">
                     </a>
                     <div class="">
                       <a href="tel:+"> <strong>Telefono</strong> <span></span> </a>
                       <a href="mailto:"> <strong>E-Mail</strong> <span></span> </a>
                     </div>
                   </div>
                   <form class="formulario">
                     <div class="col1">
                       <label for="nombre">Nombre</label>
                       <input type="text" name="" required id="nombre" />
                       <label for="email">E-mail</label>
                       <input type="email" name="" required id="email"/>
                       <div class="sexo">
                         <label for="mujer">
                           <input type="radio" id="mujer" name="sexo" value="mujer" checked>mujer
                         </label>
                         <label for="hombre">
                           <input type="radio" id="hombre" name="sexo" value="hombre">hombre
                         </label>
                       </div>
                       <div class="intereses">
                         <label for="cotizacion">
                           <input type="checkbox" name="intereses" id="cotizacion" value="cotizacion" checked>Cotizacion
                         </label>
                         <label for="reclamos">
                           <input type="checkbox" name="intereses" id="reclamos" value="reclamos">Reclamos
                         </label>
                         <label for="comentarios">
                           <input type="checkbox" name="intereses" id="comentarios" value="comentarios">Comentarios
                         </label>
                         <label for="otros">
                           <input type="checkbox" name="intereses" id="otros" value="otros">Otros
                         </label>
                       </div>
                     </div>
                     <div class="col2">
                       <label for="comentarios">Comentarios</label>
                       <textarea placeholder ="Esto no sirve es solo de lujo¡¡" name="comantarios" id="comentarios" cols="30" rows="7"></textarea>
                       <input type="submit" value="Enviar" class="button"/>
                     </div>
                   </form>
                 </div>`
}
const header = function headerTemplate(content) {
  return (
            `<div>
              <figure class="logotipo" href="${content.rute}index.html"><!-- logotipo -->
                <a href="${content.rute}index.html">
                  <img src="${content.rute}images/logo.jpg" href="${content.rute}index.html" alt="LOGO" height="60" width="60" id="logo">
                </a>
              </figure>
              <span class="burguer-button icon-menu" id="burguer-button"></span>
              <nav class="menu" id="menu"><!-- menu -->
                <ul>
                  <li>
                    <a href="${content.rute}index.html">  Home</a>
                  </li>
                  <li>
                    <a href="${content.rute}sobremi.html"> Sobre Mi</a>
                  </li>
                  <li>
                    <a href="${content.rute}blog.html"> Blog</a>
                  </li>
                  <li>
                    <a href="${content.rute}proyectos.html">Proyectos</a>
                  </li>
                </ul>
              </nav>
            </div>
            `
  )
}
const content = function contentTemplate(content) {
  return (
    `<article class="proyecto">
    <a href="${content.url}" style="text-decoration: none; color:inherit">
    <h3>${content.title}</h3>
    <img src="${content.imgURL}" alt="${content.alt}">
    </a>
    <div class="description">
    <h3>${content.sub}</h3>
    <div class="autor">
    <p>
    <span> ${content.autor}</span>
    </p>
    <span>${content.date}</span>
    </div>
    <a href="${content.url}" class="button">Saber más</a>
    </div>
    </article>
    `
  )
}
function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
}
function renderContents($container,list,template) {
    // actionList.data.movies
    //$container.children[0].remove();
    list.forEach((content) => {
      const HTMLString = template(content);
      const contentElement = createTemplate(HTMLString);
      $container.append(contentElement);
      const image = contentElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
    })
    console.log("Generated...");
}
