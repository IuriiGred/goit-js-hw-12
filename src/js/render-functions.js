import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listElement = document.querySelector(".gallery");
const loaderEl = document.querySelector('.display-loader');
const showButton = document.querySelector('.load-more');

function createGallery(images) {
    const gallery =  images.map(({ 
            tags, 
            likes, 
            views, 
            comments, 
            downloads, 
            webformatURL,
            largeImageURL }) => 
            
        `<li class="gallery-item">
            <a href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}"
                />
                <div class="notes">
                <div class="description">
                    <h2 class="title">Likes</h2>
                    <p class="amount">${likes}</p>
                </div>
                <div class="description">
                    <h2 class="title">Views</h2>
                    <p class="amount">${views}</p>
                </div>
                <div class="description">
                    <h2 class="title">Comments</h2>
                    <p class="amount">${comments}</p>
                </div>
                <div class="description">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${downloads}</p>
                </div>
            </div>
            </a>
            
        </li>`).join("");

    listElement.insertAdjacentHTML("beforeend", gallery);

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
    lightbox.on('show.simplelightbox');

    lightbox.refresh();
}

function clearGallery() {
    listElement.innerHTML="";
}

function showLoader() {
    loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
    loaderEl.classList.add('is-hidden');
}

function showLoadMoreButton() {
    showButton.classList.remove('is-hidden');
}

function hideLoadMoreButton(){
    showButton.classList.add('is-hidden');
}

export { listElement, showButton, createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton }