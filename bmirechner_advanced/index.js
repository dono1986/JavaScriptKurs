window.addEventListener("load", function() {

    this.document.getElementById("btn_berechnen").addEventListener("click", function() {

        let groesse = parseFloat(document.getElementById("tb_groesse").value.replace(",","."));
        let gewicht = parseFloat(document.getElementById("tb_gewicht").value);

        let bmi = gewicht / (groesse * groesse);
        alert(bmi);

    }) ;




});
