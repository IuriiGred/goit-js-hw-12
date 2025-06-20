import{S as E,a as C,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y=document.querySelector(".gallery"),v=document.querySelector(".display-loader"),g=document.querySelector(".load-more");function h(r){const t=r.map(({tags:a,likes:e,views:o,comments:n,downloads:q,webformatURL:P,largeImageURL:S})=>`<li class="gallery-item">
            <a href="${S}">
                <img class="gallery-img" src="${P}" alt="${a}"
                />
                <div class="notes">
                <div class="description">
                    <h2 class="title">Likes</h2>
                    <p class="amount">${e}</p>
                </div>
                <div class="description">
                    <h2 class="title">Views</h2>
                    <p class="amount">${o}</p>
                </div>
                <div class="description">
                    <h2 class="title">Comments</h2>
                    <p class="amount">${n}</p>
                </div>
                <div class="description">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${q}</p>
                </div>
            </div>
            </a>
            
        </li>`).join("");y.insertAdjacentHTML("beforeend",t);let s=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});s.on("show.simplelightbox"),s.refresh()}function O(){y.innerHTML=""}function L(){v.classList.remove("is-hidden")}function m(){v.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}function l(){g.classList.add("is-hidden")}const $="50797818-4d1ec28dd028369cf30507a0a",k="https://pixabay.com/api/";async function w(r,t=1,s=1){return(await C(k,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}const d=document.querySelector(".form");let f=150,i=1,u="",p=0;d.addEventListener("submit",x);async function x(r){if(r.preventDefault(),i=1,O(),L(),u=r.currentTarget.elements.searchText.value.trim(),!u){c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, you have to make a choice!"}),m(),l(),d.reset();return}try{const t=await w(u,i,f);if(t.hits.length===0)throw new Error(message);p=Math.ceil(t.totalHits/f),i===p?(c.info({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"There's only one part in this query."}),l(),h(t.hits)):(h(t.hits),b())}catch{c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l(),d.reset()}finally{m(),d.reset()}}g.addEventListener("click",B);async function B(){i+=1,l(),L();try{if(i>p){c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),l();return}b();const r=await w(u,i,f);h(r.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch(r){c.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:r.message})}finally{m()}}
//# sourceMappingURL=index.js.map
