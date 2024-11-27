function toggleStatus(element, type) {
    const sibling = type === 'tick' ? element.nextElementSibling : element.previousElementSibling;

    if (!element.classList.contains('active')) {
        element.classList.add('active');
        sibling.style.display = 'none';
    } else {
        element.classList.remove('active');
        sibling.style.display = 'inline';
    }
}
