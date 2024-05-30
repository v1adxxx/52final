export function displayPosts(posts) {
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