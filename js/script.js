define(['jquery', 'Model', 'View', 'Controller', 'bootstrap'], function ($, Model, View, Controller) {
    $(document).ready(function init(){
        var APP = APP || {};
        APP.controller = {};

        /* ------ ------ LOGICAL PART ------ ------ */
        APP.controller = new Controller(new Model("NdV66"), new View());
        //APP.controller.repos();
        APP.controller.bindEvents();
    });
});
