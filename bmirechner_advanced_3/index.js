window.addEventListener("load", function() {

    function bmi(groesse, gewicht) {
        return gewicht / (groesse * groesse);
    }

    let bmiFunc = function bmi_from_form() {
        console.log("Text changed!");
        let groesse = parseFloat(document.getElementById("tb_groesse").value.replace(",","."));
        let gewicht = parseFloat(document.getElementById("tb_gewicht").value);

        let bmi_value = bmi(groesse,gewicht);

        if(!isNaN(bmi_value)) {

            document.getElementById("normal").style.display = "none";
            document.getElementById("ueber_normal").style.display = "none";
            document.getElementById("unter_normal").style.display = "none";

            if(bmi_value <18.5) {
                document.getElementById("unter_normal").style.display = "block";
            } else if(bmi_value>25) {
                document.getElementById("ueber_normal").style.display = "block";
            } else if(bmi_value>=18.5 && bmi_value<=25) {
                document.getElementById("normal").style.display = "block";
            }

            document.getElementById("p_bmi").innerText = bmi_value;
        }
    }

    document.getElementById("tb_groesse").addEventListener("change", bmiFunc);
    document.getElementById("tb_gewicht").addEventListener("change", bmiFunc);

    document.getElementById("tb_groesse").addEventListener("keyup", bmiFunc);
    document.getElementById("tb_gewicht").addEventListener("keyup", bmiFunc);

});
