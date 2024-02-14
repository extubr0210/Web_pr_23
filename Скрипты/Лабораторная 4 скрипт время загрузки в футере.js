(function(){
    var loadtime = Date.now() -
    window.performance.timing.navigationStart;
    document.getElementById("ftd1").innerHTML = "Время загрузки страницы = "+loadtime+" миллисекунд";

})();
