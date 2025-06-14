import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";


const formEl = document.querySelector(".form");

formEl.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();

    clearGallery();
    showLoader();

    const query = event.currentTarget.elements.searchText.value;

    if(!query.trim()){
        iziToast.error({
            backgroundColor: "#ef4040",
            timeout: 2000,
            position: "topRight",
            message: "Sorry, you have to make a choice!",
    });
        formEl.reset();
        hideLoader();
        return;
    }
    
    getImagesByQuery(query)
        .then(data => {
            createGallery(data);
        })
        .catch(error => {
            iziToast.error({
                backgroundColor: "#ef4040",
                timeout: 2000,
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            
            formEl.reset();
        })
        .finally(() => {

            hideLoader();
            formEl.reset();
        })
}
