const emblaNode = document.querySelector(".embla");
const options = { loop: false,duration: 2000 };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);
