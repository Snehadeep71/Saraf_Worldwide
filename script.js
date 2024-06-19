let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});
ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});
ScrollReveal().reveal('.service-header-section h2,p',{delay:200,margin:"bottom"});
ScrollReveal().reveal('.service-header-section,p',{delay:200,margin:"right"});
ScrollReveal().reveal('.service-column',{delay:350,margin:"bottom",interval:200});
ScrollReveal().reveal('.row',{delay:400,margin:"bottom",interval:200});
// ScrollReveal().reveal('.col',{delay:450,margin:"bottom",interval:200});
// ScrollReveal().reveal('.col,.service-footer-subsection',{delay:450,margin:"bottom",interval:200});