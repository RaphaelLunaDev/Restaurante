$(document).ready(function(){

   $('#telefone').mask('(00) 00000-0000') /*Campo numerico é representado por '0' */

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },     
            mensagem: {
                required: true
            },
            

        },
        messages  : {
            nome : 'por favor, ensira seu nome',
            email : 'por favor, ensira seu email'
        },
        submitHandler: function(form) {  /*Cancela a animação de submit*/
            console.log(form)
        },
        invalidHandler: function(evento, validador) { /*Validação de quando o formulario der certo ou não*/
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})