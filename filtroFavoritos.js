var cards = {
   "pessoas": [{
    nome: "Maria Aparecida",
    idade: 35,
    telefone: "(031) 999999999",
    email: "helena@gmail.com"
   },
   {
    nome: "Joao Batista",
    idade: 30,
    telefone: "(031) 999999999",
    email: "joao@gmail.com"
   },
   {
    nome: "Joselia Duarte",
    idade: 28,
    telefone: "(031) 999999999",
    email: "duartejoselia@gmail.com"
   },
   {
    nome: "Elaine Gonçalves",
    idade: 32,
    telefone: "(031) 999999999",
    email: "elaineg@gmail.com"
   }
    ]
}
var cardPessoas = `
<div class="card mb-3" >
<div class="row no-gutters">
  <div class="col-md-4">
    <img src="homem.png" class="card-img" alt="">
  </div>
  <div class="col-12 col-md-6">
    <div class="card-body" class="lista">
      <h5 class="card-title">Joao Manuel</h5>
      <p class="card-text">42 anos <br> (31)998307645 <br> joaomanuel@gmail.com</p>
      <p class="card-text"><small class="text-muted">Ultima atualização 3 mins atrás</small></p>
      <a href="perfilserviços.html">
      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" style="margin-right: 70px;">
        Ir para este perfil
      </button>
      </a>
    </div>
  </div>
</div>
</div>
`

var filtro = document.getElementById('filtro-servico');
    filtro.onkeyup = function() {
        var nomeFiltro = filtro.value;
        if(nomeFiltro == ""){
            exibir();
        }else {
            window.document.getElementById('cardParaFiltrar').innerHTML = ""
            for(let i=0; i<cards.pessoas.length; i++){
                if(cards.pessoas[i].nome.toUpperCase().includes(nomeFiltro.toUpperCase())){
                    window.document.getElementById('cardParaFiltrar').innerHTML +=  `
                    <div class="card mb-3" >
                    <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="homem.png" class="card-img" alt="">
                    </div>
                    <div class="col-12">
                        <div class="card-body" class="lista">
                        <h5 class="card-title">`+ cards.pessoas[i].nome + `</h5>
                        <p class="card-text">`+ cards.pessoas[i].idade + ` anos <br> `+ cards.pessoas[i].telefone + ` <br> `+ cards.pessoas[i].email + `</p>
                        <p class="card-text"><small class="text-muted">Ultima atualização 3 mins atrás</small></p>
                        <a href="perfilserviços.html">
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" style="margin-right: 70px;">
                            Ir para este perfil
                        </button>
                        </a>
                        </div>
                    </div>
                    </div>
                    </div>
                    `
                }
            }
        }
    };
function exibir(){
    window.document.getElementById('cardParaFiltrar').innerHTML =""
    for(let i=0; i<cards.pessoas.length; i++){
        window.document.getElementById('cardParaFiltrar').innerHTML +=  `
        <div class="card mb-3" >
        <div class="row no-gutters">
        <div class="col-md-4">
            <img src="homem.png" class="card-img" alt="">
        </div>
        <div class="col-12">
            <div class="card-body" class="lista">
            <h5 class="card-title">`+ cards.pessoas[i].nome + `</h5>
            <p class="card-text">`+ cards.pessoas[i].idade + ` anos <br> `+ cards.pessoas[i].telefone + ` <br> `+ cards.pessoas[i].email + `</p>
            <p class="card-text"><small class="text-muted">Ultima atualização 3 mins atrás</small></p>
            <a href="perfilserviços.html">
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" style="margin-right: 70px;">
                Ir para este perfil
            </button>
            </a>
            </div>
        </div>
        </div>
        </div>
        `
    }
}
exibir();