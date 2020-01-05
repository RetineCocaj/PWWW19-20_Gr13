function addVisitForPage(page) {
    if (localStorage.getItem(page) == null) {
        localStorage.setItem(page, 1);
    } else {
        localStorage.setItem(page, parseInt(localStorage.getItem(page)) + 1);
    }
    console.log(localStorage.getItem(page));
}