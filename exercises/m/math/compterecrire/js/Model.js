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

    var isintab = function(tab,x,y){
        for(var i= 0;i<tab.length;i++){
            if((tab[i].x1 == x) && (tab[i].y1 == y)){
                return true;
            }
        }
        return false;
    }

// private methods
    var init = function() {
        tab = [];
        console.log(nbPommes);
        for(var i=1;i<=nbPommes;i++){
            do{
                var canvas_x = Math.floor(Math.random()*4)*60;
                var canvas_y = Math.floor(Math.random()*2)*50;
            }while(isintab(tab,canvas_x,canvas_y) == true);
            tab.push({x1 : canvas_x, y1 : canvas_y, x2 : canvas_x+60/$('#bigCadre').css("width"), y2 : canvas_y+50/$('#bigCadre').css("height")});
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