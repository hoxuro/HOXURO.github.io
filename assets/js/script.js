"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // sticky navigation
  window.addEventListener("scroll", function () {
    const headerEl = document.querySelector("header");
    headerEl.classList.toggle(
      "sticky",
      window.scrollY >=
        window.pageYOffset + secIntroEl.getBoundingClientRect().top
    );
  });

  // Making mobile navigation work
  const htmlEl = document.querySelector("html");

  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector("header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
    htmlEl.classList.toggle("disable-scroll");
  });

  // Implementation of toggle display or not in a accordeon
  const itemsEl = document.querySelectorAll(".acc-item");

  itemsEl.forEach((item) => {
    item.addEventListener("click", function () {
      if (
        item
          .querySelector(".acc-content-box")
          .classList.contains("acc-content-active")
      ) {
        // si el item ya contiene la clase activa
        // se la quito solo a el
        item
          .querySelector(".acc-content-box")
          .classList.remove("acc-content-active");

        item.querySelector(".acc-title").classList.remove("title-active");
      } else if (
        !item
          .querySelector(".acc-content-box")
          .classList.contains("acc-content-active")
      ) {
        // si no la contiene y he clickado se la quito a todos
        itemsEl.forEach((item) => {
          item
            .querySelector(".acc-content-box")
            .classList.remove("acc-content-active");

          item.querySelector(".acc-title").classList.remove("title-active");
        });

        //ahora se la añado
        item
          .querySelector(".acc-content-box")
          .classList.add("acc-content-active");

        item.querySelector(".acc-title").classList.add("title-active");
      }
    });
  });

  // Implementation of scrolling to sections
  const linksEl = document.querySelectorAll(".main-nav-link");

  const secIntroEl = document.querySelector(".section-introduction");
  const secSerEl = document.querySelector(".section-services");
  const secProEl = document.querySelector(".section-projects");
  const secTesEl = document.querySelector(".section-testimonials");
  const secAboutEl = document.querySelector(".section-about");
  const secContactEl = document.querySelector(".section-contact");

  linksEl.forEach((link) => {
    link.addEventListener("click", function () {
      switch (link.id) {
        case "vision":
          window.scroll(
            0,
            window.scrollY + secIntroEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
        case "services":
          window.scroll(
            0,
            window.scrollY + secSerEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
        case "projects":
          window.scroll(
            0,
            window.scrollY + secProEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
        case "testimonials":
          window.scroll(
            0,
            window.scrollY + secTesEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
        case "about":
          window.scroll(
            0,
            window.scrollY + secAboutEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
        case "contact":
          window.scroll(
            0,
            window.scrollY + secContactEl.getBoundingClientRect().top
          );
          headerEl.classList.toggle("nav-open");
          htmlEl.classList.toggle("disable-scroll");
          break;
      }
    });
  });
});
