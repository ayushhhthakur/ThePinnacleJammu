(function ($) {
    "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function () {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please provide your name",
                    minlength: "Your name must be at least 2 characters long"
                },
                subject: {
                    required: "Please provide a subject",
                    minlength: "The subject must be at least 4 characters long"
                },
                number: {
                    required: "Please provide a phone number",
                    minlength: "Your phone number must be at least 5 characters long"
                },
                email: {
                    required: "Please provide your email address"
                },
                message: {
                    required: "Please write a message",
                    minlength: "The message must be at least 20 characters long"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "contact_process.php",
                    success: function () {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                        });
                    },
                    error: function () {
                        $('#contactForm').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                            $('.modal').modal('hide');
                            $('#error').modal('show');
                        });
                    }
                });
            }
        });
    });

})(jQuery);
