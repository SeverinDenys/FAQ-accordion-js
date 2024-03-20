// first option hard codded. Don't pass with DRY principle

// const buttonAddtext = () => {
//   let textContainer = document.getElementById("textContainer");
//   textContainer.innerHTML = `<div>FrontEnd Mentor offers realistic codding challenges to help developers improve
//   their frontend coding skills with projects in HTML, CSS and Javascript.
//   It's suitable for all levels and ideal for portfolio building.</div>
//   `;
// };

// let svgChangeIcon = document
//   .querySelectorAll(".add-svg-button")
//   .forEach((svgChangeIcon) => {
//     svgChangeIcon.addEventListener("click", () => {
//       svgChangeIcon.innerHTML = `
//       <path
//         fill="#301534"
//         d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
//       />`;
//     });
//   });

// const buttonAddtext1 = () => {
//   let textContainer = document.getElementById("textContainer1");
//   textContainer.innerHTML = `<div>Yes, it's completely free.</div>
//   `;
// };

// const buttonAddtext2 = () => {
//   let textContainer = document.getElementById("textContainer2");
//   textContainer.innerHTML = `<div>Yes, you can.</div>
//   `;
// };

// const buttonAddtext3 = () => {
//   let textContainer = document.getElementById("textContainer3");
//   textContainer.innerHTML = `<div>You can reach us by writing on our official website email.</div>
//   `;
// };

// second option my code
// let textContainer = document.querySelector(".textContainer");

// const buttonAddtext = () => {
//   textContainer.style.display = "block";
// };

// let buttonDeleteText = () => {
//   textContainer.remove();
// };

// let svgChangeIcon = document
//   .querySelectorAll(".add-svg-button")
//   .forEach((svgChangeIcon) => {
//     svgChangeIcon.addEventListener("click", () => {
//       buttonAddtext();

//       svgChangeIcon.innerHTML = `
//       <path
//         fill="#301534"
//         d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
//       />`;
//     });

//   });

// second option code internet
let textContainers = document.querySelectorAll(".section-container");
console.log(textContainers);

let changeContentOnClick = textContainers.forEach((textContainer) => {
  textContainer.addEventListener("click", () => {
    console.log(textContainer, "clicked");

    const targetId = document.getElementById("textContainer");
    const svgIcon = document.getElementById("svgIcon");
    console.log(svgIcon);
    if (targetId.style.display === "block") {
      // targetTextContainer.remove();

      // just once and display = "none" alows to open/close infinite times?
      targetId.style.display = "none";
      console.log(targetId, "closed"); // Hide the text container
      svgIcon.innerHTML = `
      <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>`;
    } else {
      targetId.style.display = "block";
      console.log(targetId, "open");
      svgIcon.innerHTML = `
        <path
        fill="#301534"
       d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
      />`;
    }
  });
});

// other option

// let svgChangeIcons = document.querySelectorAll(".section-container");

// svgChangeIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("active");
//   });
// });
