let botao1= document.getElementById('btnlogar1');
let botao = document.getElementById('btnlogar');
let sen = false;
let mat = false;


botao.addEventListener('click', function validadeFields(event) {
    event.preventDefault();
    let pegmatricula = document.getElementById('Matricula').value.toUpperCase().replace("TN", "");
    let pegasenha= document.getElementById('senha').value;

    for(let i in usuarios){
        if (pegmatricula == usuarios[i].matricula){
            mat = true;
            break;
        }
        else {
            mat = false;
        }
        }
    
    for(let i in usuarios){
        if (pegasenha == usuarios[i].senha){
            sen = true;
            break;
        }
        else {
            sen = false;
            }
    }
    if (mat && sen){
        location.href = "pagina.html";
    }
    else{
        document.getElementById('erro').style.display = "block";
        
    }
    
}

)
botao1.addEventListener('click', function logar(event){
    event.preventDefault();
    location.href = 'login.html';
})