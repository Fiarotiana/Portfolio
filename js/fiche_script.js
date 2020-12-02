(function(){
    let tabs = document.querySelectorAll('.tabs a')

    let show = function(a){
        let li = a.parentNode
        let row = a.parentNode.parentNode
        let div = a.parentNode.parentNode.parentNode.parentNode
       
        if( li.classList.contains('active')){
            return false
        }

        //remove class active on menu's chidreens
        div.querySelector('.tabs .active').classList.remove('active')

        //add class active to li
        li.classList.add('active')


        //remove class active on tab-content
        div.querySelector('.tab-content.active').classList.remove('active')

        //add class active on the href's active li
        div.querySelector(a.getAttribute('href')).classList.add('active')
    }

    for (let i = 0 ; i< tabs.length; i++){
        tabs[i].addEventListener('click',function(e){
            show(this)
        })
    }

    let hash = window.location.hash
    let a = document.querySelector('a[href="'+hash+'"]')
    if (a!==null && !a.classList.contains('active')){
        show(a)
    }
})()