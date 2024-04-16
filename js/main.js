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

function mergeThreeSortedArrays(
  yumProductsList,
  dailyProductsList,
  premiumProductsList
) {
  let D = [];

  // Insert all elements from A into D
  for (let i = 0; i < yumProductsList.length; i++) {
    D.push(A[i]);
  }

  // Insert all elements from B into D
  for (let i = 0; i < dailyProductsList.length; i++) {
    D.push(B[i]);
  }

  // Insert all elements from C into D
  for (let i = 0; i < premiumProductsList.length; i++) {
    D.push(C[i]);
  }

  // Sort the merged array in ascending order
  D.sort((a, b) => a - b);

  return D;
}

function main() {
  // Merge three sorted arrays
  const D = mergeThreeSortedArrays(A, B, C);

  // Print the merged and sorted array
  console.log(D.join(" "));
}

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
        a.push(data.yum, data.daily, data.premium);
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
          "<a class='add_to_cart' onclick='addToCart(" +
          i++ +
          ")'>lägg till   <i class='fas fa-cart-plus'></i></a>" +
          `
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
          "<a class='add_to_cart' onclick='addToCart(" +
          i++ +
          ")'>lägg till  <i class='fas fa-cart-plus'></i></a>" +
          `
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

//Add products to cart and display them in cart_view.html

console.log(a);
var listCart = [];

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart(a) {
  let j = 0;
  let subtotal = 0;
  console.log(document.getElementById("count"));
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Din varukorg är tom";
    document.getElementById("subtotal").innerHTML = "" + 0 + ".00 kr";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        subtotal = subtotal + price;
        document.getElementById("subtotal").innerHTML =
          "" + subtotal + ".00 kr";
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
          "<i class='far fa-trash-alt' onclick='delElement(" +
          j++ +
          ")'></i></div>"`
                      </td>
                    </tr>`
        );
      })
      .join("");
  }
}
