function minus() {
    document.getElementsByName('check-age')[0].nextElementSibling.nextElementSibling.stepDown()
    let age = parseInt(document.getElementById('age').value);
    if (age >= 14 || age <= 90)
        document.getElementById('check-result').value = 'Is in range!';
    if (age < 14 || age > 90)
        document.getElementById('check-result').value = 'Out of range!';
}


function plus() {
    document.getElementsByName('check-age')[1].previousElementSibling.stepUp();
    let age = parseInt(document.getElementById('age').value);
    if (age >= 14 || age <= 90)
        document.getElementById('check-result').value = 'Is in range!';
    if (age < 14 || age > 90)
        document.getElementById('check-result').value = 'Out of range!';
}

