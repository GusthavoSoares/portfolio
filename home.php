<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,max-scale=1.0">
    <meta name="author" content="Gusthavo Soares">
    <meta name="keywords" content="HTML5,CSS3,jQuery,Github, portfolio, desenvolvimento web">
    <meta name="description" content="Este é meu portfólio utilizando CSS3, HTML5, Font Awesome, jQuery e JqueryUI, além de JS">
    <title>Gusthavo Soares - Portfólio</title>
    
</head>
<style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'arial';
    }

    body{
        background:rgb(235,235,235);
    }
    .menu{
        background-color:rgb(14,14,14);
        
    }

    .center{
        max-width:2000px;
        padding:0 2%;
        margin: 0 auto;
    }

    .clear{
        clear:both;
    }

    .menu__img{
        float:left;
       margin:5px 0;
    }
    .menu__text{
        display:inline-flex;
        width:50%;
        padding:20px 20px;
        
    }
    .menu__text h1{
        font-size:20px;
        color:white;
        
    }
    .menu__img img{
        max-width:55px;
        width:100%;
        border-radius:100px;
        border:2px solid white;
    }
    .menu__links{
        float:right;
        margin-top:20px;
    }
    .menu__links a {
        text-decoration:none;
        text-align:center;
        font-size:20px;
        padding: 0 10px;
        color:white;
        
        
    }
    .menu__links a:hover{
        color:rgb(100,100,100);
        transition:0.3s;
    }

    .menu__mobile, .menu__mobile-wrap{
        display:none;
    }

    @media screen and (max-width:780px){
    .menu{
        position:relative;
    }
        .menu__links, .menu__links a{
            display:none;
        }
        .menu__text{
        padding:25px 10px;
        margin-right:2px;
        
    }
    .menu__text h1{
        
        font-size:13px;
    
    }
    .menu__mobile{
        display:block;
        float:right;
        padding:10px;
    }
    .menu__mobile i{
        color:white;
        padding:14px;
        font-size:18px;

    }
    .menu__mobile-wrap{
        position:absolute;
        height:160px;
        width:100%;
        top:100%;
        left:50%;
        transform:translate(-50%);
        border:2px solid white;
        background:black;
        border-radius:10px;
        
    }
    .menu__mobile-wrap a{
        display:block;
        border:2px solid white;
        text-decoration:none;
        font-size:20px;
        padding: 0 5px;
        margin:20px 30px;
        text-align:center;
        color:white;
        border-radius:20px;
    }
    .menu__mobile-wrap a:hover{
        background:rgb(50,50,50);
        transition:0.3s;
    }
}



 </style>

<body>
<header class="menu">
    <div class="center">
    <div class="menu__img">
        <img src="./img/gust.jpeg" alt="Foto de Gusthavo Soares">
        
    </div><!--menu__img-->
    <div class="menu__text">
    <h1>Gusthavo Lourenço Rios Soares</h1>
</div> <!--menu__text-->

    <div class="menu__links">
        <a href='home.php'>Home</a>
        <a href='sobre.php'>Sobre</a>
        <a href='contato.php'>Contato</a>
    </div><!--menu__links-->

    <div class="menu__mobile">
    <i class ="fa-solid fa-bars" id="menu-mobile"></i>
    </div>
    <div class="menu__mobile-wrap">
    <a href='home.php'>Home</a>
    <a href='sobre.php'>Sobre</a>
    <a href='contato.php'>Contato</a>
    </div>
    </div><!--center-->
    <div class="clear"></div>
</header>













<script src="https://kit.fontawesome.com/df85906e6a.js" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
<script>
    var mobile = $('.menu__mobile i')
mobile.click(function(){
    mobile_menu = $('.menu__mobile-wrap')
    mobile_menu.fadeToggle()
})

</script>
</body>
</html>