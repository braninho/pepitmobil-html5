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
        console.log(model.getTab().length);
        for(var i=0;i<model.getTab().length;i++){

            var img = new Image();
            img.src = 'exercises/m/math/compterecrire/img/pommes.png';

            var x = (tab[i].x1)*canvas[0].width;
            var y = (tab[i].y1)*canvas[0].height;

            console.log();
            console.log(x);
            console.log(y);

            context.drawImage(img, x, y, 80, 50);
            context.stroke();
        }
    };

    var init_div = function (view) {
        operation(view);
    };


    var operation = function(view){
        //md et lg device
        var BigCadre_md_lg = $('<div/>',{
            class:'visible-md visible-lg',
            id:'BigCadre',
            style:'background:url("exercises/m/math/compterecrire/img/fond_complet.png") no-repeat center; min-height:654px;'
        });

        //cadre pour les pommes
        var cadre=$('<canvas/>',{
            class:'visible-md visible-lg',
            id:'cadre',
            style:' height:330px; width:430px; margin-left:140px;float:left;margin-top:80px;position:relative'
        });
        cadre.appendTo(BigCadre_md_lg);

        affichagePommes(cadre);

        //cadres avec les input
        var smallCadre_md_lg = $('<div/>',{
            class:'visible-md visible-lg',
            id:'smallCadre',
            style:'float:right; background:rgba(21,21,21,0.5); color:white; padding: 5px; margin-right:75px ; border-radius : 5px;'
        });

        var textBefore_md_lg=$('<p/>',{
            class:'visible-md visible-lg',
            id:'textBefore',
            html:'J\'ai récolté '
        });
        textBefore_md_lg.appendTo(smallCadre_md_lg);

        var input_md_lg = $('<input/>',{
            class:'visible-md visible-lg',
            id:'input',
            placeholder:'Nombre de pommes'
        });
        input_md_lg.appendTo(smallCadre_md_lg);

        var textAfter_md_lg = $('<p/>',{
            class:'visible-md visible-lg',
            id:'textBefore',
            html:'pommes'
        });
        textAfter_md_lg.appendTo(smallCadre_md_lg);

        var button_md_lg = $('<a/>', {
            href: '#',
            class: 'btn btn-md btn-lg btn-warning active',
            id: 'valid',
            role: 'button',
            html: 'Valider'
        });
        button_md_lg.appendTo(smallCadre_md_lg);

        smallCadre_md_lg.appendTo(BigCadre_md_lg);
        BigCadre_md_lg.appendTo(div);
    }

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};