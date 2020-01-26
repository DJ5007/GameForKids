function myFunction() {
    setTimeout(function () {
    let x = document.querySelector('.msg');
    let form = document.querySelector('.signup');
    x.id = "show";
    form.style.display = 'none';
    }, 1000);
}