define(function () {    
    /* ------ VIEW ------ */
    function View() {
        if(!(this instanceof View)) {
            return new View();
        } 
        this.cardParent = $('#card-parent');
    }
    View.prototype = {
        /**
         * This function handles with animation (using classes from CSS)
         * @returns {undefined}
         */
        showSlideAnimation: function(){   
            $('.slideanim').each(function(){
                var element = $(this),
                    pos = element.offset().top,
                    winTop = $(window).scrollTop(),                    
                    isVisible = isInView(element, 0);

                if (pos < winTop + 900) {
                  element.addClass('slide');
                }                
                if(!isVisible) {
                    element.removeClass('slide');                    
                }         
            });             
            
            /**
             * Chceck if the elements is in view.
             * @param {type} what - what should be in view
             * @param {type} offset - how many pixels element should be detect before (or after).
             * @returns {Boolean}
             */
            function isInView(what, offset) {
                var win = $(window),  
                    bounds = what.offset(),                        
                    viewTop = win.scrollTop(),
                    viewBottom = viewTop + win.height() - offset,                                           
                    boundsBottom = bounds.top + what.outerHeight();

                return(!(viewBottom < bounds.top || viewTop > boundsBottom));
            }
        },
        /**
         * This function creates a one cart for represent of one repo from github.
         * @param {type} result - object with properities for one repo-card.
         */
        createCard: function(result) {
            this.cardParent.append('<div id="' + result.name + '" class="card slideanim col-md-4 col-sm-12 col-xs-12">' +
                                        '<div class="panel panel-default text-left">' +
                                            '<div class="panel-heading"><a href="' + result.url + '"><h2>' + result.name + '</h2></a></div>'+
                                            '<div class="panel-body">'+
                                                '<p><strong>OWNER: </strong>' + result.owner + '</p>' +
                                                '<p><strong>FORK: </strong>' + result.fork + '</p>'+
                                                '<p><strong>DEFAULT BRANCH: </strong>' + result.branch +'</p>'+
                                            '</div>'+
                                            '<div class="panel-footer">' + result.description + '</div>' +
                                        '</div>'+
                                    '</div>'
            
             );
        },
        /**
         * This function removes all child from card parent.
         */
        makeParentCardEmpty: function() {
            this.cardParent = this.cardParent.empty();
        },
        /**
         * This function create scrolling to the element.
         * @param {type} targetName - name of current target
         */
        scrollToElement: function(targetName) {                         
            $('html, body').stop().animate({
                scrollTop: $(targetName).offset().top
            }, 500);            
        }
    };   
    
    return View;
});


