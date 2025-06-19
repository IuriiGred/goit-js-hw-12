import{S as E,a as O,i as u}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const p=document.querySelector(".gallery"),g=document.querySelector(".display-loader"),f=document.querySelector(".load-more");function y(r){const t=r.map(({tags:i,likes:e,views:o,comments:a,downloads:P,webformatURL:S,largeImageURL:q})=>`<li class="item">
            <a href="${q}">
                <img class="gallery-img" src="${S}" alt="${i}"
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
                    <p class="amount">${a}</p>
                </div>
                <div class="description">
                    <h2 class="title">Downloads</h2>
                    <p class="amount">${P}</p>
                </div>
            </div>
            </a>
            
        </li>`).join("");p.insertAdjacentHTML("beforeend",t);let s=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});s.on("show.simplelightbox"),s.refresh()}function $(){p.innerHTML=""}function v(){g.classList.remove("is-hidden")}function h(){g.classList.add("is-hidden")}function L(){f.classList.remove("is-hidden")}function d(){f.classList.add("is-hidden")}const x="50797818-4d1ec28dd028369cf30507a0a",B="https://pixabay.com/api/";async function b(r,t=1,s=1){return(await O(B,{params:{key:x,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}})).data}const c=document.querySelector(".form");let m=15,n=1,l="",w=0;c.addEventListener("submit",C);function C(r){if(r.preventDefault(),n=1,$(),v(),l=r.currentTarget.elements.searchText.value.trim(),!l){u.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, you have to make a choice!"}),h(),d(),c.reset();return}b(l,n,m).then(t=>{if(t.hits.length===0)throw new Error(message);w=Math.ceil(t.totalHits/m),y(t.hits),L()}).catch(t=>{u.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d(),c.reset()}).finally(()=>{h(),c.reset()})}f.addEventListener("click",M);async function M(){n+=1,d(),v();try{if(n>w){u.error({backgroundColor:"#ef4040",timeout:2e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),d();return}L();const r=await b(l,n,m);y(r.hits);const t=document.querySelector(".item").getBoundingClientRect().height;window.scrollBy({height:t*2,behavior:"smooth"})}catch(r){alert(r.message)}finally{h()}}
//# sourceMappingURL=index.js.map
