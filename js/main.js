$(function () {
  "use strict";

  //======menu fix js======
  var navoff = $(".main_menu").offset().top;
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $(".main_menu").addClass("menu_fix");
    } else {
      $(".main_menu").removeClass("menu_fix");
    }
  });
  //=========NICE SELECT=========
  $(".select_js").niceSelect();

  //=======OFFER ITEM SLIDER======
  $(".offer_item_slider").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //*==========ISOTOPE==============
  var $grid = $(".grid").isotope({});

  $(".menu_filter").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  //active class
  $(".menu_filter button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  //=======TEAM SLIDER======
  $(".team_slider").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======DOWNLOAD SLIDER======
  $(".download_slider_item").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======COUNTER JS=======
  $(".counter").countUp();

  //=======OFFER ITEM SLIDER======
  $(".testi_slider").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //=======BRAND SLIDER======
  $(".blog_slider").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //*=======SCROLL BUTTON=======
  $(".scroll_btn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 500) {
      $(".scroll_btn").fadeIn();
    } else {
      $(".scroll_btn").fadeOut();
    }
  });

  //======= VENOBOX.JS.=========
  $(".venobox").venobox();

  //*========STICKY SIDEBAR=======
  $("#sticky_sidebar").stickit({
    top: 10,
  });

  //=======OFFER ITEM SLIDER======
  $(".related_product_slider").slick({
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
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
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

//Search function//
let yum = document.getElementById("yum");
let daily = document.getElementById("daily");
let premium = document.getElementById("premium");

const searchBar = document.getElementById("searchbar");

let yumProductsList = [];
let dailyProductsList = [];
let premiumProductsList = [];
let yumFiltered = [];
let dailyFiltered = [];
let premiumFiltered = [];
let all = [];
const search = () => {
  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredYumProducts = yumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    yumProducts(filteredYumProducts);

    const filteredDailyProducts = dailyProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    dailyProducts(filteredDailyProducts);

    const filteredPremiumProducts = premiumProductsList.filter((product) => {
      return product.title.toLowerCase().includes(searchString);
    });
    premiumProducts(filteredPremiumProducts);
  });
};
if (searchBar !== null) {
  searchBar.addEventListener("input", search);
} else {
  removeEventListener("keyup", search);
}

//Display yum items
const loadProducts = async () => {
  try {
    await fetch("./js/products.json")
      .then((response) => response.json())
      .then((data) => {
        yumProductsList = data.yum;
        dailyProductsList = data.daily;
        premiumProductsList = data.premium;
        yumFiltered = data.yum;
        dailyFiltered = data.daily;
        premiumFiltered = data.premium;
        all = [
          ...yumProductsList,
          ...dailyProductsList,
          ...premiumProductsList,
        ];
      });
    yumProducts(yumProductsList);
    dailyProducts(dailyProductsList);
    premiumProducts(premiumProductsList);
  } catch (err) {
    console.log(err);
  }
};
const yumProducts = (yumProductsList) => {
  if (yum !== null) {
    let i = 0;
    const htmlString = yumProductsList
      .map((yum) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          yum.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          yum.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >` +
          yum.title +
          `</a
                >
                <h5 class="price">` +
          yum.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          yum.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `<ul class="d-flex flex-wrap justify-content-end">
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
        );
      })
      .join("");
    yum.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Display daily items
const dailyProducts = (dailyProductsList) => {
  let i = 0;
  if (daily !== null) {
    const htmlString = dailyProductsList
      .map((daily) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          daily.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          daily.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >` +
          daily.title +
          `</a
                >
                <h5 class="price">` +
          daily.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          daily.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `<ul class="d-flex flex-wrap justify-content-end">
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
        );
      })
      .join("");
    daily.innerHTML = htmlString;
  } else {
    return null;
  }
};

////Display premium items
const premiumProducts = (premiumProductsList) => {
  if (premium !== null) {
    let i = 0;
    const htmlString = premiumProductsList
      .map((premium) => {
        return (
          `<div
            class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp "
            data-wow-duration="1s"
                        >
          <div class="menu_item">
              <div class="menu_item_img">
                <img
                  src=` +
          premium.img +
          `
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="menu_item_text">
                <a class="category" href="#">` +
          premium.category +
          `</a>
                <a
                  class="title"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#yumModal"
                  >` +
          premium.title +
          `</a
                >
                <h5 class="price">` +
          premium.price +
          `</h5>` +
          "<button class='add_to_cart' data-id=" +
          premium.id +
          " onclick='addToCart(" +
          i++ +
          ")'>lägg till     <i class='fas fa-cart-plus'></i></button>" +
          `<ul class="d-flex flex-wrap justify-content-end">
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
        );
      })
      .join("");
    premium.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Sort function
const sortingFunction = (el) => {
  const option = el.value;
  if (option === "name") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedDailyArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    const sortedPremiumArray = yumFiltered.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  } else if (option === "AL") {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  } else if (option === "l2h") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  } else if (option === "h2l") {
    const parsePrice = (x) => parseFloat(x.replace(/^\$/, "")) || 0;
    const sortedYumArray = yumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedDailyArray = dailyFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    const sortedPremiumArray = premiumFiltered
      .slice()
      .sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  } else {
    const sortedYumArray = yumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedDailyArray = dailyFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    const sortedPremiumArray = premiumFiltered.sort((a, b) =>
      a.id > b.id ? 1 : b.id > a.id ? -1 : 0
    );
    return (
      yumProducts(sortedYumArray),
      dailyProducts(sortedDailyArray),
      premiumProducts(sortedPremiumArray)
    );
  }
};

loadProducts();

// Make modal fetch data from json file

const yumModal = (yumProductsList) => {
  if (yum !== null) {
    let i = 0;
    const htmlString = yumProductsList
      .map((yum) => {
        return `<div class="cart_popup">
      <div class="modal fade" id="yumModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fal fa-times"></i>
              </button>
              <div class="cart_popup_img">
                <img
                  src="images/menu2_img.png"
                  alt="menu"
                  class="img-fluid w-100"
                />
              </div>
              <div class="cart_popup_text">
                <a href="#" class="title">Maxican Pizza Test Better</a>
                <p class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <i class="far fa-star"></i>
                  <span>(201)</span>
                </p>
                <h4 class="price">75kr</h4>
                <div class="details_extra_item">
                  <h5>Välj ett alternativ <span>(frivill)</span></h5>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="coca-cola"
                    />
                    <label class="form-check-label" for="coca-cola">
                      pepsi 33 cl <span>+ 20kr</span>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="7up"
                    />
                    <label class="form-check-label" for="7up">
                      pepsi 33 cl <span>+ 20kr</span>
                    </label>
                  </div>
                </div>

                <div class="details_quentity">
                  <h5>Välj kvantitet</h5>
                  <div
                    class="quentity_btn_area d-flex flex-wrapa align-items-center"
                  >
                    <div class="quentity_btn">
                      <button class="btn btn-danger">
                        <i class="fal fa-minus"></i>
                      </button>
                      <input type="text" placeholder="1" />
                      <button class="btn btn-success">
                        <i class="fal fa-plus"></i>
                      </button>
                    </div>
                    <h3>75kr</h3>
                  </div>
                </div>
                <ul class="details_button_area d-flex flex-wrap">
                  <li>
                    <a class="common_btn" href="#">lägg till varukorgen</a>
                  </li>
                  <li>
                    <a class="common_btn" href="menu_details.html"
                      >visa alla detaljer</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      })
      .join("");
    yum.innerHTML = htmlString;
  } else {
    return null;
  }
};

//Add products to cart and display them in cart_view.html

var cart = [];
let products = document.getElementsByClassName("menu_item");
let productId = document.querySelectorAll("[data-id]");
let product = JSON.parse(localStorage.getItem("ShoppingCart"));

function addToCart(productId) {
  for (var i = 0; i < all.length; i++) {
    if (all[i].id == productId) {
      var cartItem = null;
      for (var k = 0; k < cart.length; k++) {
        if (cart[k].all.id == all[i].id) {
          cartItem = cart[k];
        }
      }
      if (cartItem == null) {
        var cartItem = {
          product: all[i],
        };
        cart.push(cartItem);
        console.log(cart);
      }
    }
  }
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

const categories = [
  ...new Set(
    all.map((item) => {
      return item;
    })
  ),
];

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  const htmlString = cart
    .map((items) => {
      var { image, title, price } = items;
      total = total + price;
      return (
        `<tr id="cart-item">
                      <td class="pro_img">
                        <img
                          src=${image}
                          alt="product"
                          class="img-fluid w-100"
                        />
                      </td>

                      <td class="pro_name">
                        <a href="#">${title}</a>
                        <span>medium</span>
                        <p>måndag</p>
                        <p>datum: MM/DD/YY</p>
                        <p>Tid: 10-12pm</p>
                      </td>

                      <td class="pro_status">
                        <h6>${price}</h6>
                      </td>

                      <td class="pro_select">
                        <div class="quentity_btn">
                          <button class="btn btn-danger">
                            <i class="fal fa-minus"></i>
                          </button>
                          <input type="text" placeholder="1" />
                          <button class="btn btn-success">
                            <i class="fal fa-plus"></i>
                          </button>
                        </div>
                      </td>

                      <td class="pro_tk">
                        <h6>75kr</h6>
                      </td>
                      <td class="pro_icon">` +
        "<i class='fa-solid fa-trash' onclick='delElement(" +
        j++ +
        ")'></i>" +
        ` 
                      </td>
                    </tr>`
      );
    })
    .join("");
  product.innerHTML = htmlString;
}

let text = document.getElementById("text");
const onScroll = () => {
  // Get scroll value
  const scroll = document.documentElement.scrollTop;

  // If scroll value is more than 0 - means the page is scrolled, add or remove class based on that
  if (scroll > 1300) {
    text.classList.add("relative");
  } else {
    text.classList.remove("fixed");
  }
};

// Use the function
window.addEventListener("scroll", onScroll);
