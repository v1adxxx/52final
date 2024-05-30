import { displayPost } from "./displayPost.js";
import { loadComments } from "./loadComments.js";
export function loadPost(id) {
    fetch(`https://gorest.co.in/public-api/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            displayPost(data.data);
            loadComments(id);
        })
        .catch(error => console.error('Ошибка получения поста:', error));
}