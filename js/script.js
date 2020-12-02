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

let show_work = function(){
    let show = document.querySelectorAll('.work-content')
    for (let i = 0 ; i< show.length; i++){
        show[i].classList.remove('hide-work')
    }
}

let hide_work = function(a){
    let hide = document.querySelectorAll(a)
    for (let i = 0 ; i< hide.length; i++){
        hide[i].classList.add('hide-work')
    }
}

document.getElementById('web').addEventListener('click',function(e){
    show_work()
    hide_work('.work-content.logo')
})

document.getElementById('logo').addEventListener('click',function(e){
    show_work()
    hide_work('.work-content.web')
    
})

document.getElementById('all').addEventListener('click',function(e){
    show_work()
})