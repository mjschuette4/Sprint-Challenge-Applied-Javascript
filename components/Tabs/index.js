// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log(data.data);

    const topicsArray = data.data.topics;
    const topicsDiv = document.querySelector('.topics');
    
    topicsArray.forEach(item =>{
       topicsDiv.appendChild(Topics(item));

    })
})
.catch (err => {
    console.log(err);
})

function Topics(data) {

    const panel = document.createElement('div');
    panel.classList.add('tab');
    panel.textContent = data;
    
    return panel;
}