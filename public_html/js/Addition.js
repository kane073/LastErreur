/** 
 * @description Projet ingénieur de Télécom bretagne - Poseur d'opération
 * @version 1.0
 * Date de la dernière modification : 09/04/2013
 * @author Alassane KANE, Tenfei Zhai
 */
/**
 * @description Cette classe servira à créer des opérations de type addition
 * @returns {Addition}
 */
function Addition() {
    var listArgument = arguments;
    var operande = [];
    var retenues = [];
    var resultat = new Nombre(0);
    
    /**
     * Crèe des types Nombres et les mets dans l'atribut operande
     * @returns {nothing}
     */
    function remplissageOperande() {
        if (listArgument.length > 0) {
            var i = 0;
            for (i = 0; i < listArgument.length; i++) {
                operande.push(new Nombre(listArgument[i]));
            }
        } else {
            alert("Erreur, il n'y a pas d'argument!");
        }
    }
    ;
    remplissageOperande();

    /**
     * Vérifie que le nombre d'argument passé en paramètre est compris entre 2 et 10
     * @returns {Boolean}
     */
    function verifieNumbreArgument() {
        if (listArgument.length >= 2 && listArgument.length <= 10) {
            return true;
        } else {
            alert("Le nombre d'opérande doit étre compris entre 2 et 10.");
            return false;
        }
    }
    ;
    /**
     * Verifie que chaque argument est compris entre 1 et 18 chiffre
     * @returns {Boolean}
     */
    function verifieLongueurDeChaqueArgument() {
        var i = 0;
        var reponse = true;
        while (i < listArgument.length && reponse === true) {
            if (operande[i].getLongueurValeur() > 18 || operande[i].getLongueurValeur() < 1) {
                reponse = false;
                alert("L'un des arguments est supérieur à 18 caractères!");
            }
            i++;
        }
        return reponse;
    }
    ;

    function longueurMaxPartieEntiere() {
        var longueurMax = 0;
        if (listArgument.length > 0) {
            for (i = 0; i < operande.length; i++) {
                if (operande[i].getPartieEntiere().length > longueurMax) {
                    longueurMax = operande[i].getPartieEntiere().length;
                }
            }
        }
        return longueurMax;
    }
    function longueurMaxPartieDecimale() {
        var longueurMax = 0;
        if (listArgument.length > 0) {
            for (i = 0; i < operande.length; i++) {
                if (operande[i].getPartieDecimale().length >= longueurMax) {
                    longueurMax = operande[i].getPartieDecimale().length;
                }
            }
        }
        return longueurMax;
    }
    if (verifieLongueurDeChaqueArgument() && verifieNumbreArgument()) {
        this.isEmpty = function isEmpty() {

        };

        this.addition = function addition() {

        };

        this.resoudreAddition = function resoudreAddition() {
            var MaxPartieEntiere = longueurMaxPartieEntiere();
            var MaxPartieDecimale = longueurMaxPartieDecimale();
            var tableauTemporel = [];
            var resultatTemporelPartieEntiere = [];
            var resultatTemporelPartieDecimale = [];

            /**
             * 
             */
            for (i = 0; i < MaxPartieDecimale; i++) {
                for (j = 0; j < operande.length; j++) {
                    if (operande[j].getPartieDecimale().length < MaxPartieDecimale) {
                        tmp = MaxPartieDecimale - operande[j].getPartieDecimale().length;
                        if (i >= operande[j].getPartieDecimale().length) {
                            if (resultatTemporelPartieDecimale[i]) {
                                resultatTemporelPartieDecimale[i] = operande[j].getPartieDecimaleByIndice(i) + resultatTemporelPartieDecimale[i];

                            } else {
                                if (!operande[j].getPartieDecimaleByIndice(i) === 0) {
                                    resultatTemporelPartieDecimale.push(operande[j].getPartieDecimaleByIndice(i));
                                }
                            }
                        } else {
                            if (resultatTemporelPartieDecimale[i]) {
                                resultatTemporelPartieDecimale[i] = operande[j].getPartieDecimaleByIndice(i) + resultatTemporelPartieDecimale[i];
                            } else {
                                resultatTemporelPartieDecimale.push(operande[j].getPartieDecimaleByIndice(i))
                            }
                        }
                    } else {
                        if (resultatTemporelPartieDecimale[i]) {
                            resultatTemporelPartieDecimale[i] = operande[j].getPartieDecimaleByIndice(i) + resultatTemporelPartieDecimale[i];
                        } else {
                            resultatTemporelPartieDecimale.push(operande[j].getPartieDecimaleByIndice(i))
                        }
                    }

                }
            }

            var derniereRetenue = 0;
            retenues.unshift(0);
            for (i = (resultatTemporelPartieDecimale.length - 1); i >= 0; i--) {
                if (String(resultatTemporelPartieDecimale[i]).length === 1) {
                    tableauTemporel.unshift(resultatTemporelPartieDecimale[i]);
                    retenues.unshift(0);
                }
                if(i==String(resultatTemporelPartieDecimale[i]).length){
                    retenues.unshift(".");
                }
                if (String(resultatTemporelPartieDecimale[i]).length > 1) {
                    tableauTemporel.unshift(parseInt(String(resultatTemporelPartieDecimale[i])[1]) + derniereRetenue);
                    derniereRetenue = parseInt(String(resultatTemporelPartieDecimale[i])[0]);
                    retenues.unshift(derniereRetenue);
                }
            }
            
            var resultatDecimal = tableauTemporel.join("");

            /**
             * 
             */

            for (i = 0; i < MaxPartieEntiere; i++) {
                for (j = 0; j < operande.length; j++) {
                    if (operande[j].getPartieEntiere().length < MaxPartieEntiere) {
                        tmp = MaxPartieEntiere - operande[j].getPartieEntiere().length;
                        if (i >= tmp) {
                            if (resultatTemporelPartieEntiere[i]) {
                                resultatTemporelPartieEntiere[i] = operande[j].getPartieEntiereByIndice(i - tmp) + resultatTemporelPartieEntiere[i];
                            } else {
                                resultatTemporelPartieEntiere.push(operande[j].getPartieEntiereByIndice(i - tmp))
                            }
                        }
                    } else {
                        if (resultatTemporelPartieEntiere[i]) {
                            resultatTemporelPartieEntiere[i] = operande[j].getPartieEntiereByIndice(i) + resultatTemporelPartieEntiere[i];
                        } else {
                            resultatTemporelPartieEntiere.push(operande[j].getPartieEntiereByIndice(i))
                        }
                    }
                }
            }
            resultatTemporelPartieEntiere[resultatTemporelPartieEntiere.length - 1] += retenues[0];
            tableauTemporel = [];
            var derniereRetenue = 0;
            for (i = (resultatTemporelPartieEntiere.length - 1); i >= 0; i--) {
                if (String(resultatTemporelPartieEntiere[i]).length === 1) {
                    if (i !== 0) {
                        tableauTemporel.unshift(resultatTemporelPartieEntiere[i]);
                        retenues.unshift(0);
                    } else {
                        if (String(resultatTemporelPartieEntiere[i] + derniereRetenue).length > 1) {
                            tableauTemporel.unshift(parseInt(String(resultatTemporelPartieEntiere[i] + derniereRetenue)[1]));
                            derniereRetenue = parseInt(String(resultatTemporelPartieEntiere[i] + derniereRetenue)[0]);
                            tableauTemporel.unshift(derniereRetenue);
                            retenues.unshift(derniereRetenue);
                        } else {
                            tableauTemporel.unshift(resultatTemporelPartieEntiere[i] + derniereRetenue);
                        }
                    }
                }
                if (String(resultatTemporelPartieEntiere[i]).length > 1) {
                    tableauTemporel.unshift(parseInt(String(resultatTemporelPartieEntiere[i])[1]) + derniereRetenue);
                    derniereRetenue = parseInt(String(resultatTemporelPartieEntiere[i])[0]);
                    retenues.unshift(derniereRetenue);
                }
            }

            var resultatEntier = tableauTemporel.join("");
            resultat = new Nombre(parseFloat(resultatEntier + "." + resultatDecimal));

        };

        /**
         * 
         * @returns {Nombre}
         */
        this.getResultat = function getResultat() {
            return resultat;
        };
        this.getRetenues = function getRetenues() {
            return retenues;
        };
        /**
         * 
         * @returns {Array}
         */
        this.getOperande = function getOperande() {
            return operande;
        };
        
    }
}



