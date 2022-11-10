const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photos = [];
console.log("desde array", photos);

const count = 10;
const apiKey = "PITjojqBtyoChVvLJFRARXtgv1Qef_XwbZQUQ3skWt8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const renderPhotos = () => { 
  photos.forEach( photo => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', photo.links.html);
    anchor.setAttribute('target', '_blank');

    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular); 
    img.setAttribute('alt', photo.alt_description); 
    img.setAttribute('title', photo.alt_description); 

    anchor.appendChild(img);
    imageContainer.appendChild(anchor);

  });
}

const getPhotos = async () => { 
  try {
    const response = await fetch(apiUrl);
    photos = await response.json();
    renderPhotos();
    
  } catch (err) {
    console.log(err);
  }
}

console.log("desde array abajo", photos);
getPhotos();