import { getPhotos } from "./js/pixabay-api.js";
import createMarkup from './js/render-function.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();
  if (userQuery == '') {
    iziToast.show({
        title: 'Error',
        message: 'Input cant be empty!',
        position: 'center',
        color: 'red',
    });
    return;
  }
  galleryEl.innerHTML = '';

  try {
    loaderEl.style.display = 'flex  ';
    const data = await getPhotos(userQuery);

    if (data.total === 0) {
       iziToast.show({
        title: 'Warning',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
        color: 'yellow',
      });
      // notFoundTextEl.innerHTML = "Sorry, there are no images matching your search query. Please try again!";
      return;
    }

    galleryEl.innerHTML = createMarkup(data.hits);

    const lightbox = new SimpleLightbox('.js-gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.refresh();

  } catch (err) {
    console.error("Error fetching photos:", err);
  } finally {
    loaderEl.style.display = 'none';
    form.reset();
  }
}