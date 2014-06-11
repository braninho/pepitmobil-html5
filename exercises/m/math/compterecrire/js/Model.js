m.math.compterecrire.Model = function (nbPommes) {

// public methods
    this.check = function() {
        if($('input').val() == nbPommesCajeau){
            okResult = true;
        }else{
            okResult = false;
        }
        return okResult;
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function() {
        okResult = false;
        index++;
        nbPommesCajeau = 0;
    };

    this.reset = function() {
    };

    this.getCanvas_x = function(){
        return canvas_x;
    }

    this.getCanvas_y = function(){
        return canvas_y;
    }

    this.getTabPomme = function(){
        return tabPomme;
    }

    this.getTabExercice = function(index){
        return tabExercice[index];
    }

    this.getIndex = function(){
        return index;
    }

    this.getTailleX = function(){
        return tailleX;
    }

    this.getTailleY = function(){
        return tailleY;
    }

    this.getNbPommeCajeau = function(){
        return nbPommesCajeau;
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
    var init = function(){
        index = 0;
        if(nbPommes == 5 || nbPommes == 10){
            tailleX = 5;
            tailleY = 3;
        }else{
            tailleX = 5;
            tailleY = 4;
        }
        tabExercice = [];
        console.log("nombre de pommes : "+nbPommes);
        for(var i = 0;i<5;i++){

            tabPomme = [];
            for(var j=1;j<=nbPommes;j++){

                do{
                    var canvas_x = Math.floor((Math.random()*(tailleX-1)));
                    var canvas_y = Math.floor((Math.random()*(tailleY-1)));
                }while(isintab(tabPomme,canvas_x,canvas_y) == true);
            tabPomme.push({x1 : canvas_x, y1 : canvas_y});
            }
        tabExercice.push(tabPomme);
        }
    };


// private attributes
    var okResult;
    var canvas_x;
    var canvas_y;
    var nbPommesCajeau = 5;
    var tailleX;
    var tailleY;
    var tabPomme;
    var tabExercice;
    var index;

    init();
};