function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'imagens/bebemenino.png')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criancamenino.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/jovemhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosohomem.png')
            }
                
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'imagens/bebemenina.png')
            } else if (idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criancamenina.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/jovemmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultomulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idosamulher.png')
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}