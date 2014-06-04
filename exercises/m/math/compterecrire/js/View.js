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
            id:'BigCadre-xs-sm',
            style:'background:url("exercises/m/math/compterecrire/img/fond_complet.png") no-repeat center; min-height:654px;'
        });

        //cadre pour les pommes
        var cadre_md_lg=$('<canvas/>',{
            class:'visible-md visible-lg',
            id:'cadre',
            style:' height:330px; width:430px; margin-left:140px;float:left;margin-top:80px;position:relative'
        });
        cadre_md_lg.appendTo(BigCadre_md_lg);

        affichagePommes(cadre_md_lg);

        //cadres avec les input
        var smallCadre_md_lg = $('<div/>',{
            class:'visible-md visible-lg',
            id:'smallCadre-md-lg',
            style:'float:right; background:rgba(21,21,21,0.5); color:white; padding: 5px; margin-right:75px ; border-radius : 5px;'
        });

        var textBefore_md_lg=$('<p/>',{
            class:'visible-md visible-lg',
            id:'textBefore-md-lg',
            html:'J\'ai récolté '
        });
        textBefore_md_lg.appendTo(smallCadre_md_lg);

        var input_md_lg = $('<input/>',{
            class:'visible-md visible-lg',
            id:'input-md-lg',
            placeholder:'Nombre de pommes'
        });
        input_md_lg.appendTo(smallCadre_md_lg);

        var textAfter_md_lg = $('<p/>',{
            class:'visible-md visible-lg',
            id:'textBefore-md-lg',
            html:'pommes'
        });
        textAfter_md_lg.appendTo(smallCadre_md_lg);



        //xs et sm devices
        var BigCadre_xs_sm = $('<div/>',{
            class:'visible-xs visible-sm',
            id:'BigCadre-xs-sm',
            style:'background:url("exercises/m/math/compterecrire/img/fond_complet.png") no-repeat center; min-height:654px;'
        });

        //cadre pour les pommes
        var cadre_xs_sm=$('<canvas/>',{
            class:'visible-xs visible-sm',
            id:'cadre-xs-sm',
            style:' height:330px; width:430px; margin-left:140px;float:left;margin-top:80px;position:relative'
        });
        cadre_xs_sm.appendTo(BigCadre_md_lg);

        affichagePommes(cadre_xs_sm);

        //cadres avec les input
        var smallCadre_xs_sm = $('<div/>',{
            class:'visible-xs visible-sm',
            id:'smallCadre-xs-sm',
            style:'float:right; background:rgba(21,21,21,0.5); color:white; padding: 5px; margin-right:75px ; border-radius : 5px;'
        });

        var textBefore_xs_sm=$('<p/>',{
            class:'visible-xs visible-sm',
            id:'textBefore-xs-sm',
            html:'J\'ai récolté '
        });
        textBefore_xs_sm.appendTo(smallCadre_xs_sm);

        var input_xs_sm = $('<input/>',{
            class:'visible-xs visible-sm',
            id:'input-xs-sm',
            placeholder:'Nombre de pommes'
        });
        input_xs_sm.appendTo(smallCadre_xs_sm);

        var textAfter_xs_sm = $('<p/>',{
            class:'visible-xs visible-sm',
            id:'textBefore-xs-sm',
            html:'pommes'
        });
        textAfter_xs_sm.appendTo(smallCadre_xs_sm);

        var button = $('<a/>', {
            href: '#',
            class: 'btn btn-warning active',
            id: 'valid',
            role: 'button',
            html: 'Valider'
        });
        button.appendTo(smallCadre_md_lg);
        button.appendTo(smallCadre_xs_sm);

        smallCadre_md_lg.appendTo(BigCadre_md_lg);
        BigCadre_md_lg.appendTo(div);

        smallCadre_xs_sm.appendTo(BigCadre_xs_sm);
        BigCadre_xs_sm.appendTo(div);
    }

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};