jQuery(document).ready(function () {


    $('button[data-loading-text]')
            .on('click', function () {
                var btn = $(this);
                btn.button('loading');
                setTimeout(function () {
                    btn.button('reset');
                }, 3000);
            });


    $('#contactform').submit(function () {

        var action = $(this).attr('action');

        $("#message").slideUp(750, function () {
            $('#message').hide();
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                msg: $('#msg').val()
            },
            function (data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null)
                    $('#contactform').slideUp('slow');

            }
            );

        });

        return false;

    });
    $('#home-contactform').submit(function () {

        var action = $(this).attr('action');

        $("#home-message").slideUp(750, function () {
            $('#home-message').hide();
            $.post(action, {
                names: $('#names').val(),
                emails: $('#emails').val(),
                tel: $('#tel').val(),
                messages: $('#messages').val()
            },
            function (data) {
                document.getElementById('home-message').innerHTML = data;
                $('#home-message').slideDown('slow');
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null)
                    $('#home-contactform').slideUp('slow');

            }
            );

        });

        return false;

    });

    $('#callback').submit(function () {

        var action = $(this).attr('action');

        $("#home-error").slideUp(750, function () {
            $('#home-error').hide();
            $.post(action, {
                names: $('#names').val(),
                emails: $('#emails').val(),
                numbers: $('#numbers').val()
            },
            function (data) {
                document.getElementById('home-error').innerHTML = data;
                $('#home-error').slideDown('slow');
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null)
                    $('#register').slideUp('slow');

            }
            );

        });

        return false;

    });

});