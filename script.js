function verificar(){
    var agora = new Date();
    var ano = agora.getFullYear();
    var fano = window.document.querySelector('input#txtano');
    var res = window.document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERRO] Verifique os dados e tente novamente.`);
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            gênero = 'um Homem';
                if(idade >= 0 && idade < 5){
                    //bebe
                    img.setAttribute('src', 'fotos/foto-bebe-m.png');
                } else if(idade < 10){
                    //criança
                    img.setAttribute('src', 'fotos/foto-crianca-m.png');
                } else if(idade < 28){
                    //Jovem
                    img.setAttribute('src', 'fotos/foto-jovem-m.png');
                } else if(idade < 60){
                    //Adulto
                    img.setAttribute('src' , 'fotos/foto-homem-m.png');
                } else{
                    //idoso
                    img.setAttribute('src', 'fotos/foto-idoso-m.png');
                }
        } else if(fsex[1].checked){
            gênero = 'uma Mulher'
            if(idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'fotos/foto-bebe-f.png')
            } else if(idade < 10){
                //criança
                img.setAttribute('src', 'fotos/foto-crianca-f.png')
            } else if(idade < 28){
                //Jovem
                img.setAttribute('src', 'fotos/foto-jovem-f.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'fotos/foto-mulher-f.png')
            } else{
                //idoso
                img.setAttribute('src', 'fotos/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}