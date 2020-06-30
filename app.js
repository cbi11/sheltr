const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >=1){
        header.style.boxShadow = "0px 2px 3px 0 rgba(0,0,0,.2)"
    }else{
        header.style.boxShadow = ""
    }
};

document.getElementById('burger').addEventListener('click', function(){
    document.getElementById('mobile_menu').style.width = '100%';
    document.getElementById('mobile_menu').style.position = 'fixed'
})
document.getElementById('cls').addEventListener('click', function(){
    document.getElementById('mobile_menu').style.width = '0'
})
