import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, showButton, listElement } from "./js/render-functions";

const formEl = document.querySelector(".form");

let imgOnPage = 15;
let currentPage = 1;
let query = "";
let totalPages = 0;

formEl.addEventListener("submit", handleForm);

async function handleForm(event) {
    event.preventDefault();
    
    currentPage = 1;
    clearGallery();
    showLoader();

    query = event.currentTarget.elements.searchText.value.trim();

    if(!query){
        iziToast.error({
            backgroundColor: "#ef4040",
            timeout: 2000,
            position: "topRight",
            message: "Sorry, you have to make a choice!",
        });
            hideLoader();
            hideLoadMoreButton();
            formEl.reset();
            return;
    }
    try{
        const data = await getImagesByQuery(query, currentPage, imgOnPage);
            
        if(data.hits.length === 0){
            throw new Error(message);
        }

        totalPages = Math.ceil(data.totalHits / imgOnPage);

        if(currentPage === totalPages){
            iziToast.info({
                backgroundColor: "#41bbbb",
                timeout: 2000,
                position: "topRight",
                message: "There's only one part in this query.",
            });
            
            hideLoadMoreButton();
            createGallery(data.hits);
        } else {
            createGallery(data.hits);
            showLoadMoreButton();
        }        
    }
        
    catch(error) {
        iziToast.error({
            backgroundColor: "#ef4040",
            timeout: 2000,
            position: "topRight",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        
        hideLoadMoreButton()
    }

    finally{
        hideLoader();
        formEl.reset();
    }
}

showButton.addEventListener('click', handleClick);

async function handleClick() {
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, currentPage, imgOnPage);
        
        createGallery(data.hits);

        if(currentPage >= totalPages){            
            iziToast.info({
                backgroundColor: "#41bbbb",
                timeout: 2000,
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results.",
            });
            return;
        }
        
        showLoadMoreButton();

        const heighElement = listElement.firstChild.getBoundingClientRect().height;

        window.scrollBy({
            top: heighElement * 2,
            behavior: 'smooth'
        })        
    }

    catch(error) {
        iziToast.error({
            backgroundColor: "#ef4040",
            timeout: 2000,
            position: "topRight",
            message: error.message,
        });            
    }

    finally{
        hideLoader();
    }
}
