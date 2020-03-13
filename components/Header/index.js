// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

const panel = document.createElement('div');
const panelDate = document.createElement('span');
const panelTitle = document.createElement('h1');
const panelTemp = document.createElement('span');

panelDate.textContent = `SMARCH 28, 2019`;
panelTitle.textContent = `Lambda Times`;
panelTemp.textContent = `98°`;

panel.classList.add('header');
panelDate.classList.add('date');
panelTemp.classList.add('temp');

// const headerContainer = document.querySelector(".header-container");
//     headerContainer.appendChild(panel);

panel.appendChild(panelDate);
panel.appendChild(panelTitle);
panel.appendChild(panelTemp);

return panel;
}