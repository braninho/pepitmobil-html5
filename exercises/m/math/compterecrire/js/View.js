m.math.compterecrire.View = function (mdl, div) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.compterecrire.Model();
        init_div(view);
        controller = new m.math.compterecrire.Controller(model, this);
    };

    this.resize = function(){
        size_canvas();
    }

    this.next = function () {
        model.next();

        this.update();
    };

    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods
    var affichagePommes  = function(canvas){
        var tab = model.getTab();
        var context = canvas[0].getContext("2d");

        var tailleX = 5;
        var tailleY = 3;
        var largueur = canvas[0].width / tailleX;
        var hauteur = canvas[0].height / tailleY;

        for(var i=1;i<tailleX;i++){
            context.moveTo(i*largueur,0);
            context.lineTo(i*largueur,canvas[0].height);
        }
        for(var j=1;j<tailleY;j++){
            context.moveTo(0,j*hauteur);
            context.lineTo(canvas[0].width,j*hauteur);
        }

        console.log(model.getTab().length);
        for(var i=0;i<model.getTab().length;i++){

            var img = new Image();
            img.src = 'exercises/m/math/compterecrire/img/pommes.png';

            console.log();
            console.log(tab[i].x1);
            console.log(tab[i].y1);

            context.drawImage(img, tab[i].x1, tab[i].y1, 60, 50);
            context.stroke();
        }
    };


    var size_canvas = function(){
        var canvas = parseInt($('#cadre').css("width"));
        var canvas_parent = parseInt($('#cadre').parent().css("width"));
        var canvas_expected = parseInt(canvas_parent*0.8);

        if(canvas_parent > 537){
            $('#cadre').css("width","430");
            $('#cadre').css("height","330");
        }
        else{
            $('#cadre').css("width",canvas_expected);
            $('#cadre').css("height",parseInt(canvas_expected/1.30));
        }

    }

    var init_div = function (view) {
        operation(view);
    };


    var operation = function(view){
        //md et lg device
        var bigCadre = $('<div/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'bigCadre',
            style:'background:url("exercises/m/math/compterecrire/img/fond_complet.png") no-repeat center; min-height:654px; max-width:884px; margin:auto;'
        });
        bigCadre.appendTo(view);

        //cadre pour les pommes
        var cadre=$('<canvas/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'cadre',
            style:'border:1px solid black; width:430px; height:330px; margin-left:7%; float:left; margin-top:8%; position:relative;'
        });
        cadre.appendTo(bigCadre);

        size_canvas();
        affichagePommes(cadre);


        //cadres avec les input
        var smallCadre = $('<div/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'smallCadre',
            style:'float:right; background:rgba(21,21,21,0.5); color:white; padding:0.5%; margin-right:3%; margin-top:3%; border-radius:5px;'
        });
        smallCadre.appendTo(bigCadre);

        var textBefore_md_lg=$('<p/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'textBefore',
            html:'J\'ai récolté '
        });
        textBefore_md_lg.appendTo(smallCadre);

        var input_md_lg = $('<input/>',{
            class:'form-control',
            id:'input',
            placeholder:'Nombre de pommes'
        });
        input_md_lg.appendTo(smallCadre);

        var textAfter_md_lg = $('<p/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'textBefore',
            html:'pommes'
        });
        textAfter_md_lg.appendTo(smallCadre);

        var button = $('<a/>', {
            href: '#',
            class: 'btn btn-warning active',
            id: 'valid',
            role: 'button',
            html: 'Valider'
        });
        button.appendTo(smallCadre);
    }

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};