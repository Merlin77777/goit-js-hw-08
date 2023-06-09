import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

 console.log(galleryItems);

const container = document.querySelector('.gallery');

function marckup(arr) {
  const htmltext = arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
    </li> `
    )
    .join('');
  return htmltext;
}

container.insertAdjacentHTML('beforeend', marckup(galleryItems));

let modalWindow = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
