import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsString = galleryItems.map(item =>
    `<div class="gallery__item">
    <a class="gallery__link" target="_self" href="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
    />
    </a>
</div>`
).join('');

galleryContainer.insertAdjacentHTML("afterbegin", galleryItemsString);

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
    </div>
`, {
        onShow: (instance) => {
            window.addEventListener("keydown", onKeyboardClick);
            function onKeyboardClick(event) {
                if (event.code === 'Escape') {
                    instance.close();
                    window.removeEventListener('keydown', onKeyboardClick);
                };
            };

            instance.element().querySelector('.js-modal-img').addEventListener("click", () => {
                instance.close();
            });
        },
    }).show();
}