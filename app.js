require.config({
    shim : {
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        View: "lib/modules/view.min",
        Controller: "lib/modules/controller.min",
        jquery: "lib/jquery",
        bootstrap: "lib/bootstrap.min"
    }
});

requirejs(['js/script.min']);