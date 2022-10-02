const BLACK_LIST_METHODS = ["log", "debug", "warn", "info"];
setTimeout(() => {
    deleteAllTrashFromConsoleVk();
    partialDisableNavigationBar(['l_msg']);
}, 0);

function deleteAllTrashFromConsoleVk() {
    if (!window.console) window.console = {};

    BLACK_LIST_METHODS.forEach((el, index) => {
        console[BLACK_LIST_METHODS[index]] = function () {
        };
    })
}
function partialDisableNavigationBar(whiteIDs){
    const navigationList = document.querySelector(".side_bar_ol");
    let arrayNavigationList = [].slice.call(navigationList.children);
    arrayNavigationList.map((el)=>{
        whiteIDs.includes(el.id) ? colorChange(el) : removeEventFormLink(el);
    })
}
function removeEventFormLink(element){
    const elementKishki = [].slice.call(element.children);
    const tegLink = elementKishki[0];
    tegLink.removeAttribute('href');
    tegLink.removeAttribute('onclick');
}
function colorChange(element){
    const elementKishki = [].slice.call(element.children);
    const tegLink = elementKishki[0];
    const text = [].slice.call(tegLink.children);
    text[1].style.color = '#71aaeb';
   /* console.log([].slice.call(tegLink));
    const text = [].slice.call(tegLink);
    */
}
