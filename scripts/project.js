const projects = [
  {
    title: "HTML Fundamentals",
    details:
      "This project covers the basics of HTML, including elements and structures.",
    link_text: "View Project",
    href: "https://example.com",
  },
  {
    title: "CSS styling",
    details:
      "This project focuses on styling web pages with CSS, including layout and design principles.",
    link_text: "View Project",
    href: "https://example.com",
  },
  {
    title: "Improving a Web Page",
    details:
      "This project involved in taking a poor web page and rebuliding it to be more appealing and user friendly and adding my own touch to improve it.",
    link_text: "View Project",
    href: "https://example.com",
  },

  {
    title: "Content Patterns",
    details:
      "This project explores common content patterns used in web design, such as contact forms and image galleries.",
    link_text: "View Project",
    href: "https://example.com",
  },
  {
    title: "Responsive Design",
    details:
      "This project focuses on creating web pages that adapt to different screen sizes and devices, the task was to create a bento grid of some sort similar to one found and adding your own touch.",
    link_text: "View Project",
    href: "https://example.com",
  },
  {
    title: "JavaScript DOM Manipulation",
    details:
      "This project focuses on manipulating the DOM with JavaScript in this project this was to create an interactive web page that could change the background color with a press of a button.",
    link_text: "View Project",
    href: "https://example.com",
  },
];

const modal = document.getElementById("project-modal");
const modal_title = document.getElementById("modal-title");
const modal_details = document.getElementById("modal-details");
const modal_link = document.getElementById("modal-link");
const modal_close = document.getElementById("modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  modal.showModal();
  document.body.style.overflow = "hidden";
}

function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

modal_close.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "";
});
