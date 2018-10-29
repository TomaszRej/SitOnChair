document.addEventListener("DOMContentLoaded", function () {
    const productFirst = document.querySelector('.product-first');
    const productSecond = document.querySelector('.product-second');

    productFirst.addEventListener('mouseover', function () {
        const strip = this.firstElementChild;
        strip.style.display = 'none';
        // console.log('working');
    });
    productFirst.addEventListener('mouseout', function () {
        const strip = this.firstElementChild;
        strip.style.display = "block";
    });
    productSecond.addEventListener('mouseover', function () {
        const strip = this.firstElementChild;
        strip.style.display = 'none';
        // console.log('working');
    });
    productSecond.addEventListener('mouseout', function () {
        const strip = this.firstElementChild;
        strip.style.display = "block";
    });


    const li = document.querySelector('header ul li:first-child');
    const dropdown = document.querySelector('.around-dropdown');
    console.log(dropdown);
    dropdown.style.display = 'none';

    //
    li.addEventListener('mouseover', function () {
        dropdown.style.display = "block";
    });
    li.addEventListener('mouseout', function () {

        dropdown.style.display = "none";



    });


});