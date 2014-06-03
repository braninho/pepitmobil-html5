m.math.compterecrire.Model = function () {

// public methods
    this.check = function() {
        okResult = true;
        return true;
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function() {
        okResult = false;
    };

    this.reset = function() {
    };

    this.getNbPommes = function(){
        return nbPommes;
    }

    this.setNbPommes = function(nbPomme){
        this.nbPommes = nbPomme;
    }

    this.getCanvas_x = function(){
        return canvas_x;
    }

    this.getCanvas_y = function(){
        return canvas_y;
    }

    this.getTab = function(){
        return tab;
    }

// private methods
    var init = function() {
        tab = [];
        console.log(nbPommes);
        for(var i=1;i<=nbPommes;i++){
            do{
                var canvas_x = Math.random();
                //var canvas_x = parseInt(Math.floor(Math.random()*parseInt(canvas[0].width)-52));
            }while(canvas_x+80/300>1);
            console.log("x "+i+" : "+canvas_x);

            do{
                var canvas_y = Math.random();
                //var canvas_y = parseInt(Math.floor(Math.random()*parseInt(canvas[0].height)-41));
            }while(canvas_y+50/150>1);
            console.log("y "+i+" : "+canvas_y);

            tab.push({x1 : canvas_x, y1 : canvas_y, x2 : canvas_x+80/300, y2 : canvas_y+50/150});
        }
    };


// private attributes
    var okResult;
    var canvas_x;
    var canvas_y;
    var nbPommes = 5;
    var tab;


    init();
};