var splide = new Splide(".splide", {
  perPage: 4,
  focus: 0,
  arrows: false,
  breakpoints: {
    768: {
      perPage: 2.5,
    },
    375: {
      perPage: 1,
    },
  },
});

splide.mount();
