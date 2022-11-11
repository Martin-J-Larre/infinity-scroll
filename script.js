const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photos = [];

const count = 10;
const apiKey = "PITjojqBtyoChVvLJFRARXtgv1Qef_XwbZQUQ3skWt8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const setAttributes = (element, attributes) => { 
  for (const key in attributes) {
    element.setAttribute(key,attributes[key]);
  }
}

const renderPhotos = () => { 
  photos.forEach( photo => {
    const a_tag = document.createElement('a');
    setAttributes(a_tag, {
      href: photo.links.html,
      target:'_blank'
    })

    const img_tag = document.createElement('img');
    setAttributes(img_tag, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    a_tag.appendChild(img_tag);
    imageContainer.appendChild(a_tag);

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

getPhotos();