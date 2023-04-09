//VueJS







//Jquery + JS
$(function () {
    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    var delay = 3000;

    initSlider()

    function initSlider(){
        $('.slider img').eq(0).fadeIn();
         setInterval(function(){
             alternarSlider()
         },delay)
             
         }
     
     function alternarSlider(){
         $('.slider img').eq(indiceAtual).fadeOut()
         indiceAtual+=1
         if(indiceAtual == indiceMaximo){
         indiceAtual = 0;
         }
         $('.slider img').eq(indiceAtual).fadeIn()
     }




    var right = $('.side-info__flex-right')
    var who = $('.who')
    var div_btn = $('.btn-click')
    var professional = $('.professional')
    var skills = $('.skills')
    var project = $('.projects')
    var btn = $('.btn-modal')
    var sec1 = $('.quem-sou')
    var sec2 = $('.profissional')
    var sec3 = $('.habilidades')
    var sec4 = $('.projetos')
    var area = $('.modal-area')
    var close = $('.close')
    var shadow = $('.shadow')
    var body = $('body')
    var mobile = $('.menu__mobile i')

    ativarModal()







    if (mobile.css('display', 'block')) {
        mobile.click(function () {
            mobile_menu = $('.menu__mobile-wrap')
            mobile_menu.fadeToggle()
        })
    }

    function ativarModal() {
        btn.click(function () {
            if (area.css('display', 'none')) {
                close.css('display', 'block')
                area.css('display', 'grid')
                shadow.css('display', 'inline-block')
                right.css('overflow-y', 'hidden')
                close.click(function () {
                    area.css('display', 'none')
                    if (shadow.css('display', 'block')) {
                        shadow.fadeOut()
                    }
                    if (right.css('overflow-y', 'hidden')) {
                        right.css('overflow-y', 'auto');
                    }
                    if (shadow.css('display', 'block')) { close.fadeOut() }

                })
            }

        })
    }





    who.click(function () {
        sec1.css('display', 'block')
        sec2.css('display', 'none')
        sec3.css('display', 'none')
        sec4.css('display', 'none')
    })
    professional.click(function () {
        sec1.css('display', 'none')
        sec2.css('display', 'block')
        sec3.css('display', 'none')
        sec4.css('display', 'none')
    })
    skills.click(function () {
        sec1.css('display', 'none')
        sec2.css('display', 'none')
        sec3.css('display', 'block')
        sec4.css('display', 'none')
    })
    project.click(function () {
        sec1.css('display', 'none')
        sec2.css('display', 'none')
        sec3.css('display', 'none')
        sec4.css('display', 'block')
    })

    // var input2 = document.getElementById('search-input')
    // input2.addEventListener('keyup', pesquisar())


   
   
    
})

