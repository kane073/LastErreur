/****************************************************************************************************** 
 * @description Projet ingénieur de Télécom bretagne - Poseur d'opération
 * @version 1.0
 * Date de la dernière modification : 14/04/2013
 * @author Alassane KANE
 *******************************************************************************************************/
/********************************************************************************************************
 * @description Cette classe affiche la grille et grère aussi toute les actions faite dans la grille.
 *              Elle servira à afficher les differentes opérations et à les résoudres aussi.
 * 
 * @argument {type} idDiv est le id de l'element div qui va contenir la grille.             
 * @returns {Grillage}
 */
function Grillage(idDiv) {

    var listeErreurSimple = [];

    /***************************************************************************
     * @description On applique un style au contenaire principal, 
     * @type @exp;document@call;getElementById
     */
    var content = document.getElementById(idDiv);
    var styleContent = "border: 2px solid #000;width: 810px; height: 600px; border:dashed 5px #5cbeff;\n\
                        -moz-border-radius-topleft: 6px;-moz-border-radius-topright:5px;\n\
                        -moz-border-radius-bottomleft:5px;-moz-border-radius-bottomright:5px;\n\
                        -webkit-border-top-left-radius:6px;-webkit-border-top-right-radius:5px;\n\
                        -webkit-border-bottom-left-radius:5px;-webkit-border-bottom-right-radius:5px;\n\
                        border-top-left-radius:6px;border-top-right-radius:5px;\n\
                        border-bottom-left-radius:5px;border-bottom-right-radius:5px;";
    content.setAttribute("style", styleContent);

    /*****************************************************************************
     * @description Création du button "Enoncé" qui servira à afficher l'énoncé d'un exercice. 
     * @type @exp;document@call;createElement
     */
    var buttonEnonce = document.createElement("button");
    var styleButtonEnonce = "";
    buttonEnonce.setAttribute("id", "buttonEnonce");
    buttonEnonce.setAttribute("class", "buttonPoseurOperation");
    buttonEnonce.setAttribute("style", styleButtonEnonce);
    buttonEnonce.innerHTML = "Enoncé";
    content.appendChild(buttonEnonce);

    /*****************************************************************************
     * @description Création du button "Operateurn" qui servira à afficher la bare d'outils
     * @type @exp;document@call;createElement
     */
    var vuBareOutils = false;
    var buttonOperateur = document.createElement("button");
    var styleButtonOperateur = "position: relative;right: -600px;";
    buttonOperateur.setAttribute("id", "buttonOperateur");
    buttonOperateur.setAttribute("class", "buttonPoseurOperation");
    buttonOperateur.setAttribute("style", styleButtonOperateur);
    buttonOperateur.innerHTML = "Outils";
    content.appendChild(buttonOperateur);

    buttonOperateur.addEventListener('click', function(e) {
        if (vuBareOutils === false) {
            document.getElementById(idDiv).querySelector("#barreOutil").style.display = "run-in";
            vuBareOutils = true;
        } else {
            document.getElementById(idDiv).querySelector("#barreOutil").style.display = "none";
            vuBareOutils = false;
        }
    }, false);

    var divoutil = document.createElement("div");
    var styleMenu = 'border:inset 5px #5cbeff;-moz-border-radius: 5px;-webkit-border-radius: 5px;\n\
                    border-radius: 5px;z-index: 5;margin-left: 390px;margin-top: -35px;\n\
                    position: absolute;display:none;width: 300px;height: 70px;cursor: pointer;';
    divoutil.setAttribute("style", styleMenu);
    divoutil.setAttribute("id", "barreOutil");

    var canvasOutil = document.createElement("canvas");
    canvasOutil.setAttribute("width", "300");
    canvasOutil.setAttribute("height", "70");
    canvasOutil.setAttribute("id", "canvasElementOutil");

    var contextOutils = canvasOutil.getContext('2d');
    var imageOutils = new Image(300, 70);
    imageOutils.src = './img/bareOutil.svg';
    imageOutils.onload = function() {
        contextOutils.drawImage(imageOutils, 0, 0, imageOutils.width, imageOutils.height);
    };

    divoutil.appendChild(canvasOutil);
    content.appendChild(divoutil);

    canvasOutil.onmousedown = function(event) {
        var positionSourcie = getSourisPositionMenuOutils(event);
        var positionBontton = getCoordonneButtonOutils(positionSourcie.x, positionSourcie.y);
        console.log(positionBontton);

    };
    function getCoordonneButtonOutils(x, y) {
        contextOutils.globalAlpha = 0.5;

        if (y >= 0 && y < 35) {
            if (x >= 0 && x <= 37) {
                //contextOutils.fillRect(0, 0, 37, 35);
                return {x: 0, y: 0, val: "1"};
            }
            if (x >= 38 && x <= 74) {
                // contextOutils.fillRect(38, 0, 37, 35);
                return {x: 38, y: 0, val: "2"};
            }
            if (x >= 75 && x <= 111) {
                // contextOutils.fillRect(75, 0, 37, 35);
                return {x: 75, y: 0, val: "3"};
            }
            if (x >= 112 && x <= 148) {
                //contextOutils.fillRect(112, 0, 37, 35);
                return {x: 112, y: 0, val: "4"};
            }
            if (x >= 149 && x <= 186) {
                // contextOutils.fillRect(150, 0, 37, 35);
                return {x: 150, y: 0, val: "5"};
            }
            if (x >= 187 && x <= 222) {
                // contextOutils.fillRect(187, 0, 37, 35);
                return {x: 187, y: 0, val: "+"};
            }
            if (x >= 223 && x <= 259) {
                //contextOutils.fillRect(224, 0, 37, 35);
                return {x: 224, y: 0, val: "*"};
            }
            if (x >= 260 && x <= 296) {
                // contextOutils.fillRect(261, 0, 37, 35);
                return {x: 261, y: 0, val: "del"};
            }
        }
        if (y >= 36 && y <= 72) {
            if (x >= 0 && x <= 37) {
                // contextOutils.fillRect(0, 35, 37, 35);
                return {x: 0, y: 35, val: "6"};
            }
            if (x >= 38 && x <= 74) {
                // contextOutils.fillRect(38, 35, 37, 35);
                return {x: 38, y: 35, val: "7"};
            }
            if (x >= 75 && x <= 111) {
                // contextOutils.fillRect(75, 35, 37, 35);
                return {x: 75, y: 35, val: "8"};
            }
            if (x >= 112 && x <= 148) {
                //  contextOutils.fillRect(112, 35, 37, 35);
                return {x: 112, y: 35, val: "9"};
            }
            if (x >= 149 && x <= 186) {
                //contextOutils.fillRect(150, 35, 37, 35);
                return {x: 150, y: 35, val: "0"};
            }
            if (x >= 187 && x <= 222) {
                // contextOutils.fillRect(187, 35, 37, 35);
                return {x: 187, y: 35, val: "-"};
            }
            if (x >= 223 && x <= 259) {
                // contextOutils.fillRect(224, 35, 37, 35);
                return {x: 224, y: 35, val: "/"};
            }
            if (x >= 260 && x <= 296) {
                // contextOutils.fillRect(261, 35, 37, 35);
                return {x: 261, y: 35, val: "equal"};
            }
        }
    }
    function effaceOpaciteMenuOutil(x, y) {
        contextOutils.globalAlpha = 1;
        contextOutils.fillRect(x, y, 37, 35);
    }

    function getSourisPositionMenuOutils(event) {
        var elementCanvas = canvasOutil;
        var ox = elementCanvas.scrollLeft - elementCanvas.offsetLeft;
        var oy = elementCanvas.scrollTop - elementCanvas.offsetTop;
        while (elementCanvas = elementCanvas.offsetParent) {
            ox += elementCanvas.scrollLeft - elementCanvas.offsetLeft;
            oy += elementCanvas.scrollTop - elementCanvas.offsetTop;
        }
        return {x: event.clientX + ox, y: event.clientY + oy};
    }
    /*****************************************************************************
     * @description Création du div "grille" qui contiendra la grille
     * @type @exp;document@call;createElement
     */
    var grille = document.createElement("div");
    var styleGrille = "position: relative;background-color: #CCBEBE;border: 2px solid #CCBEBE;width: 801px;height: 512px;bottom: -50px;margin-left: auto;margin-right: auto;"
    grille.setAttribute("id", "grille");
    grille.setAttribute("style", styleGrille);

    /*****************************************************************************
     * @description Création d'un élément canvas, dans la quel sera déssiné la grille.
     * @type @exp;document@call;createElement
     */
    var canvasGrille = document.createElement("canvas");
    var widthCanvas = 800;
    var heightCanvas = 512;
    var styleCanvasGrille = "position: absolute;";
    canvasGrille.setAttribute("width", widthCanvas);
    canvasGrille.setAttribute("height", heightCanvas);
    canvasGrille.setAttribute("id", "canvasGrille");
    canvasGrille.setAttribute("style", styleCanvasGrille);
    grille.appendChild(canvasGrille);

    /*****************************************************************************
     * @description Appelle de la méthode getContext qui récupéré pour savoir dans 
     * quel contexte de dessin (2D ou 3D) le script va pouvoir agir, et de quelles 
     * fonctions il pourra disposer. Le contexte sera l'élément 
     * central de gestion de Canvas.
     * @type @exp;canvasGrille@call;getContext
     */
    var contextCanvasGrille = canvasGrille.getContext('2d');
    /**
     * 
     * @type Number est la longueur et largueur d'une cellule de la grille
     */
    var tailleCase = 30;
    /**
     * 
     * @type Array Contient les coordonnées de chaque cellule de la grille
     */
    var tableauDeGille = [];

    /**
     * 
     * @type type Coordonnée de la dernière cellule selectionné dans la grille
     */
    var DernierCelluleSelectionne = {x: 0, y: 0};

    /**
     * 
     * @type cellule contient un élément canvas sélectionné
     */
    var CanvasCelluleSelectionne;

    /*******************************************************************************
     * Ici nous dessinons la grille et on stocke dans tableauDeGille les coordonnées 
     * de chaque cellule
     */
    contextCanvasGrille.fillStyle = "#fff";
    for (var i = 0; i < parseInt(widthCanvas / tailleCase); i++) {
        for (var j = 0; j < parseInt(heightCanvas / tailleCase); j++) {
            contextCanvasGrille.fillRect(i * 32, j * 32, 30, 30);
            tableauDeGille.push({x: i * 32, y: j * 32});
        }
    }
    /*******************************************************************************
     * On insert la div.grille dans le div.content 
     */
    content.appendChild(grille);

    /*******************************************************************************
     * @description Cette fonction nous donnes la position de la sourcie par rapport 
     * à l'élement canvas.canvasGrille.
     * Le point de référence (0,0) est situé en haut à gauche
     * L'axe horizontal (x) est défini par la première coordonée
     * L'axe vertical (y) est défini par la seconde coordonnée
     * Ces valeurs correspondent à la grille entourant les pixels, et non pas aux pixels eux-mêmes
     * 
     * @param {type} event
     * @returns {Grillage.getSourisPosition.Object(possitionX,possitionY)} coordonnée de la sourcis
     */
    function getSourisPosition(event) {
        var elementCanvas = canvasGrille;
        var ox = elementCanvas.scrollLeft - elementCanvas.offsetLeft;
        var oy = elementCanvas.scrollTop - elementCanvas.offsetTop;
        while (elementCanvas = elementCanvas.offsetParent) {
            ox += elementCanvas.scrollLeft - elementCanvas.offsetLeft;
            oy += elementCanvas.scrollTop - elementCanvas.offsetTop;
        }
        return {x: event.clientX + ox, y: event.clientY + oy};
    }

    /*******************************************************************************
     * @description Cette fonction prend en entrer les coordonnées de la sourcis 
     * par rapport au canvas.canvasGrille et retourne les coordonnées en X et Y 
     * de la cellule courante
     * @param {type} x
     * @param {type} y
     * @returns {Grillage.recupererCordonneeCaseCourant.Object(possitionX,possitionY)}
     */
    function recupererCordonneeCaseCourant(x, y) {
        var coordX = 0;
        var coordY = 0;
        for (i = 0; i < tableauDeGille.length - 1; i++) {

            if (x >= tableauDeGille[i].x && x <= tableauDeGille[i + 1].x) {
                coordX = tableauDeGille[i].x;
            }
            if (y >= tableauDeGille[i].y && y <= tableauDeGille[i + 1].y) {
                coordY = tableauDeGille[i].y;
            }

        }
        return {x: coordX, y: coordY};
    }

    /*******************************************************************************
     * @description Cette fonction prend en entrer les coordonnées d'une cellule 
     * et dessine un contour d'épaisseur 2px selon la couleur aussi passé en paramètre
     * @param {type} x
     * @param {type} y
     * @param {type} couleur couleur du contour
     * @returns {undefined}
     */
    function dessineContour(x, y, couleur) {
        //Nous tronçons coté par poté
        //L'épaisseur de la tracé
        contextCanvasGrille.lineWidth = 2;
        //Début de la tracé
        contextCanvasGrille.beginPath();
        //Le tracé part du point (x-1,y)
        contextCanvasGrille.moveTo(x - 1, y);
        //Un segment est ajouté vers (x - 1, y + tailleCase)
        contextCanvasGrille.lineTo(x - 1, y + tailleCase);
        //Choix de la coulour
        contextCanvasGrille.strokeStyle = couleur;
        //Fin de la tracé
        contextCanvasGrille.stroke();

        contextCanvasGrille.lineWidth = 2;
        contextCanvasGrille.beginPath();
        contextCanvasGrille.moveTo(x - 1 + tailleCase + 2, y);
        contextCanvasGrille.lineTo(x - 1 + tailleCase + 2, y + tailleCase);
        contextCanvasGrille.strokeStyle = couleur;
        contextCanvasGrille.stroke();

        contextCanvasGrille.lineWidth = 2;
        contextCanvasGrille.beginPath();
        contextCanvasGrille.moveTo(x, y - 1);
        contextCanvasGrille.lineTo(x + tailleCase, y - 1);
        contextCanvasGrille.strokeStyle = couleur;
        contextCanvasGrille.stroke();

        contextCanvasGrille.lineWidth = 2;
        contextCanvasGrille.beginPath();
        contextCanvasGrille.moveTo(x, y - 1 + tailleCase + 2);
        contextCanvasGrille.lineTo(x + tailleCase, y - 1 + tailleCase + 2);
        contextCanvasGrille.strokeStyle = couleur;
        contextCanvasGrille.stroke();
    }

    /**
     * @description Cette fonction prend en entrer les coordonnées d'une celle et efface son coutour de 2px.
     * 
     * @param {type} x
     * @param {type} y
     */
    function effacerContour(x, y) {
        contextCanvasGrille.clearRect(x - 2, y - 2, tailleCase + 2, 2);
        contextCanvasGrille.clearRect(x - 2, y - 2, 2, tailleCase + 2);
        contextCanvasGrille.clearRect(x - 2, y + tailleCase, tailleCase + 2, 2);
        contextCanvasGrille.clearRect(x + tailleCase, y - 2, 2, tailleCase + 2);
    }

    /**
     * @description Cette fonction prend les coordonnées d'une cellule, un caractère, une couleur et ecrit le carectère
     * dans la cellule avec une taille police 30px et de couleur celui passé en paramètre.
     * @param {type} x
     * @param {type} y
     * @param {type} caractere
     * @param {type} couleur
     */
    function ecrireDansUneCellule(x, y, caractere, couleur) {
        contextCanvasGrille.fillStyle = couleur;
        contextCanvasGrille.textAlign = 'center';
        contextCanvasGrille.textBaseline = 'top';
        contextCanvasGrille.font = 'bold 25px sans-serif';
        contextCanvasGrille.fillText(caractere, x + 15, y);
    }
    /**
     * 
     * @param {type} x
     * @param {type} y
     * @param {type} caractere
     * @param {type} couleurText
     * @param {type} couleurTransparence
     */
    function ecrireDansUneCelluleAvecTransparance(x, y, caractere, couleurText, couleurTransparence) {
        contextCanvasGrille.fillStyle = couleurText;
        contextCanvasGrille.textAlign = 'center';
        contextCanvasGrille.textBaseline = 'top';
        contextCanvasGrille.font = 'bold 25px sans-serif';
        contextCanvasGrille.fillText(caractere, x + 15, y);

        contextCanvasGrille.fillStyle = couleurTransparence;
        contextCanvasGrille.fillRect(x, y, 30, 30);
    }
    /**
     * @description Cette fonction prend les coordonnées d'une cellule et efface le caractère ecrit à l'intérieur.
     * @param {type} x
     * @param {type} y
     */
    function EffacerEcritureUneCellule(x, y) {
        contextCanvasGrille.fillStyle = "#fff";
        contextCanvasGrille.fillRect(x, y, 30, 30);
    }
    function EffacerLesDonneeCellule(x, y) {
        contextCanvasGrille.clearRect(x, y, 30, 30);
        contextCanvasGrille.fillStyle = "#fff";
        contextCanvasGrille.fillRect(x, y, 30, 30);
    }
    function dessinerBaseOperation(x, y, couleur) {

        contextCanvasGrille.lineWidth = 4;
        contextCanvasGrille.beginPath();
        contextCanvasGrille.moveTo(x, y - 1 + 15);
        contextCanvasGrille.lineTo(x + tailleCase, y - 1 + 15);
        contextCanvasGrille.strokeStyle = couleur;
        contextCanvasGrille.stroke();
    }
    /**
     * @description Cette fonction prend les coordonnées d'une cellule et crèe un element canvas donc l'id est la syntaxte suivante:
     * cellule_x_y avec x et y les coordonnées respectives de la cellule.
     * Cet element canvas.cellule_x_y se trouvera au dessus de la cellule et on s'en servira pour notifier que la cellule.
     * Noté que nous avons crée un style particulier pour ces éléments : ils ont un fond (background) rouge et l'opacité 
     * de l'élément est de 0.7 donc transparent.
     * est selectionnée.
     * @param {type} x
     * @param {type} y
     */
    function ceerCanvasCellule(x, y) {
        var canvasCellule = document.createElement("canvas");
        var canvasCelluleGrille = "position: absolute;z-index: 2;margin-left: " + x + "px;margin-top: " + y + "px;background: #FFBDBD;opacity: 0.7;";
        canvasCellule.setAttribute("width", tailleCase);
        canvasCellule.setAttribute("height", tailleCase);
        canvasCellule.setAttribute("id", "cellule_" + x + "_" + y);
        canvasCellule.setAttribute("style", canvasCelluleGrille);
        grille.appendChild(canvasCellule);
    }
    /**
     * @description Cette fonction prend les coordonnées d'une cellule et supprime element canvas.cellule_x_y qui se trouve superposé 
     * à la cellule.
     * 
     * @param {type} x
     * @param {type} y
     * @returns {undefined}
     */
    function supprimerCanvasCellule(x, y) {
        var id_cellule = "cellule_" + x + "_" + y;
        var cellule = grille.querySelector("#" + id_cellule);
        if (cellule) {
            grille.removeChild(cellule);
        }
    }

    /**
     * @description Cette fonction, selon le type de navigateur, retourne l'objet 'event' approprié.
     * @param {type} _event_
     * @returns {@exp;window@pro;event}
     */
    function checkEventObj(_event_) {
        // --- IE explorer
        if (window.event)
            return window.event;
        // --- Netscape and other explorers
        else
            return _event_;
    }
    /**
     * Cette fonction est appellé quand on click sur une touche du clavier.
     * Elle retourne une object avec Object(intKeyCode,intAltKey,intCtrlKey,val,type)
     * intKeyCode correstion au code ascii de la touche apuyé 
     * val c'est la valeur qui correspond à la touche donc on fait appelle à la methode String.fromCharCode(intKeyCode)
     * type est la catégorie, cette catégorisation est là pour determiner le type d'action à faire.
     * 
     * @param {type} event
     * @returns {Grillage.clavier.Object(intKeyCode,intAltKey,intCtrlKey,val,type)}
     */
    function clavier(event) {
        e = checkEventObj(event);
        var intKeyCode = e.keyCode;
        var intAltKey = e.altKey;
        var intCtrlKey = e.ctrlKey;
        caractere = String.fromCharCode(intKeyCode);
        expReg = /\d/;
        KEY_ENTER = 13;
        KEY_ESC = 27;
        KEY_DEL = 46;
        if (intKeyCode === KEY_ENTER) {
            return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "entrer", "type": "action"};
        }
        if (intKeyCode === KEY_ESC) {
            return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "echap", "type": "action"};
        }
        if (intKeyCode === KEY_DEL) {
            return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "del", "type": "action"};
        }
        if (intKeyCode >= 96 && intKeyCode <= 111 || intKeyCode === 187) {
            switch (intKeyCode) {
                case 96:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "0", "type": "chiffre"};
                    break;
                case 97:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "1", "type": "chiffre"};
                    break;
                case 98:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "2", "type": "chiffre"};
                    break;
                case 99:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "3", "type": "chiffre"};
                    break;
                case 100:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "4", "type": "chiffre"};
                    break;
                case 101:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "5", "type": "chiffre"};
                    break;
                case 102:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "6", "type": "chiffre"};
                    break;
                case 103:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "7", "type": "chiffre"};
                    break;
                case 104:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "8", "type": "chiffre"};
                    break;
                case 105:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "9", "type": "chiffre"};
                    break;
                case 106:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "*", "type": "operateur"};
                    break;
                case 107:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "+", "type": "operateur"};
                    break;
                case 109:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "-", "type": "operateur"};
                    break;
                case 110:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": ".", "type": "operateur"};
                    break;
                case 111:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "/", "type": "operateur"};
                    break;
                case 187:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "equal", "type": "operateur"};
                    break;
            }

        }
        if (intKeyCode >= 37 && intKeyCode <= 40) {
            switch (intKeyCode) {
                case 37:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "gauche", "type": "direction"};
                    break;
                case 38:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "haut", "type": "direction"};
                    break;
                case 39:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "droit", "type": "direction"};
                    break;
                case 40:
                    return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "bas", "type": "direction"};
                    break;
            }
        }
        if (expReg.test(caractere)) {
            return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": String.fromCharCode(intKeyCode), "type": "chiffre"};
        }
        if (intKeyCode >= 8 && intKeyCode <= 46) {
            return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "notC", "type": "nonpriseencharge"};
        }
        return {"intKeyCode": intKeyCode, "intAltKey": intAltKey, "intCtrlKey": intCtrlKey, "val": "notC", "type": "interdit"};


    }
    /**
     * 
     * @param {type} x
     * @param {type} y
     * @returns {Boolean}
     */
    function verifierQueLaCelluleEstActive(x, y) {

        var taille = 0;
        var active = false;
        while (taille < TableauDesCelluleAutorise.length && active === false) {
            if (TableauDesCelluleAutorise[taille].x === x && TableauDesCelluleAutorise[taille].y === y) {
                active = true;
            }
            taille++;

        }
        return active;
    }

    function effacerErreurTooltipSimple() {
        for (i = 0; i < listeErreurSimple.length; i++) {
            effacerDivForTooltip(listeErreurSimple[i].x, listeErreurSimple[i].y);
            effacerContour(listeErreurSimple[i].x, listeErreurSimple[i].y);
        }


    }
    /**
     * Cette methode correspond à l'évenement faite quand on click dans la grille
     * @param {type} event
     */
    canvasGrille.onmousedown = function(event) {
        /**
         * On appelle la @function getSourisPosition qui nous donne position de la sourie
         */
        var positionGrilleCanvas = getSourisPosition(event);
        /**
         * On appelle la @function recupererCordonneeCaseCourant pour recuperer les coordonnées de 
         * cellule la cellule selectionnée
         */
        var coordonneGrilleCourant = recupererCordonneeCaseCourant(positionGrilleCanvas.x, positionGrilleCanvas.y);

        /**
         * On verifie qu'on n'a pas clické que la même cellule
         */
        if (DernierCelluleSelectionne.x !== coordonneGrilleCourant.x || DernierCelluleSelectionne.y !== coordonneGrilleCourant.y) {
            //On éfface le coutour de la cellule precedente
            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
            //On efface aussi l'élement canvas que se trouve au-dessus de l'anciène cellule
            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
            //On dessine le contour au nouveau 
            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
            //On crèe un element canvas au dessus
            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);

            effacerErreurTooltipSimple();

            //On verifie que la cellule selectionnée existe
            var id_cellule = "cellule_" + coordonneGrilleCourant.x + "_" + coordonneGrilleCourant.y;
            var cellule = grille.querySelector("#" + id_cellule);
            if (cellule) {
                //On affecte l'élément à l'atribut CanvasCelluleSelectionne
                CanvasCelluleSelectionne = cellule;

                //Si on click sur le clavier
                document.onkeydown = function(event) {
                    //On appelle la fonction clavier qui nous retourne un Object(intKeyCode,intAltKey,intCtrlKey,val,type)
                    var donnekey = clavier(event);
                    /**
                     * Selon la categorie on realise des actions
                     */
                    if (operationEnCours) {
                        switch (donnekey.type) {
                            /**
                             * 
                             */
                            case "chiffre":
                                if (verifierQueLaCelluleEstActive(coordonneGrilleCourant.x, coordonneGrilleCourant.y)) {

                                    switch (typeOperation) {
                                        case 'addition':
                                            suiviCorrectionAddition(donnekey, coordonneGrilleCourant, DernierCelluleSelectionne);

                                            ecrireDansUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y, donnekey.val, "#000");

                                            break;
                                    }
                                    effacerDivForTooltip(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                    effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);

                                } else {
                                    var message = '<img style="position: absolute;margin-left: -16px;margin-top: -8px;" src=\"./img/icone_erreur.png\"/>\n\
                                            <em style="margin-left: 15px;">Erreur : Vous ne pouvez pas ecrire dans cette zone.<br> Veuillez\n\
                                            ecrire dans les zone autorisé.</em>';
                                    var bgcolor = "#FF332F";
                                    var textcolor = "#FFFCFB";
                                    afficheMessageTooltip(coordonneGrilleCourant, message, bgcolor, textcolor);
                                    dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "red");
                                    listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                }
                                break;
                                /**
                                 * Dans cette categorie nous avons le touche Echap, Entrer et Delete
                                 * 
                                 */
                            case "operateur":
                                switch (typeOperation) {
                                    case 'addition':
                                        switch (donnekey.val) {
                                            case "equal":

                                                //suiviCorrectionAddition(donnekey, coordonneGrilleCourant, DernierCelluleSelectionne);
                                                afficherResultatOperation("addition");
                                                //ecrireDansUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y, donnekey.val, "#000");
                                                break;
                                        }
                                        break;
                                }
                                effacerDivForTooltip(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                break;
                            case "action":
                                switch (donnekey.val) {
                                    /**
                                     * Delete efface l'ecriture d'une cellule selectionné
                                     */
                                    case "del":
                                        if (verifierQueLaCelluleEstActive(coordonneGrilleCourant.x, coordonneGrilleCourant.y)) {
                                            EffacerEcritureUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ecrireDansUneCelluleAvecTransparance(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "", "white", "rgba(163, 209, 157, 0.3)");

                                        } else {
                                            var message = '<img style="position: absolute;margin-left: -16px;margin-top: -8px;" src=\"./img/icone_erreur.png\"/>\n\
                                            <em style="margin-left: 15px;">Erreur : Vous ne pouvez pas ecrire dans cette zone.<br> Veuillez\n\
                                            ecrire dans les zone autorisé.</em>';
                                            var bgcolor = "#FF332F";
                                            var textcolor = "#FFFCFB";
                                            afficheMessageTooltip(coordonneGrilleCourant, message, bgcolor, textcolor);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "red");
                                            listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                        }
                                        break;

                                    case "echap":
                                        effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        effacerContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        supprimerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        break;
                                }
                                break;
                                /**
                                 * Cette actegorie nous permet de deplacer le selectionneur de cellule grace aux touche directionnel
                                 * du clavier.
                                 */
                            case "direction":
                                switch (donnekey.val) {
                                    case "droit":
                                        if (coordonneGrilleCourant.x >= 0 && coordonneGrilleCourant.x < 768) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.x = coordonneGrilleCourant.x + tailleCase + 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "gauche":
                                        if (coordonneGrilleCourant.x > 0 && coordonneGrilleCourant.x <= 768) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.x = coordonneGrilleCourant.x - tailleCase - 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "haut":
                                        if (coordonneGrilleCourant.y > 0 && coordonneGrilleCourant.x <= 480) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.y = coordonneGrilleCourant.y - tailleCase - 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "bas":
                                        if (coordonneGrilleCourant.y >= 0 && coordonneGrilleCourant.y < 480) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.y = coordonneGrilleCourant.y + tailleCase + 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                }
                                break;
                                /**
                                 * Cette catégorie est la liste de touche intergie, à l'anclachement un message s'affiche dans la grille
                                 * sous forme d'un tooltip qui signale à l'utilisateur d'utiliser les bonnes touche.
                                 * Le contour de la cellule devient rouge
                                 */
                            case "interdit":
                                var message = '<img style="position: absolute;margin-left: -16px;margin-top: -8px;" src=\"./img/icone_erreur.png\"/>\n\
                            <em style="margin-left: 15px;">Erreur : seul les caractères numerique sont permise <br> dans cette cellule. \n\
                            Exemple : 0, 1, 2, 5 etc...</em>';
                                var bgcolor = "#FF332F";
                                var textcolor = "#FFFCFB";
                                afficheMessageTooltip(coordonneGrilleCourant, message, bgcolor, textcolor);
                                dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "red");
                                listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                break;
                        }
                    } else {
                        switch (donnekey.type) {
                            /**
                             * 
                             */
                            case "chiffre":
                                suiviCorrectionAddition(donnekey, coordonneGrilleCourant, DernierCelluleSelectionne);

                                ecrireDansUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y, donnekey.val, "#000");


                                effacerDivForTooltip(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                break;

                            case "operateur":
                                suiviCorrectionAddition(donnekey, coordonneGrilleCourant, DernierCelluleSelectionne);

                                ecrireDansUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y, donnekey.val, "#00F");


                                effacerDivForTooltip(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                break;
                                /**
                                 * Dans cette categorie nous avons le touche Echap, Entrer et Delete
                                 * 
                                 */
                            case "action":
                                switch (donnekey.val) {
                                    /**
                                     * Delete efface l'ecriture d'une cellule selectionné
                                     */
                                    case "del":
                                        EffacerEcritureUneCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                        break;

                                    case "echap":
                                        effacerDivForTooltip(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        effacerContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        supprimerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                        break;
                                }
                                break;
                                /**
                                 * Cette actegorie nous permet de deplacer le selectionneur de cellule grace aux touche directionnel
                                 * du clavier.
                                 */
                            case "direction":
                                switch (donnekey.val) {
                                    case "droit":
                                        if (coordonneGrilleCourant.x >= 0 && coordonneGrilleCourant.x < 768) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.x = coordonneGrilleCourant.x + tailleCase + 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "gauche":
                                        if (coordonneGrilleCourant.x > 0 && coordonneGrilleCourant.x <= 768) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.x = coordonneGrilleCourant.x - tailleCase - 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "haut":
                                        if (coordonneGrilleCourant.y > 0 && coordonneGrilleCourant.y <= 480) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.y = coordonneGrilleCourant.y - tailleCase - 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                    case "bas":
                                        if (coordonneGrilleCourant.y >= 0 && coordonneGrilleCourant.y < 480) {
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                            coordonneGrilleCourant.y = coordonneGrilleCourant.y + tailleCase + 2;
                                            effacerContour(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            supprimerCanvasCellule(DernierCelluleSelectionne.x, DernierCelluleSelectionne.y);
                                            dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "green");
                                            ceerCanvasCellule(coordonneGrilleCourant.x, coordonneGrilleCourant.y);
                                            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
                                            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
                                        }
                                        break;
                                }
                                break;
                                /**
                                 * Cette catégorie est la liste de touche intergie, à l'anclachement un message s'affiche dans la grille
                                 * sous forme d'un tooltip qui signale à l'utilisateur d'utiliser les bonnes touche.
                                 * Le contour de la cellule devient rouge
                                 */
                            case "interdit":
                                var message = '<img style="position: absolute;margin-left: -16px;margin-top: -8px;" src=\"./img/icone_erreur.png\"/>\n\
                            <em style="margin-left: 15px;">Erreur : seul les caractères numerique sont permise <br> dans cette cellule. \n\
                            Exemple : 0, 1, 2, 5 etc...</em>';
                                var bgcolor = "#FF332F";
                                var textcolor = "#FFFCFB";
                                afficheMessageTooltip(coordonneGrilleCourant, message, bgcolor, textcolor);
                                dessineContour(coordonneGrilleCourant.x, coordonneGrilleCourant.y, "red");
                                listeErreurSimple.push({x: coordonneGrilleCourant.x, y: coordonneGrilleCourant.y});
                                break;
                        }
                    }
                };
            }
            ;
            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
        } else {
            DernierCelluleSelectionne.x = coordonneGrilleCourant.x;
            DernierCelluleSelectionne.y = coordonneGrilleCourant.y;
        }

    };

    /****************************************************************************************
     * 
     * @param {type} reponse
     * @param {type} coordonneGrilleCourant
     * @param {type} DernierCelluleSelectionne
     * @returns {undefined}
     */
    function suiviCorrectionAddition(reponse, coordonneGrilleCourant, DernierCelluleSelectionne) {
        console.log(coordonneGrilleCourant);
        console.log(DernierCelluleSelectionne);
        console.log(reponse);

    }
    function afficherResultatOperation(typeoperation) {
        switch (typeoperation) {
            case "addition":
                var retenu = operation.getRetenues();
                var resultat = operation.getResultat();
                var caseRetenue = [];
                var caseResultat = [];
                for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                    if (TableauDesCelluleReserver[j].ligne === 1) {
                        caseRetenue.push({x: TableauDesCelluleReserver[j].x, y: TableauDesCelluleReserver[j].y});
                    }
                    if (TableauDesCelluleReserver[j].ligne === (operation.getOperande().length + 3)) {
                        caseResultat.push({x: TableauDesCelluleReserver[j].x, y: TableauDesCelluleReserver[j].y});

                    }

                }
                for (i = retenu.length - 1; i >= 0; i--) {
                    ecrireDansUneCelluleAvecTransparance(caseRetenue[caseRetenue.length - 1 - i].x, caseRetenue[caseRetenue.length - 1 - i].y, String(retenu[retenu.length - 1 - i]), "#C03000", "rgba(173, 207, 79, 0.3)");
                }

                tailleMax = resultat.getPartieEntiere().length + resultat.getPartieDecimale().length + 1;
                v = resultat.getPartieDecimale().length - 1;
                u = resultat.getPartieEntiere().length - 1;
                for (i = caseResultat.length - 1; i >= 0; i--) {
                    if (v >= 0) {
                        ecrireDansUneCelluleAvecTransparance(caseResultat[i].x, caseResultat[i].y, String(resultat.getPartieDecimale()[v]), "#C03000", "rgba(173, 207, 79, 0.3)");
                        v--;
                    }
                    if (v === -1) {
                        ecrireDansUneCelluleAvecTransparance(caseResultat[i - 1].x, caseResultat[i - 1].y, String(","), "red", "rgba(173, 207, 79, 0.3)");
                        v = -2;
                    }
                    if (v === -2 && u >= 0) {
                        ecrireDansUneCelluleAvecTransparance(caseResultat[i-2].x, caseResultat[i-2].y, String(resultat.getPartieEntiere()[u]), "#C03000", "rgba(173, 207, 79, 0.3)");
                        u--;
                    }
                }


                break;

        }
    }
    /****************************************************************************************
     * @description  Cette fonction prend en entrer un canvas et dessine la flèche du tooltip
     * @param {type} canvasToolTip
     * @param {type} posx
     * @param {type} posy
     * @param {type} bordercolor
     */
    function dessineCanvasTooltip(canvasToolTip, bordercolor) {
        var ctx = canvasToolTip.getContext("2d");
        ctx.fillStyle = bordercolor;

        ctx.moveTo(1, 1);
        ctx.lineTo(1, 18);
        ctx.lineTo(14, 1);
        ctx.fill();
    }
    /****************************************************************************************
     * @description  Cette fonction dessine le tootltip
     * 
     * @param {type} posleft
     * @param {type} postop
     * @param {type} bordercolor$1
     * @param {type} bgcolor
     * @param {type} borderwidth
     * @param {type} textcolor
     * @param {type} message
     * @param {type} tipbot
     * @param {type} bordercolor
     */
    function dessinerDivForTooltip(posleft, postop, bordercolor, bgcolor, borderwidth, textcolor, message, tipbot, bordercolor) {
        /**
         * 
         * @type @exp;document@call;createElement
         */

        var divToolTip = document.createElement("div");
        if (String(message).length > 150) {
            posleftTmp = posleft - 20;
            postopTmp = postop - 60;
        } else {
            posleftTmp = posleft - 10;
            postopTmp = postop - 50;
        }
        var stypeDivToolTip = 'position:absolute;z-index:3; left:' + (posleftTmp) + 'px;top:' + (postopTmp) + 'px;border-color:' + bordercolor + ';background-color:' + bgcolor + ';color:' + textcolor + ';border-width:' + borderwidth + 'px';
        divToolTip.setAttribute("style", stypeDivToolTip);
        divToolTip.setAttribute("class", "tooltip");
        divToolTip.setAttribute("id", "tooltip_" + posleft + "_" + postop);

        /**
         * création d'un object canvas pour dessinée la flèche du tooltip
         * @type @exp;document@call;createElement
         */
        var canvasToolTip = document.createElement("canvas");
        var styleCanvasToolTip = 'position: absolute;bottom:' + tipbot + 'px;left: 10%;';
        var widthCanvasToolTip = 28;
        var heightCanvasToolTip = 18;
        canvasToolTip.setAttribute("width", widthCanvasToolTip);
        canvasToolTip.setAttribute("height", heightCanvasToolTip);
        canvasToolTip.setAttribute("id", "tooltip_tip" + posleft + "_" + posleft);
        canvasToolTip.setAttribute("style", styleCanvasToolTip);
        divToolTip.innerHTML = message;
        /**
         * On appelle la @function dessineCanvasTooltip pour dessinée la flèche du tootltip
         */
        dessineCanvasTooltip(canvasToolTip, bordercolor);
        /**
         * On l'insert dans la grille
         */
        divToolTip.appendChild(canvasToolTip);
        grille.appendChild(divToolTip);
    }
    /****************************************************************************************
     * @description Cette fonction affiche le tootltip
     * @param {type} coordonneGrilleCourant
     * @param {type} message
     * @param {type} bgcolor
     * @returns {undefined}
     */
    function afficheMessageTooltip(coordonneGrilleCourant, message, bgcolor, textcolor) {
        var bordercolor = '#666666';
        var borderwidth = '4';
        var posleft = coordonneGrilleCourant.x;
        var postop = coordonneGrilleCourant.y;
        var tipbot = -18 + (borderwidth / 4);
        dessinerDivForTooltip(posleft, postop, bordercolor, bgcolor, borderwidth, textcolor, message, tipbot, bordercolor);

    }
    /*********************************************************************************************
     * @description cette fonction prend en entré les coordonnée d'une cellule et efface le tooltip
     * qui lui correspond dans la grille
     * @param {type} x
     * @param {type} y
     */
    function effacerDivForTooltip(x, y) {
        var id_tooltip = "tooltip_" + x + "_" + y;
        var tooltip = grille.querySelector("#" + id_tooltip);
        if (tooltip) {
            grille.removeChild(tooltip);
        }
    }

    /*********************************************************************************************
     * Ci-dessous les attributs, functions d'affiche et de suivi pour la résolution des opération
     ********************************************************************************************/
    /*********************************************************************************************
     * 
     * @type Boolean operationEnCours
     * @type Object:{Addition, Soustraction, Multiplication, dition} operation 
     * @type Array TableauDesCelluleActiveNonActive
     * @type Number postXContante
     * @type Number postYContante
     * @type Object(x,y) positionInitialPourPoserUneOperation 
     */
    var operationEnCours = false;
    var operation;
    var typeOperation;
    var TableauDesCelluleActiveNonActive = [];
    var TableauDesCelluleReserver = [];
    var TableauDesCelluleAutorise = [];
    var postXContante = 160;
    var postYContante = 64;
    var positionInitialPourPoserUneOperation = {x: postXContante, y: postYContante};

    /***********************************************************************************************
     * @description Cette fonction nous permet d'afficher l'opération
     * @param {type} Addition
     * @returns {undefined}
     */
    this.poserOparationAddition = function poserOparationAddition(addition) {
        operationEnCours = true;
        operation = addition;
        typeOperation = "addition";
        var nombreCelluleAReserverVerticalement = operation.getOperande().length + 3;
        var nombreCelluleAReserverHorizontalement = 0;
        var operande = operation.getOperande();
        var maxDecimale = 0;
        var maxEntiere = 0;
        for (var i = 0; i < operande.length; i++) {

            if (nombreCelluleAReserverHorizontalement <= operande[i].getLongueurValeur()) {
                nombreCelluleAReserverHorizontalement = parseInt(operande[i].getLongueurValeur());
            }
            ;
            if (maxDecimale <= operande[i].getPartieDecimale().length) {
                maxDecimale = operande[i].getPartieDecimale().length;
            }
            ;
            if (maxEntiere <= operande[i].getPartieEntiere().length) {
                maxEntiere = operande[i].getPartieEntiere().length;
            }
            ;
        }
        ;
        nombreCelluleAReserverHorizontalement = nombreCelluleAReserverHorizontalement + 4;

        var nombreDeCelluleAReserver = nombreCelluleAReserverVerticalement * nombreCelluleAReserverHorizontalement;
        numLigne = 1;
        valMaxByLigne = 0;
        for (i = 0; i < nombreCelluleAReserverVerticalement; i++) {
            for (j = 0; j < nombreCelluleAReserverHorizontalement; j++) {
                if (postXContante + j * 32 >= valMaxByLigne) {
                    valMaxByLigne = postXContante + j * 32;

                }
                p = {x: postXContante + j * 32, y: postYContante + i * 32, ligne: numLigne, valMaxByLigne: 0, valChamp: ""};
                TableauDesCelluleReserver.push(p);

            }
            for (k = 0; k < TableauDesCelluleReserver.length; k++) {
                if (TableauDesCelluleReserver[k].ligne === numLigne) {
                    TableauDesCelluleReserver[k].valMaxByLigne = valMaxByLigne;
                }
            }
            numLigne++;
            valMaxByLigne = 0;
        }
        for (j = 0; j < TableauDesCelluleReserver.length; j++) {
            for (i = 0; i < tableauDeGille.length; i++) {
                if (tableauDeGille[i].x !== TableauDesCelluleReserver[j].x && tableauDeGille[i].y !== TableauDesCelluleReserver[j].y) {
                    TableauDesCelluleActiveNonActive.push(tableauDeGille[i]);
                }
            }
        }


        var couleurTransparenceOperandeDecimal = 'rgba(255, 118, 89, 0.1)';
        var couleurTransparenceOperandeEntiere = 'rgba(110, 71, 151, 0.1)';
        var couleurTransparenceRetenue = 'rgba(163, 209, 157, 0.3)';
        var couleurTransparenceResultat = 'rgba(163, 209, 157, 0.3)';
        /**
         * Opérande
         */

        /**
         * Partie Decimal
         */
        numLigne = 2;
        for (i = 0; i < operande.length; i++) {
            if (operande[i].getPartieDecimale().length === maxDecimale) {
                decimale = operande[i].getPartieDecimale();
                for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                    if (TableauDesCelluleReserver[j].ligne === numLigne) {
                        for (k = 0; k < decimale.length; k++) {
                            ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].valMaxByLigne - ((decimale.length - 1 - k) * 32), TableauDesCelluleReserver[j].y, String(decimale[k]), "green", couleurTransparenceOperandeDecimal);

                        }
                    }
                }
            } else {
                decimale = operande[i].getPartieDecimale();
                for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                    if (TableauDesCelluleReserver[j].ligne === numLigne) {
                        for (k = 0; k < decimale.length; k++) {
                            ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].valMaxByLigne - ((maxDecimale - 1 - k) * 32), TableauDesCelluleReserver[j].y, String(decimale[k]), "green", couleurTransparenceOperandeDecimal);

                        }
                    }
                }
            }
            for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                if (TableauDesCelluleReserver[j].ligne === numLigne) {
                    ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].valMaxByLigne - ((maxDecimale) * 32), TableauDesCelluleReserver[j].y, String(","), "black", "rgba(238, 213, 184, 0.2)");
                }
            }
            numLigne++;
        }
        /**
         * Partie entière
         */
        numLigne = 2
        for (i = 0; i < operande.length; i++) {
            entiere = operande[i].getPartieEntiere();
            if (entiere.length === maxEntiere) {
                for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                    if (TableauDesCelluleReserver[j].ligne === numLigne) {
                        for (k = entiere.length - 1; k >= 0; k--) {
                            ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].valMaxByLigne - ((maxDecimale + 1 + maxEntiere - 1 - k) * 32), TableauDesCelluleReserver[j].y, String(entiere[k]), "black", couleurTransparenceOperandeEntiere);

                        }
                    }
                }
            } else {
                for (j = 0; j < TableauDesCelluleReserver.length; j++) {
                    if (TableauDesCelluleReserver[j].ligne === numLigne) {
                        for (k = entiere.length - 1; k >= 0; k--) {
                            ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].valMaxByLigne - ((maxDecimale + 1 + entiere.length - 1 - k) * 32), TableauDesCelluleReserver[j].y, String(entiere[k]), "black", couleurTransparenceOperandeEntiere);

                        }
                    }
                }
            }

            numLigne++;
        }
        var trouver = false;
        for (j = 0; j < TableauDesCelluleReserver.length; j++) {
            if (TableauDesCelluleReserver[j].ligne === nombreCelluleAReserverVerticalement - 2) {
                if (trouver === false) {
                    ecrireDansUneCellule(TableauDesCelluleReserver[j].x, TableauDesCelluleReserver[j].y, "+", "red");
                    trouver = true;
                }

            }
        }
        var mettre = false;
        for (j = 0; j < TableauDesCelluleReserver.length; j++) {
            if (TableauDesCelluleReserver[j].ligne === nombreCelluleAReserverVerticalement - 1) {
                dessinerBaseOperation(TableauDesCelluleReserver[j].x, TableauDesCelluleReserver[j].y, "red");
            }

            if (TableauDesCelluleReserver[j].ligne === 1) {
                ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].x, TableauDesCelluleReserver[j].y, "", "white", couleurTransparenceRetenue);
                TableauDesCelluleAutorise.push({x: TableauDesCelluleReserver[j].x, y: TableauDesCelluleReserver[j].y});
            }
            if (TableauDesCelluleReserver[j].ligne === nombreCelluleAReserverVerticalement) {
                if (mettre === false) {
                    ecrireDansUneCellule(TableauDesCelluleReserver[j].x, TableauDesCelluleReserver[j].y, "=", "red");
                    mettre = true;
                } else {
                    ecrireDansUneCelluleAvecTransparance(TableauDesCelluleReserver[j].x, TableauDesCelluleReserver[j].y, "", "white", couleurTransparenceResultat);
                    TableauDesCelluleAutorise.push({x: TableauDesCelluleReserver[j].x, y: TableauDesCelluleReserver[j].y});
                }
            }

        }
        EffacerEcritureUneCellule(positionInitialPourPoserUneOperation.x, positionInitialPourPoserUneOperation.y);

    };



}




