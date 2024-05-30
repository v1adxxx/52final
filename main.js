import { setupPagination } from "./SsetupPagination.js";
import { displayPost } from "./displayPost.js";
import { displayComments } from "./displayComments.js";
import { displayPosts } from "./displayPosts.js";
import { loadPost } from "./loadPost.js";
import { loadComments } from "./loadComments.js";
import { loadPosts } from "./loadPosts.js";


document.addEventListener('DOMContentLoaded', () => {
    const pageParams = new URLSearchParams(window.location.search);
    const page = pageParams.get('page') || 1;
    const id = pageParams.get('id');

    if (id) {
        loadPost(id);
    } else {
        loadPosts(page);
    }
});











