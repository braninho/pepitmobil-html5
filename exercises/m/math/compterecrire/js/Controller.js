m.math.compterecrire.Controller = function (m, v) {

// private methods
    var init = function () {
        $('#valid').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.check()) {
                view.update();
            } else {
                view.error();
            }
        });
        $(window).resize(function(){
           view.resize();
        });
    };

// private methods

// private attributes
    var model = m;
    var view = v;

    init();
};