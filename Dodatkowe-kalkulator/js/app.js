document.addEventListener("DOMContentLoaded", function () {
//dodatkowa funkcjonalnosc
    const transport = document.querySelector('#transport');
    const transoportOutput = document.querySelector('.transport');
    let chairPrice = 0;
    const transportValue = document.querySelector('.transport.value');
    const sum = document.querySelector('.sum strong');
    const arrows = document.querySelectorAll(".list_arrow");
    const check = document.querySelector("#transport");
    const title = document.querySelector('.title');
    const titleValue= document.querySelector('.title.value');
    const color = document.querySelector('.color');
    const colorValue = document.querySelector('.color.value');
    const pattern = document.querySelector('.pattern');
    const patternValue = document.querySelector('.pattern.value');


    for (const el of arrows) {

        el.nextElementSibling.style.display = "none";
        el.addEventListener('click', function (e) {
            const ul = el.nextElementSibling;
            const listEl = ul.querySelectorAll('li');
            for (const li of listEl) {
                li.addEventListener('click', function (e) {
                    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling);
                    // console.log(e.target.innerText);
                    const value = e.target.innerText;
                    const valueOutput = e.target.parentElement.previousElementSibling.previousElementSibling;
                    valueOutput.innerText = value;
                    valueOutput.style.color = "black";
                    e.target.parentElement.style.display = "none";
                    if (el.id === "forKind"){
                        console.log('testtest');
                        console.log(el);
                        title.innerText = value;
                        titleValue.innerText= e.target.dataset.price;
                        //chairPrice = Number(chairPrice) + Number(e.target.dataset.price);
                        let tranValueToAdd = 0;
                        if(transport.checked) {
                            tranValueToAdd = Number(transport.dataset.transportPrice);
                        }
                        chairPrice = Number(e.target.dataset.price) + tranValueToAdd;
                        sum.innerText = Number(chairPrice);
                    }
                    // if(el.id === "forColor") {
                    //     console.log(value);
                    //     color.innerText = "Kolor: ";
                    //     colorValue.innerText = value;
                    // }
                    if (el.id === "forMaterial") {
                        console.log(value);
                        console.log('material');
                        pattern.innerText = value;
                        patternValue.innerText = 0;
                    }

                })
            }

            if (e.target.nextElementSibling.style.display === "none") {
                e.target.nextElementSibling.style.display = "block";


            } else if (e.target.nextElementSibling.style.display === "block") {

                e.target.nextElementSibling.style.display = "none";
            }


        });
    }
    check.addEventListener('change', function (e) {
        console.log(e.target.checked);
        if (e.target.checked) {
            transoportOutput.innerText = "Transport";
            console.log(transport.dataset);
            transportValue.innerHTML = transport.dataset.transportPrice;
            chairPrice = Number(chairPrice) + Number( transport.dataset.transportPrice);
            sum.innerText = Number(chairPrice);

        } else {
            transoportOutput.innerText = "";
            transportValue.innerHTML = "";
            chairPrice = Number(chairPrice) - Number(transport.dataset.transportPrice);
            sum.innerText = Number(chairPrice);
        }
    });


});