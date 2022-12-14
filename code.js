window.onload = () => {
    username = document.getElementById("username");
    validando = true
    enviar = document.getElementById('enviar');
    enviar.setAttribute('disabled','');

    username.addEventListener('input', () => {
        minimo = true, mayuscula = true, minuscula = true;
        if(!RegExp(/^.{6,}$/).test(username.value)){
            document.getElementById('minimum').style.textDecoration="line-through";
            minimo = false;
        }
        else
        document.getElementById('minimum').style.textDecoration="none";
        if(!RegExp(/^.*[a-z]{1,}.*$/).test(username.value)){
            document.getElementById('lower').style.textDecoration="line-through";
            minuscula = false;
        }
        else
        document.getElementById('lower').style.textDecoration="none";
        if(!RegExp(/^.*[A-Z]{1,}.*$/).test(username.value)){
            document.getElementById('upper').style.textDecoration="line-through";
            mayuscula = false;
        }
        else
        document.getElementById('upper').style.textDecoration="none";

        if(minuscula && mayuscula && minimo){
            enviar.removeAttribute('disabled');
            enviar.style.backgroundColor = "#620f34";
        }
        else{
            enviar.style.backgroundColor = "#f5a3d1";
            enviar.setAttribute('disabled','');
        }



    });
}

