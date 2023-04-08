$(function(){


    // TODO = Fazer uma função  para que a altura seja pega depois de um certo tempo e após isso, seja verificada para caso o usuário tente redimensionar a tela, o modal fechar automaticamente
var skills = ['html','css', 'js', 'node','php', 'agile', 'law','english','japanese', 'portuguese','resiliense', 'inteligence','oratory','office' ]
   

    
    
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
/*Pegar altura com js puro
var altura = document.documentElement.clientHeight
    var largura = document.documentElement.clientWidth*/
ativarModal()

    


    
function verificarTamanho(){
    
   /*Tentativa de função para verificar altura da
   setTimeout(function(){
    var largura = body.innerWidth();
    if(largura > 980 && shadow.css('display','block') && btn.css('display', 'none') ){
        shadow.css('display', 'none')
        close.css('display', 'none')
        area.css('display', 'none')
        body.css('overflow', 'auto')
        right.css('overflow-y','auto')
        div_btn.css('display', 'block')
        btn.css('display', 'block')
        alert('Largura verificada!')
    }else if(largura < 980){
        
        alert('Ocorreu um erro!')
    }
   },5000)*/
}

if(mobile.css('display','block')){
    mobile.click(function(){
        mobile_menu = $('.menu__mobile-wrap')
        mobile_menu.fadeToggle()
        })
}

function ativarModal(){
    btn.click(function(){
        if(area.css('display','none')){
        close.css('display','block')
        area.css('display','grid')
        shadow.css('display','inline-block')
        right.css('overflow-y','hidden')
        close.click(function(){
            area.css('display','none')
            if(shadow.css('display','block')){
            shadow.fadeOut() }
            if(right.css('overflow-y','hidden')){
            right.css('overflow-y','auto');
             }
            if(shadow.css('display','block')){close.fadeOut()}
            
        })
        }
        
    })
}
     




who.click(function(){
    sec1.css('display','block')
    sec2.css('display','none')
    sec3.css('display','none')
    sec4.css('display','none')
})
professional.click(function(){
    sec1.css('display','none')
    sec2.css('display','block')
    sec3.css('display','none')
    sec4.css('display','none')
})
skills.click(function(){
    sec1.css('display','none')
    sec2.css('display','none')
    sec3.css('display','block')
    sec4.css('display','none')
})
project.click(function(){
    sec1.css('display','none')
    sec2.css('display','none')
    sec3.css('display','none')
    sec4.css('display','block')
})
function pesquisar(){
    
}

})

