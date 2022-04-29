var mydata = JSON.parse(data);
var select = -1;
var main_vocb;
var arrayDiv;

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
function test(){
    document.getElementById("knowledge").innerHTML = "PRONUNCIATION (Phát Âm)";
}

function Objective_Test(){
    let index_array = [0, 1, 2, 3];
    index_array = randomArrayShuffle(index_array);
    let random_main = Math.floor(Math.random() * mydata.length);
    let vocb_phu = RandomArray(random_main, mydata.length);
    main_vocb = mydata[random_main];
    let vocb =  mydata[random_main].tu;
    let nghia =  mydata[random_main].nghia;
    document.getElementsByClassName("text-center_list-answer_main")[0].innerHTML = vocb;
    let check = true;
    for (let index = 0; index < 4; index++) {
        document.getElementsByClassName("text-center_list-answer")[index_array[index]].innerHTML = nghia;
        if(check){
            document.getElementsByClassName("text-center_list-answer")[index_array[index]].setAttribute("status", 1);
            check = false;
        }
        nghia = mydata[vocb_phu[index]].nghia;
    }

}

function RandomArray(value, length, a = 3){
    let i = 0;
    const array = [];
    while(true){
        let rd = Math.floor(Math.random() * length);
        if(rd != value && !IsFindArray(array, rd)){
            array[i] = rd;
            i++;
        }
        if(array.length == a){
            break;
        }
    }
    return array;
}

function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
// console.log(RandomArray(2));
function IsFindArray(array, value){
    let obj = array.find(o => o === value);
    if(obj == null){
        return false;
    }
    return true;
}

function focusa(i){
    if(select != -1){
        document.getElementsByClassName("text-center_list-answer")[select].setAttribute("value", 0);
    }
    document.getElementsByClassName("text-center_list-answer")[i].setAttribute("value", 1);
    select = i;
}

function comfirm123(){
    for (let index = 0; index < 4; index++) {
        let select = document.getElementsByClassName("text-center_list-answer")[index].getAttribute("value")[0];
        let result = document.getElementsByClassName("text-center_list-answer")[index].getAttribute("status")[0];
        if(select == "1" && result == "1"){
            removeelms();
            return;
        }
    }
    removeelms(1);
}

function removeelms(i = 0){
    document.getElementsByClassName("box")[0].style.display = "none"; 
    var a = document.getElementById("123");
    if(i == 0){
        a.className = "done";
    }else{
        a.className = "fail";
    }
    descripsion_vocb();
}

function descripsion_vocb(){
    let a = document.getElementById('tu');
    a.innerHTML = main_vocb.tu;
    let b = document.getElementById('t_loai');
    b.innerHTML = main_vocb.t_loai;
    let c = document.getElementById('nghia');
    c.innerHTML = main_vocb.nghia;
    document.getElementById("123").style.display = "";
}
function click_Btn_Next(){
    document.getElementById("123").style.display = "none";
    document.getElementsByClassName("box")[0].style.display = ""; 
    Objective_Test();
}

function randomSetColor(){
    var symbols, color;
    var array = document.getElementsByTagName("div");
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        symbols = "0123456789ABCDEF";
        color = "#";
        for (let index = 0; index < 6; index++) {
            color = color + symbols[Math.floor(Math.random() * 16)];
        }
        element.style.background = color;
        // console.log(u + " " + color);
    }
}

function loadAllDiv(){
    for (let i = 0; i < mydata.length; i++) {
        var newDiv = document.createElement("div");
        var newH2 = document.createElement("h2");
        document.body.appendChild(newDiv);
        newDiv.appendChild(newH2);
        for (let index = 0; index < 2; index++) {
            var newP = document.createElement("p");
            newDiv.appendChild(newP);
        }
    }
    arrayDiv = document.getElementsByTagName("div");
    // newDiv.className = "aClassName";
    // newDiv.createElement("h2");
}

function SetAllVocb(){
    console.log(arrayDiv.length);
    for (let i = 0; i < arrayDiv.length; i++) {
        const element = arrayDiv[i];
        let random_main = Math.floor(Math.random() * mydata.length);
        main_vocb = mydata[random_main];
        let vocb =  mydata[random_main].tu;
        let tuloai =  mydata[random_main].t_loai;
        let nghia =  mydata[random_main].nghia;
        element.getElementsByTagName("h2")[0].innerHTML = vocb + " ("+ tuloai +")";
//         element.getElementsByTagName("p")[0].innerHTML = tuloai;
        element.getElementsByTagName("p")[0].innerHTML = nghia;
        // element.getElementsByTagName("p")[2].innerHTML = vocb;
        removeItemOnce(mydata, main_vocb);

    }
    // console.log(removeItemOnce(mydata, main_vocb));

}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
