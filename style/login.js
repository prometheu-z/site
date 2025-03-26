

let botao= document.getElementById('btnlogar');
let botao1= document.getElementById('btnlogar1');

botao.addEventListener('click', function logar(event){
    event.preventDefault();

    let pegmatricula = document.getElementById('Matricula').value.toUpperCase().replace("TN", "");
    let pegaano = document.getElementById('ano').value;
    let pegastyle = document.querySelector('.inputbox');
    let vallidalogin = false;

    for (i in usuarios) {
        if (pegmatricula == usuarios[i].matricula && pegaano == usuarios[i].ano){
            vallidalogin = true;
            break;
        }
        else{
            vallidalogin = false;
            break;
        }
    }
    
    if (vallidalogin == true){
        location.href = 'made-senha.html';
    }
    else{
        document.getElementById('erro').style.display = 'block';
    }

})


    
    