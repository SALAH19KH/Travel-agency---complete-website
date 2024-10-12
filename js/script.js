function toggleNavbar(){
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('d-xs-sm-md-none');
}


function calcAvg(n_1, n_2, n_3){
    avg = (n_1 + n_2 + n_3 *2)/4;

    return avg;
}