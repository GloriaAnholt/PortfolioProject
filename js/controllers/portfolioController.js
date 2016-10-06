(function(module){
    // Make a controller object, give it a show method, pass it to the global
    var portfolioController = {};

    portfolioController.showPortfolio = function() {
        $('.tab-content').hide();
        $('#projects').fadeIn('slow');
        $('#projects article').fadeIn('slow');
    };
    module.portfolioController = portfolioController;
})(window);