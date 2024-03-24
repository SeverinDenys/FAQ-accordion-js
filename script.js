// second option code internet
// Select all section containers
let sectionContainers = document.querySelectorAll(".section-container");

// Iterate through each section container
sectionContainers.forEach((sectionContainer) => {
  // Add click event listener to each section container
  sectionContainer.addEventListener("click", () => {
    // Find the corresponding text container within the section container
    let textContainer = sectionContainer.nextElementSibling;
    // Toggle the display of the text container
    textContainer.style.display =
      textContainer.style.display === "block" ? "none" : "block";
    // Find the SVG icon within the section container
    let svgIcon = sectionContainer.querySelector(".add-svg-button");
    // Change the SVG icon based on the display of the text container
    svgIcon.innerHTML =
      textContainer.style.display === "block"
        ? `
        <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
      `
        : `
        <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>`;
  });
});
