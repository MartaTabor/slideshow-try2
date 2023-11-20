var splide = new Splide(".splide", {
  perPage: 4,
  focus: 0,
  arrows: false,
  breakpoints: {
    1199: {
      perPage: 2.5,
    },
    767: {
      perPage: 1,
    },
  },
});

splide.mount();
