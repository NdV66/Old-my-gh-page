define(function () {
    /* ------ CONTROLLER ------ */
    function Controller(model, view) {
        if(!(this instanceof Controller)) {
            return new Controller();
        }
        this.model = model;
        this.view = view;
    }

    Controller.prototype = {
        /**
         * This function binds all events for the page.
         */
        bindEvents: function() {
            var that = this;
            $(window).scroll(this.view.showSlideAnimation);
            $('a[href^="#"]').on('click', function(event) {
                var target = $(this).attr('href');
                target = target ? target : '#';
                event.preventDefault();
                that.view.scrollToElement(target);
            });
        }
    };

    return Controller;
});