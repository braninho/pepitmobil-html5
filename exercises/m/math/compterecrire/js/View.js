m.math.compterecrire.View = function (mdl, div, maxPommes) {

// public methods
    this.error = function () {
        module.error();
        bootstrap_alert.info(module.getWrongResponseMessage(),'');
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.compterecrire.Model(maxPommes);
        init_div(view);
        controller = new m.math.compterecrire.Controller(model, this);
    };

    this.resize = function(){
        size_canvas();
    }

    this.next = function () {
        model.next();
        this.update();
        $('input').val('');
        affichagePommes(model.getIndex());
        size_canvas();
    };

    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods
    var affichagePommes  = function(index){
        var c = $('#cadre')[0];
        var tab = model.getTabPomme();
        var context = c.getContext("2d");
        var width = parseInt($('#cadre').css("width"));
        var height = parseInt($('#cadre').css("height"));
        var largeur = 300 / model.getTailleX();
        var hauteur = 150 / model.getTailleY();

        console.log("canvas css width "+ c.width);
        console.log(largeur);
        console.log("canvas css height "+height);

        context.clearRect(0,0,width,height);

       /* for(var i=1;i<model.getTailleX();i++){
            context.moveTo(i*largeur,0);
            context.lineTo(i*largeur,height);
        }
        for(var j=1;j<model.getTailleY();j++){
            context.moveTo(0,j*hauteur);
            context.lineTo(width,j*hauteur);
        }*/

        for(var i=0;i<model.getTabExercice(index).length;i++){
            var img = new Image();
            img.src = 'exercises/m/math/compterecrire/img/pommes.png';

            //img.onload = function(tab){
            console.log("pommeX "+i+" : "+tab[i].x1);
            console.log("pommeY "+i+" : "+tab[i].y1);
            context.drawImage(img, tab[i].x1*largeur, tab[i].y1*hauteur, 60, 50);
            context.stroke();
            //}
        //context.stroke();
        }
    };

    var size_canvas = function(){
        var canvas = parseInt($('#cadre').css("width"));
        var canvas_parent = parseInt($('#cadre').parent().css("width"));
        var canvas_expected = parseInt(canvas_parent*0.7);

        if(canvas_parent > 615){
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
            style:'width:430; height:330; margin-left:7%; float:left; margin-top:8%; position:relative;'
        });
        cadre.appendTo(bigCadre);

        console.log($('#cadre').css("width"));
        affichagePommes(model.getIndex());
        size_canvas();

        //cadre pour le cajeau
        var cajeau = $('<canvas/>',{
           class:'visible-mdd visible-lg visible-xs visible-sm',
           id:'cajeau',
           style:'width:290px;height:100px;float:left;margin-left:-7%;margin-top:60%;position:relative;'
        });
        cajeau.appendTo(bigCadre);

        //cadres avec les input
        var smallCadre = $('<div/>',{
            class:'visible-md visible-lg visible-xs visible-sm',
            id:'smallCadre',
            style:'float:right; background:rgba(21,21,21,0.5); color:white; padding:0.5%; margin-right:1%; margin-top:1%; border-radius:5px;'
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
            style:'width:145px;',
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