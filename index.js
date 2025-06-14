import{a as f,S as g,i as c}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="50797818-4d1ec28dd028369cf30507a0a",v="https://pixabay.com/api/";function L(o){return f.get(v,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0)throw new Error(message);return r.data.hits}).catch(r=>null)}const d=document.querySelector(".gallery"),u=document.querySelector(".display-loader");function b(o){const r=o.map(({tags:a,likes:e,views:t,comments:s,downloads:m,webformatURL:h,largeImageURL:p})=>`<li class="item">
            <a href="${p}">
                <img class="gallery-img" src="${h}" alt="${a}"
                />
            </a>
            <div class="notes">
                <div class="description">
                    <h2 class="title">Likes</h2>
                    <p class="amount">${e}</p>
                </div>
                <div class="description">
                    <h2 class="title">Views</h2>
                    <p class="amount">${t}</p>
                </div>
                <div class="description">
                    <h2 class="title">Comments</h2>
                    <p class="amount">${s}</p>
                </div>
                <div class="description">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${m}</p>
                </div>
            </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",r),new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).on("show.simplelightbox")}function w(){d.innerHTML=""}function S(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const n=document.querySelector(".form");n.addEventListener("submit",q);function q(o){o.preventDefault(),w(),S();const r=o.currentTarget.elements.searchText.value;if(!r.trim()){c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, you have to make a choice!"}),n.reset(),l();return}L(r).then(i=>{b(i)}).catch(i=>{c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.reset()}).finally(()=>{l(),n.reset()})}
//# sourceMappingURL=index.js.map
