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
         * This function gets info about repos from fithub API and call
         * the View (to show it)
         */
        repos: function() {
            var that = this;
            $.getJSON(this.model.createReposUrl(), function() {})
            .done(function(json) {
                that.view.makeParentCardEmpty();
                $.each(json, function (key, data) {
                    that.view.createCard({
                        name: data.name,
                        owner: data.owner.login,
                        url: data.html_url,
                        fork: data.fork,
                        description: data.description,
                        branch: data.default_branch
                    });
                });
            })
            .fail(function() {
                
            });
        },
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