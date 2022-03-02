const searchButton = () => {
    const searchField = document.getElementById('search-field')
    const error = document.getElementById('error')
    const searchText = searchField.value;
    searchField.value = '';
    // phoneDetail.innerHTML = '';
    error.innerText = ''
    if(searchText == 0){
      error.innerText = 'Please Search any phone';
    }
    // else if(searchText !== 'iphone'|| searchText !== 'samsung' || searchText !== 'oppo'){
    //   error.innerText = 'Your have to choose Iphone, Samsung, Oppo'
    // }
    else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
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
          <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">details</button>
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
    <h5 class="card-title">${phone.slug}</h5>
    <h5 class="card-title">${phone.releaseDate}</h5>
    <h3 class="card-title">Basic Feature</h3>
    <p class="card-text">Chip Set : ${phone.mainFeatures.chipSet}</p>
    <p class="card-text">Display Size : ${phone.mainFeatures.displaySize}</p>
    <p class="card-text">Memory : ${phone.mainFeatures.memory}</p>
    <p class="card-text">Storage : ${phone.mainFeatures.storage}</p>
  </div>
  `
  
  div2.innerHTML = `
  
  <div class="card-body">
    <h3 class="card-title">Explore More</h3>
    <h5 class="card-title">sensors</h5>
    <h5 class="card-title">${phone.releaseDate.sensors[0]}</h5>
    <h5 class="card-title">${phone.releaseDate.sensors[1]}</h5>
    <h5 class="card-title">${phone.releaseDate.sensors[2]}</h5>
    <h5 class="card-title">${phone.releaseDate.sensors[3]}</h5>
    <h3 class="card-title">Others</h3>
    <p class="card-text">Chip Set : ${phone.mainFeatures.chipSet}</p>
    <p class="card-text">Display Size : ${phone.mainFeatures.displaySize}</p>
    <p class="card-text">Memory : ${phone.mainFeatures.memory}</p>
  </div>
  `
  phoneDetail.appendChild(div1);
  MorePhoneDetail.appendChild(div2);
}

// More phone Detail

// const loadPhoneMoreDetail = id => {
//   console.log(id);
//   const url = `https://openapi.programming-hero.com/api/phone/${id}`
//   fetch(url)
//   .then(res => res.json())
//   .then(data =>displayPhoneMoreDetail(data.data))
// }

// const displayPhoneMoreDetail = phone => {
//   console.log(phone);
//   const phoneDetail = document.getElementById('extra-more')
//   phoneDetail.innerHTML = '';
//   const div = document.createElement('div')
//   div.classList.add('card');
//   div.innerHTML = `
//   <img src="${phone.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${phone.slug}</h5>
//     <h5 class="card-title">${phone.releaseDate}</h5>
//     <h3 class="card-title">Basic Feature</h3>
//     <p class="card-text">Chip Set : ${phone.mainFeatures.chipSet}</p>
//     <p class="card-text">Display Size : ${phone.mainFeatures.displaySize}</p>
//     <p class="card-text">Memory : ${phone.mainFeatures.memory}</p>
//   </div>
//   `
//   phoneDetail.appendChild(div);
// }