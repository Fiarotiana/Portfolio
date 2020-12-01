(function(){
    let close_contact = document.querySelectorAll('.close-contact')
    for (let i = 0 ; i< close_contact.length; i++){
        close_contact[i].addEventListener('click',function(e){
            document.querySelector('.page-wrapper').classList.remove('toggled')
        })
    }

    let show_contact = document.querySelectorAll('.show-contact')
    for(let j=0 ; j< show_contact.length ; j++){
        show_contact[j].addEventListener('click',function(e){
            document.querySelector('.page-wrapper').classList.add('toggled')
        })
    }
})()

document.getElementById('web').addEventListener('click',function(e){
    let show = document.querySelectorAll('.work-content')
    for (let i = 0 ; i< show.length; i++){
        show[i].classList.remove('hide-work')
    }

    let hide_logo = document.querySelectorAll('.work-content.logo')
    for (let i = 0 ; i< hide_logo.length; i++){
        hide_logo[i].classList.add('hide-work')
    }
    
})

document.getElementById('logo').addEventListener('click',function(e){
    let show = document.querySelectorAll('.work-content')
    for (let i = 0 ; i< show.length; i++){
        show[i].classList.remove("hide-work")
    }

    let hide_web = document.querySelectorAll('.work-content.web')
    for (let i = 0 ; i< hide_web.length; i++){
        hide_web[i].classList.add("hide-work")
    }
    
})

document.getElementById('all').addEventListener('click',function(e){
    let show = document.querySelectorAll('.work-content')
    for (let i = 0 ; i< show.length; i++){
        show[i].classList.remove("hide-work")
    }
})