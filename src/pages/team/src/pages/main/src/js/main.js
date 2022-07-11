Fancybox.bind("[data-fancybox-plyr]", {
  on: {
    reveal: (fancybox, slide) => {
      if (typeof Plyr === undefined) {
        return;
      }

      let $el;

      if (slide.type === "html5video") {
        $el = slide.$content.querySelector("video");
      } else if (slide.type === "video") {
        $el = document.createElement("div");
        $el.classList.add("plyr__video-embed");

        $el.appendChild(slide.$iframe);

        slide.$content.appendChild($el);
      }

      if ($el) {
        slide.player = new Plyr($el);
      }
    },
    "Carousel.unselectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.pause();
      }
    },
    "Carousel.selectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.play();
      }
    },
  },
});

$(document).ready(function () {

  //first slider
  var nft = $('#nft-slider');
  nft.owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
  // Go to the next item
  $('.customPrevBtn').click(function () {
    nft.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customNextBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    nft.trigger('prev.owl.carousel', [300]);
  });
});
$(document).ready(function () {
  // gun slider
  var gun = $('#gun')
  gun.owlCarousel({
    nav: false,
    loop: true,
    // rewind: true, // rewind to first slide
    autoplay: true,
    // autoplaySpeed: 5000,
    // autoplayTimeout: 5000,
    dotsSpeed: 400,
    items: 1,
    dotsContainer: '#custom-owl-dots'
});
$('.PrevBtn').click(function () {
  gun.trigger('next.owl.carousel');
})
// Go to the previous item
$('.NextBtn').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  gun.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    gun.trigger('to.owl.carousel', [$(this).index(), 300]);
});
});