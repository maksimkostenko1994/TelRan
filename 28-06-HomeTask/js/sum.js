function getSum() {
    let a = +document.getElementById('first').value;
    let b = +document.getElementById('second').value;
    let result = a + b;
    // if (result < 10) {
    //     document.getElementsByClassName('result')[0].innerText = 'The Sum is too small!'
    // } else if (result > 10) {
    //     document.getElementsByClassName('result')[0].innerText = 'The Sum is too big!'
    // } else {
    //     document.getElementsByClassName('result')[0].innerText = 'Bingo!'
    // }
    (result < 10) ? document.getElementsByClassName('result')[0].innerText = 'The Sum is too small!' :
        (result > 10) ? document.getElementsByClassName('result')[0].innerText = 'The Sum is too big!' :
            document.getElementsByClassName('result')[0].innerText = 'Bingo!';
}