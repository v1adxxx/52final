export function displayComments(comments) {
    const commentsList = document.getElementById('comments');
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${comment.name}: ${comment.body}`;
        commentsList.appendChild(listItem);
    });
}