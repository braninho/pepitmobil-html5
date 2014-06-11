m.math.compterecrire.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {
    };

    this.buildExplanation = function (div, currentExercise) {
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        if(currentExercise == 1){
            view = new m.math.compterecrire.View(this, div,5);
        }else if(currentExercise == 2){
            view = new m.math.compterecrire.View(this, div,10);
        }else if(currentExercise == 3){
            view = new m.math.compterecrire.View(this, div,20);
        }
        questionIndex = 1;
        currentScore = this.getQuestionScore(currentExercise, currentModule);
    };

    this.error = function () {
        if (currentScore > 0) {
            --currentScore;
        }
    };

    this.finishModule = function (currentExercise, currentModule) {
        return questionIndex == this.getQuestionNumber(currentExercise, currentModule);
    };

    this.getExerciseList = function () {
        return {
            title: [ 'Exercice 1', 'Exercice 2', 'Exercice 3'],
            subTitle: ['De 1 à 5', 'De 1 à 10', 'De 1 à 20' ]
        };
    };

    this.getGoodResponseMessage = function () {
        return 'Bonne réponse !';
    };

    this.getLevel = function () {
        return 'm';
    };

    this.getModuleList = function (currentExercise) {
        return {
            title: [ 'Module 1'],
            subTitle: ['']
        };
    };

    this.getName = function () {
        return "Le pommier : compter, et écrire";
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionNumber = function (currentExercise, currentModule) {
        return 5;
    };

    this.getQuestionScore = function (currentExercise, currentModule) {
        return 4;  // total = 1000 pts
    };

    this.getScore = function () {
        return currentScore;
    };

    this.getSubject = function () {
        return 'francais';
    };

    this.getTopic = function () {
        return 'compterecrire';
    };

    this.getWrongResponseMessage = function () {
        return 'Mauvaise réponse';
    };

    this.initScore = function () {
        // un exercice à un module
        return new Score([ [ -1 ], [ -1 ], [ -1 ] ]);
    };

    this.next = function () {
        engine.next();
    };

    this.nextQuestion = function (currentExercise, currentModule) {
        questionIndex++;
        if (questionIndex <= this.getQuestionNumber(currentExercise, currentModule)) {
            currentScore = this.getQuestionScore(currentExercise, currentModule);
            view.next();
        }
    };

// private methods
    var init = function (e) {
        engine = e;
    };

// private attributes
    var view;
    var engine;

    var questionIndex;
    var currentScore;

    init(e);
};