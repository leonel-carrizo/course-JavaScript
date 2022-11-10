//$(selector).accion()

//$("h1").hide()

//se usa para que se ejecuet una vez se termine de cargar todo el docuemnto. Si no se usa y la página no está cargada se presentarán problemas de undefinded por ejemplo
$(document).ready(() => {

})

//Forma simplificada de document.ready
$(() => {
    // Selectores:
    //id="el-1" -> "#el-1"
    // class= "el-1" -> ".el-1"
    //$("#el-1").hide();

    $(".hide-btn").click(() => {
        // $("h1").hide();
        $("h1").fadeOut();
    });

    $(".show-btn").click(() => {
        // $("h1").show();
        $("h1").fadeIn();
    });

    $("#el-1").click(() => {
        $("h1").css({ color: "red" });

    });

    $("#el-2").click(() => {
        $("h1").css({ color: "blue" });

    });

    $("#el-3").dblclick(() => {
        $("h1").css({ color: "green" });

    });

    $(".new-element").click(() => {
        // $("ul").append("<li>New Element</li>")
        $("ul").prepend("<li>New Element</li>")
    });

    $("li").mouseenter(function (elem) {
        elem.target.style.color = "red";
    });

    $("li").mouseleave(function (elem) {
        elem.target.style.color = "black"
    });
})