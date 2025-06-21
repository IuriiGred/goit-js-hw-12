import{S as E,a as S,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=document.querySelector(".gallery"),b=document.querySelector(".display-loader"),y=document.querySelector(".load-more");function u(r){const t=r.map(({tags:a,likes:e,views:o,comments:n,downloads:P,webformatURL:q,largeImageURL:C})=>`<li class="gallery-item">
            <a href="${C}">
                <img class="gallery-img" src="${q}" alt="${a}"
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
                    <p class="amount">${P}</p>
                </div>
            </div>
            </a>
            
        </li>`).join("");g.insertAdjacentHTML("beforeend",t);let i=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.on("show.simplelightbox"),i.refresh()}function O(){g.innerHTML=""}function v(){b.classList.remove("is-hidden")}function h(){b.classList.add("is-hidden")}function L(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const $="50797818-4d1ec28dd028369cf30507a0a",k="https://pixabay.com/api/";async function w(r,t=1,i=1){return(await S(k,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:t}})).data}const m=document.querySelector(".form");let f=15,s=1,d="",p=0;m.addEventListener("submit",x);async function x(r){if(r.preventDefault(),s=1,O(),v(),d=r.currentTarget.elements.searchText.value.trim(),!d){l.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, you have to make a choice!"}),h(),c(),m.reset();return}try{const t=await w(d,s,f);if(t.hits.length===0)throw new Error(message);p=Math.ceil(t.totalHits/f),s===p?(l.info({backgroundColor:"#41bbbb",timeout:2e3,position:"topRight",message:"There's only one part in this query."}),c(),u(t.hits)):(u(t.hits),L())}catch{l.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c()}finally{h(),m.reset()}}y.addEventListener("click",B);async function B(){s+=1,c(),v();try{const r=await w(d,s,f);if(u(r.hits),s>=p){l.info({backgroundColor:"#41bbbb",timeout:2e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}L();const t=g.firstChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}catch(r){l.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:r.message})}finally{h()}}
//# sourceMappingURL=index.js.map
