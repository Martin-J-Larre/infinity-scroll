const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photos = [];
console.log({photos});

const count = 10;
const apiKey = "PITjojqBtyoChVvLJFRARXtgv1Qef_XwbZQUQ3skWt8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const renderPhotos = () => { 
  photos.forEach( photo => {
    displayPhoto = `<a href=${photo.links.html} target="_blank">
                      <img 
                        src=${photo.urls.regular} 
                        alt=${photo.alt_description}
                        title=${photo.alt_description}>
                    </a>`
    imageContainer.innerHTML = displayPhoto;
  });
}

const getPhotos = async () => { 
  try {
    const response = await fetch(apiUrl);
    photos = await response.json();
    console.log("desde promesa", photos);
    renderPhotos();
    
  } catch (err) {
    console.log(err);
  }
}

getPhotos();