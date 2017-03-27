function Mockup() {};
Mockup.pageId = "pgMockup";

Mockup.config = {
    CAROUSEL_IMAGES: [
        {
            src: "images/hong-kong-1990268_1920.jpg"
        },
        {
            src: "images/space-station-2114660_1920.jpg"
        },
        {
            src: "images/toothed-belt-drive-209677_1920.jpg"
        },
        {
            src: "images/helicopter-2116548_1920.jpg"
        }
    ],
    CARD_IMAGES: [
        {
            src: "images/toothed-belt-drive-209677_1920.jpg",
            title: "WARZONE",
            text: "3D TANKS, SOLDIERS & WEAPONS"
        },
        {
            src: "images/game-289470_1920.jpg",
            title: "ASSASSIN 3.5",
            text: "2 SET COSTUME PACK"
        },
        {
            src: "images/helicopter-2116548_1920.jpg",
            title: "RED DAWN",
            text: "MILITARY JET PACK"
        }
    ]
}

Mockup.init = function() {
    $( ".page" ).hide();
    $( "#" + Mockup.pageId ).show();

    var config = Mockup.config;
    Mockup.createCarousel(config);
    Mockup.createCards(config);

    $("#" + Mockup.pageId + " .materialboxed").materialbox();
    Mockup.bind();
};

Mockup.bind = function() {
    $("#" + Mockup.pageId + " .carousel-prev").unbind("click");
    $("#" + Mockup.pageId + " .carousel-prev").bind("click", function() {
        $("#" + Mockup.pageId + " .carousel.carousel-slider").carousel('prev');
    });

    $("#" + Mockup.pageId + " .carousel-next").unbind("click");
    $("#" + Mockup.pageId + " .carousel-next").bind("click", function() {
        $("#" + Mockup.pageId + " .carousel.carousel-slider").carousel('next');
    });
};

Mockup.createCarousel = function(config) {
    var html = config.CAROUSEL_IMAGES.map(function(image) {
        var inner_html = '<div class="carousel-item background-image-size white-text" style="background-image: url(' + image.src + ')" >' + 
                            
                         '</div>';
        return inner_html;
    }).join(" ");

    $("#" + Mockup.pageId + " .carousel.carousel-slider").append(html);
    $("#" + Mockup.pageId + " .carousel.carousel-slider").carousel({fullWidth: true, indicators: false});
};

Mockup.createCards = function(config) {
    var html = config.CARD_IMAGES.map(function(image) {

        var inner_html = '<div class="col border l4 s12 no-padding background-image-size image" style="background-image: url(' + image.src + ')" >' +  
                            '<h4 class="white-text image-caption-title">' + image.title + '</h4>' + 
                            '<span class="grey-text image-caption-text">' + image.text + '</span>' + 
                         '</div>';
        return inner_html;
    }).join(" ");

    $("#" + Mockup.pageId + " .cards").append(html);
};