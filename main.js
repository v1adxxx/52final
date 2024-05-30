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

function loadPosts(page) {
    fetch(`https://gorest.co.in/public-api/posts?page=${page}`)
        .then(response => response.json())
        .then(data => {
            displayPosts(data.data);
        })
        .catch(error => console.error('Ошибка получия постов:', error));
}

function loadPost(id) {
    fetch(`https://gorest.co.in/public-api/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            displayPost(data.data);
            loadComments(id);
        })
        .catch(error => console.error('Ошибка получения поста:', error));
}

function loadComments(postId) {
    fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
        .then(response => response.json())
        .then(data => {
            displayComments(data.data);
        })
        .catch(error => console.error('Ошибка получения комментариев:', error));
}

function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postLink = document.createElement('a');
        postLink.href = `post.html?id=${post.id}`;
        postLink.textContent = post.title;
        postsDiv.appendChild(postLink);
        postsDiv.appendChild(document.createElement('br'));
    });
}

function displayPost(post) {
    document.getElementById('title').textContent = post.title;
    document.getElementById('content').textContent = post.body;
}

function displayComments(comments) {
    const commentsList = document.getElementById('comments');
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${comment.name}: ${comment.body}`;
        commentsList.appendChild(listItem);
    });
}