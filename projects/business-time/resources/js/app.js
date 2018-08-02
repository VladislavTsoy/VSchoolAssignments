document.getElementById('btn-login').addEventListener('click', function(){
    document.getElementById('login-pop').style.display = 'flex'
    document.getElementById('login-pop').style.justifyContent = 'center'
    document.getElementById('login-pop').style.alignItems = 'center'
    document.getElementById('main-header').style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    document.getElementById("hero-content").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector(".btn-full").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector(".btn-ghost").style.color = 'rgba(255, 255, 255, 0.5)'
    document.getElementById("active-tab").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('.logo').style.filter = 'opacity(50%)'
})
document.getElementById('btn-login-main').addEventListener('click', function(){
    document.getElementById('login-pop').style.display = 'flex'
    document.getElementById('login-pop').style.justifyContent = 'center'
    document.getElementById('login-pop').style.alignItems = 'center'
    document.getElementById('main-header').style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    document.getElementById("hero-content").style.color = 'rgba(255, 255, 255, 0.5)'
    document.getElementById("active-tab").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector(".btn-full").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector(".btn-ghost").style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('.logo').style.filter = 'opacity(50%)'
})

document.getElementById('login-close').addEventListener('click', function(){
    document.getElementById('login-pop').style.display = 'none'
    document.getElementById('main-header').style.backgroundColor = 'rgba(0, 0, 0, 0.707)';
    document.getElementById("hero-content").style.color = 'rgba(255, 255, 255)'
    document.querySelector(".btn-full").style.color = '#fff'
    document.querySelector(".btn-ghost").style.color = '#fff'
    document.getElementById("active-tab").style.color = 'rgba(255, 255, 255)'
    document.querySelector('.logo').style.filter = 'none'
})