const items = document.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('click', function (event) {
        // console.log(item);
        event.target.parentNode.removeChild(event.target)
    })
}