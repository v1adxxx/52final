export function displayPost(post) {
    document.getElementById('title').textContent = post.title;
    document.getElementById('content').textContent = post.body;
}