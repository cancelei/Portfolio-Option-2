const menu = document.getElementById('menu');
const { body } = document;

function menuOpen() {
  menu.classList.add('menu_open');
  body.classList.add('menu-open');
}

function menuClose() {
  menu.classList.remove('menu_open');
  body.classList.remove('menu-open');
}

menuOpen();

setTimeout(menuClose, 1);

// Project Section Revamp will have 3 parts: 1) Data, 2) Main Creator Function, 3) Project Description Function.
// Part 1) Projects Section ONLY Data Input

const projectsData = [
  {
    title: "Tonic1",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop1.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Multi-Post Stories2",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop2.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Tonic3",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop3.svg",
    tags: ["HTML", "CSS", "Javascript"]
  },
  {
    title: "Multi-Post Stories4",
    detailsTitle: "CANOPY",
    detailsText: "Back End Dev",
    detailsYear: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    descriptionLong: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageUrl: "Assets/Snapshoot Portfoliop4.svg",
    tags: ["HTML", "CSS", "Javascript"]
  }
]

// Part 2) Project Section creation Function

function createProjectsSection() {
  const projectsContainer = document.getElementById("portfolio");

  projectsData.forEach(project => {
    const projectElement = document.createElement("sub");
    projectElement.classList.add("project__card");

    const imageElement = document.createElement("img");
    imageElement.classList.add("card__img");
    imageElement.src = project.imageUrl;
    projectElement.appendChild(imageElement);

    const cardDivisionElement = document.createElement("div");
    cardDivisionElement.classList.add("desktop_card_division");
    projectElement.appendChild(cardDivisionElement);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("card__title");
    titleElement.textContent = project.title;
    cardDivisionElement.appendChild(titleElement);

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("card__details");
    cardDivisionElement.appendChild(detailsElement);

    const detailsTitleElement = document.createElement("h4");
    detailsTitleElement.classList.add("details__title");
    detailsTitleElement.textContent = project.detailsTitle;
    detailsElement.appendChild(detailsTitleElement);

    const separatorElement1 = document.createElement("img");
    separatorElement1.src = "Assets/Counterball.svg";
    separatorElement1.alt = "separator";
    detailsElement.appendChild(separatorElement1);

    const detailsTextElement1 = document.createElement("h4");
    detailsTextElement1.classList.add("details__text");
    detailsTextElement1.textContent = project.detailsText;
    detailsElement.appendChild(detailsTextElement1);

    const separatorElement2 = document.createElement("img");
    separatorElement2.src = "Assets/Counterball.svg";
    separatorElement2.alt = "separator";
    detailsElement.appendChild(separatorElement2);

    const detailsYearElement = document.createElement("h4");
    detailsYearElement.classList.add("details__year");
    detailsYearElement.textContent = project.detailsYear;
    detailsElement.appendChild(detailsYearElement);

    const descriptionElement = document.createElement("h4");
    descriptionElement.classList.add("card__description");
    descriptionElement.textContent = project.description;
    cardDivisionElement.appendChild(descriptionElement);

    const tagParentElement = document.createElement("ul");
    tagParentElement.classList.add("tag__parent");
    cardDivisionElement.appendChild(tagParentElement);

    project.tags.forEach(tag => {
      const tagElement = document.createElement("li");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;
      tagParentElement.appendChild(tagElement);
    });

    const buttonParentElement = document.createElement("div");
    buttonParentElement.classList.add("about__button--parent");
    cardDivisionElement.appendChild(buttonParentElement);

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button__std", "btn", "btn__project");
    buttonElement.textContent = "See Project";
    buttonParentElement.appendChild(buttonElement);

    projectsContainer.appendChild(projectElement);
  });

  
const seeProjectButtons = document.querySelectorAll('.btn__project');

  seeProjectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectIndex = Array.from(seeProjectButtons).indexOf(button);
      const project = projectsData[projectIndex];
  
      // Call a function to open the modal and populate it with project data
      openModal(project);
    });

// Part 3 - Pop-up modal

function openModal(project) {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = ''; // Clear previous content
  modalContainer.classList.add("visible");

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header', 'flex', 'row', 'spacebtw');
  const titleElement = document.createElement('h2');
  titleElement.classList.add('card__title');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');

  modalHeader.appendChild(titleElement);
  modalHeader.appendChild(closeButton);

  const cardDetails = document.createElement('div');
  cardDetails.classList.add('card__details');
  const detailsTitleElement = document.createElement('h4');
  detailsTitleElement.classList.add('details__title');
  const separator1 = document.createElement('img');
  separator1.src = 'Assets/Counterball.svg';
  separator1.alt = 'separator';
  const detailsTextElement = document.createElement('h4');
  detailsTextElement.classList.add('details__text');
  const separator2 = document.createElement('img');
  separator2.src = 'Assets/Counterball.svg';
  separator2.alt = 'separator';
  const detailsYearElement = document.createElement('h4');
  detailsYearElement.classList.add('details__year');

  cardDetails.appendChild(detailsTitleElement);
  cardDetails.appendChild(separator1);
  cardDetails.appendChild(detailsTextElement);
  cardDetails.appendChild(separator2);
  cardDetails.appendChild(detailsYearElement);

  const descriptionLongElement = document.createElement('h4');
  descriptionLongElement.classList.add('descriptionLong');

  const tagParentElement = document.createElement('ul');
  tagParentElement.classList.add('tag__parent');

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(cardDetails);
  modalContent.appendChild(descriptionLongElement);
  modalContent.appendChild(tagParentElement);

  modalContainer.appendChild(modalContent);

  // Set the content of the modal using project data
  titleElement.textContent = project.title;
  detailsTitleElement.textContent = project.details.title;
  detailsTextElement.textContent = project.details.text;
  detailsYearElement.textContent = project.details.year;
  descriptionLongElement.textContent = project.longDescription;

  // Create tag elements and append to tag parent element
  project.tags.forEach(tag => {
    const tagElement = document.createElement('li');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;
    tagParentElement.appendChild(tagElement);
  });

  // Show the modal
  modalContainer.classList.add('show');
}

const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', function() {
  const modalContainer = document.getElementById('modal-container');

  // Hide the modal
  modalContainer.style.display = 'none';
});

}

window.addEventListener("load", createProjectsSection);