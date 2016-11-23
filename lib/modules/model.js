/* ------ MODEL ------ */
define(function () {
    
    /* ------ MODEL ------ */
    function Model(username) {
        if(!(this instanceof Model)) {
            return new Model();
        }
        this.username = username;
        this.started = "https://api.github.com/";
    }
    Model.prototype = {
        /**
         * This function creates a URL to the user's github
         * @returns {String} URL to user's github
         */
        createReposUrl: function() {
            return this.started + "users/" + this.username + "/repos";
        }
    };
    
    return Model;
});