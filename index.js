import{i as n,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="46530442-c13cb086c137fdf8de7cc1a97",d="https://pixabay.com/api/";function m(i){const r=`${d}?key=${f}&q=${i}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function y(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-card">
        <a href="${o}">
          <img class="gallery-img" width="360" height="152" src="${r}" alt="${s}" />
        </a>
        <ul class="card-stats">
            <li class="card-stats-item">
              <p>Likes</p>
              <p>${e}</p>
            </li>
            <li class="card-stats-item">
              <p>Views</p>
              <p>${t}</p>
            </li>
            <li class="card-stats-item">
              <p>Comments</p>
              <p>${a}</p>
            </li>
            <li class="card-stats-item">
              <p>Downloads</p>
              <p>${u}</p>
            </li>
        </ul>
    </li>`).join("")}const h=document.querySelector(".form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader");h.addEventListener("submit",g);async function g(i){i.preventDefault();const r=i.currentTarget,o=r.elements.user_query.value.trim();if(o==""){n.show({title:"Error",message:"Input cant be empty!",position:"center",color:"red"});return}c.innerHTML="";try{l.style.display="flex  ";const s=await m(o);if(s.total===0){n.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"yellow"});return}c.innerHTML=y(s.hits),new p(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}catch(s){console.error("Error fetching photos:",s)}finally{l.style.display="none",r.reset()}}
//# sourceMappingURL=index.js.map
