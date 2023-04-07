var who = $('.who')
var professional = $('.professional')
var skills = $('.skills')
var project = $('.projects')

var sec1 = $('.quem-sou')
var sec2 = $('.profissional')
var sec3 = $('.habilidades')
var sec4 = $('.projetos')

 
var mobile = $('.menu__mobile i')


if(mobile.css('display','block')){
    mobile.click(function(){
        mobile_menu = $('.menu__mobile-wrap')
        mobile_menu.fadeToggle()
        })
}



function pararClick(){
    document.querySelector('#link').click(function(event){
        event.preventDefault()
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


