const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

const displayPhones = (phones) => {
    // console.log(phones);
    const cardContainer = document.getElementById('card-container')
    phones.forEach(phone => {
        console.log(phone);
        
        const div =  document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('my-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onclick="cardDetails('${phone.slug}')" class="btn btn-primary">details</button>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
        
    });
}
const cardDetails = (card) => {
    console.log(card);
}