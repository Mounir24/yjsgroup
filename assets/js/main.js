// loader Animation
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-anim');
    loader.style.display = "none";
})




$(document).ready(function () {
    // setTimeout()

    // $('#error-message').addClass('d-none');

    setTimeout(function () {
        $("#error-message").addClass("d-none");
    }, 5000);
});

// START AOS INITITAING 

AOS.init();

// DOM MANUPLIATION
$(document).ready(function () {
    if (window.screen.availWidth <= 575) {
        var x = document.getElementById("myDIV");
        x.style.display = "none";
    } else {
        var x = document.getElementById("myDIV");
        x.style.display = "block";
    }
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var btn = $("#button");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});


// SLICK ANIMATION INITIATION 
$(".testimonial-slider").slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
        },
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});

$(".slider-con").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,

    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        },
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    ],
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $("header").addClass("fixed-header");

        $("header div").addClass("visible-title");
    } else {
        $("header").removeClass("fixed-header");

        $("header div").removeClass("visible-title");
    }
});

let modalId = $("#image-gallery");

$(document).ready(function () {
    loadGallery(true, "a.thumbnail");

    //This function disables buttons when needed

    function disableButtons(counter_max, counter_current) {
        $("#show-previous-image, #show-next-image").show();

        if (counter_max === counter_current) {
            $("#show-next-image").hide();
        } else if (counter_current === 1) {
            $("#show-previous-image").hide();
        }
    }

    /**

             *

             * @param  setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.

             * @param  setClickAttr  Sets the attribute for the click handler.

             */

    function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;

        $("#show-next-image, #show-previous-image").click(function () {
            if ($(this).attr("id") === "show-previous-image") {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');

            updateGallery(selector);
        });

        function updateGallery(selector) {
            let $sel = selector;

            current_image = $sel.data("image-id");

            $("#image-gallery-title").text($sel.data("title"));

            $("#image-gallery-image").attr("src", $sel.data("image"));

            disableButtons(counter, $sel.data("image-id"));
        }

        if (setIDs == true) {
            $("[data-image-id]").each(function () {
                counter++;

                $(this).attr("data-image-id", counter);
            });
        }

        $(setClickAttr).on("click", function () {
            updateGallery($(this));
        });
    }
});

// build key actions

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            if (
                (modalId.data("bs.modal") || {})._isShown &&
                $("#show-previous-image").is(":visible")
            ) {
                $("#show-previous-image").click();
            }

            break;

        case 39: // right
            if (
                (modalId.data("bs.modal") || {})._isShown &&
                $("#show-next-image").is(":visible")
            ) {
                $("#show-next-image").click();
            }

            break;

        default:
            return; // exit this handler for other keys
    }

    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$('.carousel').carousel({
    interval: 1000 * 2
});


// GOOGLE MAPS 
function initAutocomplete() {
    var position = new google.maps.LatLng(
        30.4031786, -9.5307222,
    );

    var map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 17,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: "roadmap",
        styles: [{
            elementType: "geometry",
            stylers: [{
                color: "#ffffff",
            },],
        },
        {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off",
            },],
        },
        {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161",
            },],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#f5f5f5",
            },],
        },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee",
            },
            {
                visibility: "off",
            },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#bdbdbd",
            },],
        },
        {
            featureType: "poi",
            stylers: [{
                visibility: "off",
            },],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee",
            },],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575",
            },],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#e5e5e5",
            },],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e",
            },],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee",
            },
            {
                visibility: "on",
            },
            ],
        },
        {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off",
            },],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#757575",
            },
            {
                visibility: "on",
            },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#e2e2e2",
            },
            {
                visibility: "on",
            },
            ],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#616161",
            },],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e",
            },],
        },
        {
            featureType: "transit",
            stylers: [{
                visibility: "off",
            },],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee",
            },],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#c9c9c9",
            },],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9e9e9e",
            },],
        },
        ],
    });
    var marker = new google.maps.Marker({
        position: position,
        /*icon: `https://royalsky.com/assets/front/images/contact-map.png`,*/
        icon: "/assets/img/yjs-favicon.png",
        map: map,
        draggable: false,
    });
    map.setCenter(
        new google.maps.LatLng(
            map.getCenter().lat(),
            map.getCenter().lng() - 0.1,
        ),
    );
    var str = "YJS group Office, Morocco , Agadir , Tilila ";
    var infowindow = new google.maps.InfoWindow({
        content: str,
    });

    infowindow.open(map, marker)
}


$(document).ready(function () {
    $(".feedbackRadio").click(function () {
        $(".feedbackName").empty();

        $(".feedbackName").append($(this).parent("label").text());
    });

    $("#contact-form").validate();
});


function openModel($video) {
    console.log("Hello");

    let model = $("#video_modal");

    var videoPath = window.Laravel.baseUrl + $video.video_link;

    var videoPoster = window.Laravel.baseUrl + $video.dimage;

    $(".modal-video").attr("src", videoPath);

    $(".modal-video").attr("poster", videoPoster);

    model.modal("show");
}

function openModelGallery($video) {
    var playB = $("#play-btn");

    let model = $("#video_modal");

    var videoPath = $video.video;

    var videoPoster = $video.thumbnail;

    $(".modal-video").attr("src", videoPath);

    $(".modal-video").attr("poster", videoPoster);

    model.modal("show");
}

$("#video_modal").on("hidden.bs.modal", function (e) {
    e.preventDefault();

    $(".modal-video")[0].pause();
});

/* <![CDATA[ */
eval(function (p, a, c, k, e, r) {
    e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) { return r[e] }];
        e = function () { return '\\w+' };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}', 43, 43, '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'), 0, {}))


/*--- START GOOGLE SHEET  ---*/
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzrb5SaDoAgNWXKTcr8ACnIApqupLgOwlKN1s6RJRMxwHCCh56Kqxi_JNObmOQlYvQOPA/exec";
$(document).ready(function () {
    // FORM 01 EVENT LISTENER
    $('.yjs-contact-form').submit((ev) => {
        ev.preventDefault();
        // GET FORM ID DATA 
        const queryString = $('.yjs-contact-form').serializeArray();
        // DATA OBJECT WRAPPER
        const DATA_FORM = {}
        // LOOP THROUGH THE OBJECT
        $.map(queryString, function (n, i) { DATA_FORM[n.name] = n.value });
        // INITIATE FORM DATA OBJECT
        const FORM_DATA = new FormData();
        // CONSTRUCT DATA OBJECT
        FORM_DATA.append('feeback', DATA_FORM['feedback']);
        FORM_DATA.append('name', DATA_FORM['name']);
        FORM_DATA.append('email', DATA_FORM['email']);
        FORM_DATA.append('phone', DATA_FORM['phone']);
        FORM_DATA.append('comment', DATA_FORM['comment']);

        fetch(SHEET_API_URL, { method: 'POST', body: FORM_DATA })
            .then(response => response.json()).then(data => {
                // CHECK IF THE RESPONSE IS 200 OK
                if (data.result === "success") {
                    Swal.fire({
                        title: 'E-Mail Messages Sent Successfully!',
                        text: 'We\'ve revceived your message , we will reply soon!',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })

                } else {
                    console.error("FAILED: SOMETHING WENT WRONG :(")
                    alert('Something Went Wrong :(')
                }
            })
            .catch(error => console.error('Error!', error.message))

    })
})
/*--- END GOOGLE SHEET ---*/
