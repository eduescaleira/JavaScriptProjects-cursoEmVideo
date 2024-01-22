function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = Number(ano) - Number(formularioAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
                genero = "Homem"
                if (idade >=0 && idade <10) {
                    img.setAttribute('src', 'bebeH.png')
                } else if (idade < 45) {
                    img.setAttribute('src', 'adultoH.png')
                } else {
                    img.setAttribute('src', 'idoso.png')
                }
            } else if (fsex[1].checked){
                genero = "Mulher"
                if (idade >=0 && idade <10) {
                    img.setAttribute('src', 'bebeM.png')
                } else if (idade < 45) {
                    img.setAttribute('src', 'adultoM.png')
                } else  {
                    img.setAttribute('src', 'idosa.png')
                }
            }
              // Criar um contêiner para o texto e a imagem
              var container = document.createElement('div');
              container.style.textAlign = 'center';
      
              // Adicionar o texto ao contêiner
              var texto = document.createElement('p');
              texto.innerHTML = `Detectamos ${genero} com ${idade} anos`;
              container.appendChild(texto);
      
              // Adicionar a imagem ao contêiner
              container.appendChild(img);
      
              // Adicionar o contêiner à div de resultado
              res.innerHTML = '';
              res.appendChild(container);
          }

}