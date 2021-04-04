var form_inputs = document.querySelectorAll('form .col-md-7')
form_inputs.forEach(input => {
    input.classList.remove('col-md-7')
    input.classList.add('col-11')
})

var dynamic_arrays = document.querySelectorAll('.dynamic-array-widget')
dynamic_arrays.forEach(dynamic_array => {
    dynamic_array.parentElement.classList.add('width-100')
    dynamic_array.firstChild.classList.add('width-100')
})
