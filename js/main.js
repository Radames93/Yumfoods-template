$(function () {
    "use strict";

    //======menu fix js======
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
    //=========NICE SELECT=========
    $('.select_js').niceSelect();


    //=======OFFER ITEM SLIDER======
    $('.offer_item_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //*==========ISOTOPE==============
    var $grid = $('.grid').isotope({});

    $('.menu_filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //active class
    $('.menu_filter button').on("click", function (event) {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    //=======TEAM SLIDER======
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=======DOWNLOAD SLIDER======
    $('.download_slider_item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=======COUNTER JS=======
    $('.counter').countUp();


    //=======OFFER ITEM SLIDER======
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=======BRAND SLIDER======
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //*=======SCROLL BUTTON=======
    $('.scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            $('.scroll_btn').fadeIn();
        } else {
            $('.scroll_btn').fadeOut();
        }
    });


    //======= VENOBOX.JS.=========
    $('.venobox').venobox();


    //*========STICKY SIDEBAR=======
    $("#sticky_sidebar").stickit({
        top: 10,
    })


    //=======OFFER ITEM SLIDER======
    $('.related_product_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-long-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======wow js=======
    new WOW().init();


    //=======PRODUCT DETAILS SLIDER======
    if ($("#exzoom").length > 0) {
        $("#exzoom").exzoom({
            autoPlay: true,
        });
    }

    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });


});

let yum = document.getElementById("yum")
let daily = document.getElementById("daily")
let premium = document.getElementById("premium")

const searchBar = document.getElementById('searchbar')

let yumProductsList = [];
let dailyProductsList = [];
let premiumProductsList = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase()
    const filteredYumProducts = yumProductsList.filter((product) => { 
         return (product.title.toLowerCase().includes(searchString));
    })
    yumProducts(filteredYumProducts)

    const filteredDailyProducts = dailyProductsList.filter((product) => { 
         return (product.title.toLowerCase().includes(searchString));
    })
    dailyProducts(filteredDailyProducts)

    const filteredPremiumProducts = premiumProductsList.filter((product) => { 
         return (product.title.toLowerCase().includes(searchString));
    })
    premiumProducts(filteredPremiumProducts)
});


const loadProducts = async () => {
    try {
        await fetch("./js/products.json")
            .then((response) => response.json())
            .then((data) => {
                yumProductsList = data.yum
                dailyProductsList = data.daily
                premiumProductsList = data.premium
            })
        yumProducts(yumProductsList)
        dailyProducts(dailyProductsList)
        premiumProducts(premiumProductsList)
    } catch (err) {
        console.log(err)
    }
}
const yumProducts = (yumProductsList) => {
        if (yum !== null) {
        const htmlString = yumProductsList.map((yum) => {
            return `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=`+ yum.img + `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">`+ yum.category + `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >`+ yum.title + `</a
                >
                <h5 class="price">`+ yum.price + `</h5>
                <a class="add_to_cart" href="#">lägg till varukorgen</a>
                <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>`
        }).join('');
        yum.innerHTML = htmlString;
        } else {
        return null
    }
}

const dailyProducts = (dailyProductsList) => {
    if (daily !== null) {
        const htmlString = dailyProductsList.map((daily) => {
            return `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=`+ daily.img + `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">`+ daily.category + `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >`+ daily.title + `</a
                >
                <h5 class="price">`+ daily.price + `</h5>
                <a class="add_to_cart" href="#">lägg till varukorgen</a>
                <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>`
        }).join('');
        daily.innerHTML = htmlString;
    } else {
        return null
    }
}

const premiumProducts = (premiumProductsList) => {
    if (premium !== null) {
        const htmlString = premiumProductsList.map((premium) => {
            return `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=`+ premium.img + `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">`+ premium.category + `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >`+ premium.title + `</a
                >
                <h5 class="price">`+ premium.price + `</h5>
                <a class="add_to_cart" href="#">lägg till varukorgen</a>
                <ul class="d-flex flex-wrap justify-content-end">
                  <li>
                    <a href="#"><i class="fal fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="menu_details.html"><i class="far fa-eye"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>`
        }).join('');
        premium.innerHTML = htmlString;
    } else {
        return null
    }
}


loadProducts();



