function login() {
    alert("Login realizado com sucesso!");
  }
  function mensagem_js() {
    if (window.matchMedia("(max-width: 900px)").matches) {
 document.getElementById("inbox_people").style.display= "none"; 
        
        document.getElementById("mesgs").style.display= "block";
        document.getElementById("mesgs").style.width= "100%"; 
        document.getElementById("mesgs").style.visibility= "visible"; 
     } 
  }
  function sair_chat() {
    if (window.matchMedia("(max-width: 900px)").matches) {
         document.getElementById("mesgs").style.display= "none";
        document.getElementById("inbox_people").style.display= "inline";
        document.getElementById("inbox_people").style.width= "100%";
    
     } 
  }
