const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const error = document.getElementById('error')
    const searchText = searchField.value;
    searchField.value = '';

    error.innerText = ''
    if(searchText == 'iphone'|| searchText == 'samsung' || searchText == 'oppo'){
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}` 
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
     
    }
    else if(searchText == ''){
     error.innerText = 'Please Search phone !!!';
    }
    else{
    error.innerText = 'Choose Iphone, Samsung, Oppo'
    }
    
}

const displayPhones = (phones) => {
    // console.log(phones);
    const first20phone = phones.slice(0, 20)
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    first20phone.forEach(phone => {
        // console.log(phone);
        
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
          <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">Details</button>
        </div>
      </div>
        `
        cardContainer.appendChild(div)
        
    });
    
}
 // phone Details....

const loadPhoneDetail = id => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPhoneDetail(data.data))
}

const displayPhoneDetail = phone => {
  console.log(phone);
  const phoneDetail = document.getElementById('phone-details')
  const MorePhoneDetail = document.getElementById('extra-more')
  phoneDetail.innerHTML = '';
  MorePhoneDetail.innerHTML = '';
  const div1 = document.createElement('div')
  const div2 = document.createElement('div')
  div1.classList.add('card');
  div2.classList.add('card');
  div1.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-title">${phone.slug}</p>
    <p class="card-title">${phone.releaseDate}</p>
    <h3 class="card-title">Basic Feature</h3>
    <p class="card-text">Chip Set : ${phone.mainFeatures.chipSet}</p>
    <p class="card-text">Display Size : ${phone.mainFeatures.displaySize}</p>
    <p class="card-text">Memory : ${phone.mainFeatures.memory}</p>
    <p class="card-text">Storage : ${phone.mainFeatures.storage}</p>
  </div>
  `
  // Explore More information
  div2.innerHTML = `
  
  <div class="card-body">
    <h3 class="card-title text-center">Explore More</h3>
    <h5 class="card-title">sensors</h5>
    <span class="card-text"> ${phone.mainFeatures.sensors[0]}</span>
    <span class="card-text">, ${phone.mainFeatures.sensors[1]}</span>
    <span class="card-text">, ${phone.mainFeatures.sensors[2]}</span>
    <span class="card-text">, ${phone.mainFeatures.sensors[4]}</span>
    <h5 class="card-title">Others</h5>
    <p class="card-text">GPS : ${phone.others.GPS}</p>
    <p class="card-text">USB : ${phone.others.USB}</p>
    <p class="card-text">WLAN : ${phone.others.WLAN}</p>
  </div>
  `
  phoneDetail.appendChild(div1);
  MorePhoneDetail.appendChild(div2);
}

