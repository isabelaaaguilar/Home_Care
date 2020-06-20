
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
  var data = new Date();
  var dia = data.getDate(); 
  var mes= data.getMonth();
  var hora= data.getHours();
  var min= data.getMinutes(); 

  function newMessage() {
  message = $(".message-input input").val();  
	if($.trim(message) == '') {
		return false;
   }
   $('<div class="outgoing_msg"><div class="sent_msg"><p class="sent">' 
   + message + '</p><span class="time_date">'+dia+'/'+mes+' '+new Date().getHours() + ":" + new Date().getMinutes()+'</span></div></div>').appendTo($('.msg_history'));
   $('.message-input input').val('');
   $('.active_chat').html('<div class="chat_people"> <div class="chat_img"> <img src="img/chat2.png" alt=""> </div><div class="chat_ib"><h5><input type="button" class="link" onclick="mensagem_js()" value="Helena Arruda"></input><span class="chat_date">'+new Date().getHours()+':'+new Date().getMinutes()+'</span></h5><p class="recent">Você: ' + message+'</p></div></div></div>');
   $(".mesgs").animate({ scrollTop: $(document).height() }, "fast");
  };

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});