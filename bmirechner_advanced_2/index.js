window.addEventListener("load", function() {

    function bmi(groesse, gewicht) {
        return gewicht / (groesse * groesse);
    }

    function bmi_from_form() {
        console.log("Text changed!");
        let groesse = parseFloat(document.getElementById("tb_groesse").value.replace(",","."));
        let gewicht = parseFloat(document.getElementById("tb_gewicht").value);

        let bmi_value = bmi(groesse,gewicht);
        
        document.getElementById("p_bmi").innerText = bmi_value;
    }

    document.getElementById("tb_groesse").addEventListener("change", function() { bmi_from_form();});

    document.getElementById("tb_gewicht").addEventListener("change", function() { bmi_from_form();});

});
