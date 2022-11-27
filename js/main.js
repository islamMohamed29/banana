$(document).ready(function () {
    $('select').niceSelect();
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}




$(".close-btn-navo").click(function () {
    $(".faded-show").hide();
});

$(".button-navo").click(function () {
    $(".faded-show").toggle();
});





$(".category .navbar-nav .nav-item .nav-link").click(function () {
    $('.category .navbar-nav .nav-item .nav-link .fa-angle-down').toggleClass("down");
})

$('#owl-carousel-one').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,

    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        600: {
            items: 1,
            dots: true,
        },
        1000: {
            items: 1,
            dots: true,
        }
    }
})

$('#owl-carousel-two').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        767: {
            items: 4
        },
        991: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})


$('#owl-carousel-seso').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})
$('#owl-carousel-saso').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        767: {
            items: 3
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

$('#owl-carousel-noso').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        767: {
            items: 3
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})



$('#owl-carousel-nolo').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        767: {
            items: 3
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

