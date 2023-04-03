function overflow() {
    var x = document.getElementById('ez').checked;
    if (x) {
        document.getElementById('body').style.overflow = 'hidden';
    } else {
        document.getElementById('body').style.overflowY = 'visible';
    }
}