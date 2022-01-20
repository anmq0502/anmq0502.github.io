function getCountdown(){
    var curDate = new Date();
    var xmasDay = new Date(curDate.getFullYear(), 6, 8); 
    var offset = xmasDay.getTime() - curDate.getTime(); 
    var days = Math.floor((offset / 1000) / 60 / 60 / 24);
    offset -= days * 1000 * 60 * 60 * 24;
    var hours = Math.floor(offset / 1000 / 60 / 60);  
    offset -= hours * 1000 * 60 * 60 ;
    var minutes  = Math.floor(offset / 1000 / 60 );  
    offset -= minutes * 1000 * 60;
    var seconds  = Math.floor(offset / 1000);  
    document.getElementById('current-time').innerHTML = "Còn " + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây";
    setTimeout(function () { getCountdown(); }, 1000);
};