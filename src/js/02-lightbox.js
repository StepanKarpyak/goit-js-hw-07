import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCont = document.querySelector('.gallery');
const galleryItemsString = galleryItems.map(item => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
).join('');

galleryCont.insertAdjacentHTML('afterbegin', galleryItemsString);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'button',
});
