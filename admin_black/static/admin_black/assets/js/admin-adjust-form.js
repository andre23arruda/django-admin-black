var form_inputs = document.querySelectorAll('form .col-md-7')
form_inputs.forEach(input => {
    input.classList.remove('col-md-7')
    input.classList.add('col-12')

});
