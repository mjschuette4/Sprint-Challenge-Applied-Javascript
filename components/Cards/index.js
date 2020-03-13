// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(info){

    const panel = document.createElement('div');
    const panelHeadline = document.createElement('div');
    const panelAuthor = document.createElement('div');
    const panelImgContainer = document.createElement('div');
    const panelImg = document.createElement('img');
    const panelBy = document.createElement('span');

    panel.classList.add('card');
    panelHeadline.classList.add('headline');
    panelAuthor.classList.add('author');
    panelImgContainer.classList.add('img-container');

    panelHeadline.textContent = info.headline;
    panelImg.src = info.authorPhoto;
    panelBy.textContent = `By ${info.authorName}`;

    
    panel.appendChild(panelHeadline);
    panel.appendChild(panelAuthor);
        panelAuthor.appendChild(panelImgContainer);
            panelImgContainer.appendChild(panelImg);
        panelAuthor.appendChild(panelBy);

    return panel;
}

const card = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(dataa => {
    // console.log(dataa.data.articles);
    const articles = Object.values(dataa.data.articles);
    // console.log(articles);
    articles.forEach((data) => {
        // console.log(data);
        data.forEach((data) => {  
            card.appendChild(cardCreator(data));
        })
    })
})
.catch(err =>{
    console.log(err);
})