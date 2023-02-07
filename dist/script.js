var numSecreto = parseInt(Math.random() * 101);
var numTentativas = 5;

resultado = document.getElementById('resultado');
tentativas = document.getElementById('tentativas');
spanTentativas = document.getElementById('spanTentativas');
btnAdivinhar = document.getElementById('adivinhar');
btnNovoJogo = document.getElementById('novoJogo');
tentativasRestantes = document.getElementById('tentativasRestantes');
btnDica = document.getElementById('dica');

function adivinhar(){
  var palpite = parseInt(document.getElementById('palpite').value);
  
  if (palpite === numSecreto){
    resultado.textContent = 'Você ganhou';
    resultado.style.backgroundColor = 'green';
    
    btnNovoJogo.style.display = 'inline';
    btnAdivinhar.disabled = true;
    btnDica.style.display = 'none';
  }
  else{
    if(numTentativas > 1){
      spanTentativas.style.display = 'inline';
      tentativas.textContent += `${palpite}, `;
      resultado.textContent = 'Errado. Tente de novo!';
   
      numTentativas --;
      tentativasRestantes.textContent = `Restam ${numTentativas} tentativas`;
      
      btnDica.style.display = 'inline';
    }
    else{
      tentativas.textContent += `${palpite}.`;
      tentativasRestantes.textContent = '';
      resultado.textContent = 'Acabaram as tentativas!';
      resultado.style.backgroundColor = 'red';
      
      btnAdivinhar.disabled = true;
      btnNovoJogo.style.display = 'inline';
      btnDica.style.display = 'none';
    }
  }   
}

function novoJogo(){
  location.reload(true); 
}

function dica(){
  var palpite = parseInt(document.getElementById('palpite').value);
  
  if(palpite < numSecreto){
     alert('O número chutado é muito baixo');
  }else{
     alert('O número chutado é muito alto');
  }
}

console.log(numSecreto);