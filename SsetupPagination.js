export function setupPagination(pagination) {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const pagesToShow = 10;
    const currentPage = pagination.page;
    const totalPages = pagination.pages;

    let startPage = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    if (currentPage > 1) {
        const prevLink = document.createElement('a');
        prevLink.href = `index.html?page=${currentPage - 1}`;
        prevLink.textContent = 'Предыдущая';
        paginationDiv.appendChild(prevLink);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = i === 1 ? 'index.html' : `index.html?page=${i}`;
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        paginationDiv.appendChild(pageLink);
    }

    if (currentPage < totalPages) {
        const nextLink = document.createElement('a');
        nextLink.href = `index.html?page=${currentPage + 1}`;
        nextLink.textContent = 'Следующая';
        paginationDiv.appendChild(nextLink);
    }
}