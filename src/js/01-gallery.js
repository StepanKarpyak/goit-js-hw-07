import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
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
    galleryContainer.insertAdjacentHTML('beforeend', markup);
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

galleryContainer.addEventListener('click', onClick);
document.addEventListener('keydown', onPress);