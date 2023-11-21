// For the home page
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("#primary-navigation");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);

  const visibility = nav.getAttribute("data-visible") === "true";
  nav.setAttribute("data-visible", !visibility);
});

// For the destination page

const buttons = document.querySelectorAll(".tab-list button");
const articles = document.querySelectorAll(".destination-info");
const pictures = document.querySelectorAll("picture");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    articles.forEach((article) => {
      if (article.getAttribute("data-article") === target) {
        article.classList.remove("hidden");
      } else {
        article.classList.add("hidden");
      }
    });
    pictures.forEach((picture) => {
      const img = picture.querySelector("img");
      if (img.getAttribute("data-image") === target) {
        picture.classList.remove("hidden");
        img.classList.remove("hidden");
      } else {
        picture.classList.add("hidden");
        img.classList.add("hidden");
      }
    });
    buttons.forEach((btn) => {
      if (btn.getAttribute("data-target") === target) {
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.setAttribute("aria-selected", "false");
      }
    });
  });
});

// Select all dot indicators
const dots = document.querySelectorAll(".dot-button");

// Loop over each dot
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const targetCrew = dot.getAttribute("data-target");

    const correspondingArticle = document.querySelector(
      `.crew-info[data-article="${targetCrew}"]`
    );
    const correspondingImage = document.querySelector(
      `.crew-image[data-image="${targetCrew}"]`
    );

    const articlesCrew = document.querySelectorAll(".crew-info");
    const imagesCrew = document.querySelectorAll(".crew-image");

    articlesCrew.forEach((article) => {
      if (article === correspondingArticle) {
        article.classList.remove("hidden");
      } else {
        article.classList.add("hidden");
      }
    });

    imagesCrew.forEach((image) => {
      if (image === correspondingImage) {
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
      }
    });

    // Update aria-selected attribute for each dot
    dots.forEach((dot) => {
      if (dot === event.target) {
        dot.setAttribute("aria-selected", "true");
      } else {
        dot.setAttribute("aria-selected", "false");
      }
    });
  });
});

// TEHNOLOGY PAGE

// Select all buttons
const buttonsTech = document.querySelectorAll(".number-indicators button");

// Add a click event listener to each button
buttonsTech.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the data-target attribute of the clicked button
    const target = this.getAttribute("data-target");

    // Select the currently visible article and hide it
    const currentArticle = document.querySelector(
      ".technology-info:not(.hidden)"
    );
    if (currentArticle) currentArticle.classList.add("hidden");

    // Select the article that corresponds to the data-target attribute and show it
    const newArticle = document.querySelector(
      `.technology-info[data-article="${target}"]`
    );
    if (newArticle) newArticle.classList.remove("hidden");

    // Select the currently visible image and hide it
    const currentImage = document.querySelector("picture:not(.hidden)");
    if (currentImage) currentImage.classList.add("hidden");

    // Select the image that corresponds to the data-target attribute and show it
    const newImage = document.querySelector(`picture[data-image="${target}"]`);
    if (newImage) newImage.classList.remove("hidden");

    // Select the currently selected button and deselect it
    const currentButton = document.querySelector(
      '.number-indicators button[aria-selected="true"]'
    );
    if (currentButton) currentButton.setAttribute("aria-selected", "false");

    // Select the clicked button and select it
    this.setAttribute("aria-selected", "true");
  });
});
