document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

function loadPosts() {
    fetch('https://gorest.co.in/public-api/posts')
        .then(response => response.json())
        .then(data => {
            displayPosts(data.data);
        })
        .catch(error => console.error('Ошибка получения постов:', error));
}

function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        postsDiv.appendChild(postTitle);
    });
}