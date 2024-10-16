const API_KEY = import.meta.env.VITE_PIXA_KEY;
const BASE_URL = 'https://pixabay.com/api/';


function getPhotos(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
}
export { getPhotos };