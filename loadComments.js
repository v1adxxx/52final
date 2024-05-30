import { displayComments } from "./displayComments.js";
export function loadComments(postId) {
    fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
        .then(response => response.json())
        .then(data => {
            displayComments(data.data);
        })
        .catch(error => console.error('Ошибка получения комментариев:', error));
}