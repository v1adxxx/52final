import { displayPosts } from "./displayPosts.js";
import { setupPagination } from "./SsetupPagination.js";

export function loadPosts(page) {
    fetch(`https://gorest.co.in/public-api/posts?page=${page}`)
        .then(response => response.json())
        .then(data => {
            displayPosts(data.data);
            setupPagination(data.meta.pagination);
        })
        .catch(error => console.error('Ошибка получения постов:', error));
}