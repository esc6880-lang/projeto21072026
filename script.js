function toggleMode() { 
  //ativando e desativado light 
 const html = document.documentElement
 html.classList.toggle("light") 
 const img= document.querySelector("#profile img ")
 //mudando img
  if (html.classList.contains('light')) {
    //capiturar  tag img
    img.setAttribute("src","./mais_informacoes/assets (1)/assets/avatar-light.png")
    img.setAttribute("alt","foto de emily sorindo ,uzando uma blusa marrom ,branca ,cabelos solto e cacheado")
  } else {
    //subistituir tag img
    img.setAttribute("src","./mais_informacoes/assets (1)/assets/imagem01.png")
    img.setAttribute("alt","foto de emily sorindo ,uzando uma camiseta preta e cabelos solto e cacheado")
  }

}
