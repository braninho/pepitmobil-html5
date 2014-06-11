m.math.compterecrire.Controller = function (m, v) {

// private methods

    var find_pos = function(obj){
        var left = 0,top = 0;

        if(obj.offsetParent){
            do{
                left += obj.offsetLeft;
                top += obj.offsetTop;
            }while(obj = obj.offsetParent);
            left -= document.documentElement.scrollLeft + document.body.scrollLeft;
            top -= document.documentElement.scrollTop + document.body.scrollTop;
            return {x:left,y:top};
        }
        return undefined;
    }

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

        $('#cadre').on('click',function (e){
            var canvas = document.getElementById('cadre');
            var pos = find_pos(canvas);
            var x = e.clientX - pos.x;
            var y  = e.clientY - pos.y;

            console.log("x : "+x+" et y : "+y);

            for(var i=0;i < model.getTabPomme().length;i++){

                if(Math.floor(x/1.43) > model.getTabPomme()[i].x1){
                    if(Math.floor(y/2.2) > model.getTabPomme()[i].y1){
                        console.log("clickx : "+Math.floor(x/1.43)+" , clicky : "+Math.floor(y/2.2));
                        console.log("pomme clicker :  x = "+model.getTabPomme()[i].x1+" et y = "+model.getTabPomme()[i].y1);
                        model.getTabPomme().splice(i,1);

                        view.update();
                    }
                }
            }
        });


        $(window).resize(function(){
           view.resize();
        });
    };

// private attributes
    var model = m;
    var view = v;

    init();
};