document.addEventListener("DOMContentLoaded", function () {

    const productFirst = document.querySelector('.product-first');
    const productSecond = document.querySelector('.product-second');

    productFirst.addEventListener('mouseover', function () {
        const strip = this.firstElementChild;
        strip.style.display = 'none';
    });
    productFirst.addEventListener('mouseout', function () {
        const strip = this.firstElementChild;
        strip.style.display = "block";
    });
    productSecond.addEventListener('mouseover', function () {
        const strip = this.firstElementChild;
        strip.style.display = 'none';
    });
    productSecond.addEventListener('mouseout', function () {
        const strip = this.firstElementChild;
        strip.style.display = "block";
    });

//menu
    const li = document.querySelector('header ul li:first-child');
    const dropdown = document.querySelector('.around-dropdown');
    dropdown.style.display = 'none';
    li.addEventListener('mouseover', function () {
        dropdown.style.display = "block";
    });
    li.addEventListener('mouseout', function () {
        dropdown.style.display = "none";
    });
// mySlider
    const carousel = document.querySelector(".carousel");
    const leftBtn = document.querySelector(".carousel .container > span:first-child");
    console.log(leftBtn);
    const rightBtn = document.querySelector(".carousel .container > span:last-child");
    console.log(rightBtn);
    leftBtn.style.opacity = '0';

    carousel.addEventListener('mouseenter', function () {
        leftBtn.style.opacity = '1';
        rightBtn.style.opacity = '1';
    });
    carousel.addEventListener('mouseleave', function () {
        leftBtn.style.opacity = '0';
        rightBtn.style.opacity = '0';
    });

    const slides = document.querySelectorAll(".container .banner-slide");

    let counter = 0;

    leftBtn.addEventListener('click', function () {
        counter--;
        console.log(counter);
        for (const el of slides) {
            el.classList.remove("banner-slide-active");
        }
        if (counter < 0 ) {
            counter = slides.length - 1;

        }
        slides[counter].classList.add("banner-slide-active");

    });
    rightBtn.addEventListener('click', function () {
        console.log(slides);
        counter++;
        console.log(counter);
        for (const el of slides) {
            el.classList.remove("banner-slide-active");
        }
        if (counter > slides.length - 1) {
            counter = 0;
        }
        slides[counter].classList.add("banner-slide-active");
    });


    //slider
    function Slider(selector, animationTime = 2000) {
        this.animationTime = animationTime;
        this.selector = selector;
        this.banner = document.querySelector(selector);
        // console.log(this.banner);
        this.slides = this.banner.querySelectorAll(".banner-slide");
        this.current = 0;
        this.time = null; //setTimout

        this.bindButtons();

        this.time = window.setTimeout(
            function () {
                this.nextSlide();
            }.bind(this),
            this.animationTime
        );
    }

    Slider.prototype.bindButtons = function () {
        this.btnPrev = document.createElement("button");
        this.btnPrev.classList.add("banner-prev");
        this.btnPrev.innerHTML = '<i class="fa fa-angle-left"></i>';
        // console.log(this.banner);
        this.banner.appendChild(this.btnPrev);

        this.btnNext = document.createElement("button");
        this.btnNext.classList.add("banner-next");
        this.btnNext.innerHTML = '<i class="fa fa-angle-right"></i>';
        this.banner.appendChild(this.btnNext);
        this.btnNext.addEventListener(
            "click",
            function () {
                this.nextSlide();
            }.bind(this)
        );

        this.btnPrev.addEventListener(
            "click",
            function () {
                this.prevSlide();
            }.bind(this)
        );
    };

    Slider.prototype.changeSlide = function (nr) {
        for (const el of this.slides) {
            el.classList.remove("banner-slide-active");
        }
        this.current = nr;
        this.slides[this.current].classList.add("banner-slide-active");

        clearTimeout(this.time);
        this.time = window.setTimeout(
            function () {
                this.nextSlide();
            }.bind(this),
            this.animationTime
        );
    };

    Slider.prototype.nextSlide = function () {
        this.current++;
        if (this.current > this.slides.length - 1) {
            this.current = 0;
        }
        this.changeSlide(this.current);
    };
    Slider.prototype.prevSlide = function () {
        this.current--;
        if (this.current <= 0) {
            this.current = this.slides.length - 1;
        }
        this.changeSlide(this.current);
    };

    document.addEventListener("DOMContentLoaded", function () {
        const b1 = new Slider("#banner1");
        const b2 = new Slider("#banner2", 1000);
    });

    //koniec slidera

});