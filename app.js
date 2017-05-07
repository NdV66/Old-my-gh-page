require.config({
    shim : {
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        View: "lib/modules/view.min",
        Controller: "lib/modules/controller.min",
        jquery: "lib/jquery.min",
        bootstrap: "lib/bootstrap.min"
    }
});

requirejs(['js/script.min']);