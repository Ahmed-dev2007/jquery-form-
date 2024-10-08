$(function () {

    $('#Validation-form').on('submit', function (e) {
        e.preventDefault();
        const fname = $('#fname').val();
        const lname = $('#lname').val();
        const email = $('#password').val();
        console.log(fname, lname, password);

        if (fname == "") {
            $('#err_fname').text("fname cannot be blank")
        } else {
            $('#err_fname').text("")
        }
        if (lname == "") {
            $('#err_lname').text("lname cannot be blank")
        } else {
            $('#err_lname').text("")
        }
        if (email == "") {
            $('#err_password').text("Password cannot be blank")
        } else {
            $('#err_password').text("")
        }

    })

});