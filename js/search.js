import { suggestions } from './suggestions.js';

const searchItems = document.querySelector(".input-search-items");
const searchWarapper = document.querySelector(".search-item-wrapper");
const searchInput = document.querySelector("#search-input");


export const getSuggestions = (val) => {
    let filteredArray = [];
    if (val) {

        filteredArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(val.toLocaleLowerCase());
        });

        filteredArray = filteredArray.map((data) => {
            return data = `<li>` + data + `</li>`
        });
        showSuggestions(filteredArray);
        searchItems.addEventListener('click', (e) => {
            searchClicked(e)
        })
        searchWarapper.style.display = "block";
        searchWarapper.style.border = "1px solid var(--dark-grey)"
    } else {
        searchWarapper.style.display = "none";
    }
}

const showSuggestions = (list) => {
    let listData;

    if (!list.length) {
        listData = `<li>` + searchInput.value + `</li>`
    } else {
        listData = list.join("");
    }

    searchItems.innerHTML = (listData);

}

const searchClicked = (e) => {
    const searchItem = e.target.innerText;
    searchInput.value = searchItem;
    searchWarapper.style.display = "none";
}