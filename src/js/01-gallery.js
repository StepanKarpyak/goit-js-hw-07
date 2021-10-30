import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryContainer = document.querySelector('.gallery');

// const galleryItemsString = galleryItems.map(item =>
//     `<div class="gallery__item">
//     <a class="gallery__link" target="_self" href="${item.original}">
//     <img
//         class="gallery__image"
//         src="${item.preview}"
//         data-source="${item.original}"
//         alt="${item.description}"
//     />
//     </a>
// </div>`
// ).join('');

// galleryContainer.insertAdjacentHTML("afterbegin", galleryItemsString);

// galleryContainer.addEventListener("click", onGalleryClick);

// function onGalleryClick(event) {
//     event.preventDefault();

//     const instance = basicLightbox.create(`
//     <div class="modal">
//     <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
//     </div>
// `, {
//         onShow: (instance) => {
//             window.addEventListener("keydown", onKeyboardClick);
//             function onKeyboardClick(event) {
//                 if (event.code === 'Escape') {
//                     instance.close();
//                     window.removeEventListener('keydown', onKeyboardClick);
//                 };
//             };

//             instance.element().querySelector('.js-modal-img').addEventListener("click", () => {
//                 instance.close();
//             });
//         },
//     }).show();
// }

const gallery = document.querySelector('.gallery');
const createMarkup = images => {
    return images
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
        })
        .join('');
};
const markup = createMarkup(galleryItems);
const addMarkup = markup => {
    gallery.insertAdjacentHTML('beforeend', markup);
};
addMarkup(markup);

let instance = basicLightbox;

const onPress = e => {
    if (e.key === 'Escape' && instance.visible()) {
        instance.close();
    }
};
const onClick = e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } else {
        instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
        instance.show();
    }
};

gallery.addEventListener('click', onClick);
document.addEventListener('keydown', onPress);