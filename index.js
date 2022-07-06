/* Aqui declaro el uso de teclado en la función y creo una constante donde llamare a la modal*/
function activarmodal({key}){
  const Modal = document.getElementById('mimodal');
  if(key){
    /*Aqui indico en mi constante el estilo que quiero de*/
    Modal.style.display = 'block';
    console.log(key);
  }
  else if(key){
    console.log(key)
  }
}
/*Declaro el nombre de mi funcion para cerrar la modal*/
function apagarmodal(){
  const ModalOff = document.getElementById('mimodal');
  /*si detecta que tiene un estilo display entonces cambiara y le dara un display none*/
  if(ModalOff.style.display === 'block'){
    ModalOff.style.display = 'none';
  }
  else {
    Modal.style.display = 'block';
  }
}

/*Despues de crear mis funciones de abrir y cerrar, utilizo la función mi llave para ejecutar y asi abrir la modal con la tecla escape*/
function millave(e){
  if(e.key.includes('Escape')){
   e.preventDefault();
   activarmodal({key: e.key})
  }
}

window.addEventListener('keydown', millave);

/*Aqui va la intersection de mi ventana*/

if(!!window.IntersectionObserver){
  /*Hacemos una variable anonima donde usaremos una variable anonima*/ 
  let ver = new IntersectionObserver((entries, ver) => { 
    entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log(entry);
      /*Tomando el src y el data-src, hacemos que tome el data-src convirtiendolo en el nuevo src cuando la intesection se haga sobre la posicion*/
      entry.target.src = entry.target.dataset.src;
      ver.unobserve(entry.target);
    }
    });
  }, {rootMargin: "0px 0px -200px 0px"});/*Este elemento indica a que altura apareceran nuestros elementos cuando se haga la inserection*/
  document.querySelectorAll('img').forEach(img => { ver.observe(img) });
}

/*en caso de no contener un elemento data-src mantiene visible la imagen*/
else{
  document.querySelector('img').style.display = 'block';
}