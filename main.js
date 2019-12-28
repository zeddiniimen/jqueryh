var txt= document.getElementById('text');
function optionbold(){
    if(txt.style.fontWeight=='bold'){
        txt.style.fontWeight='normal';

    }
    else{
    txt.style.fontWeight='bold';
}
}
function optionstyle(){
    if(txt.style.fontStyle=='italic'){
        txt.style.fontStyle='normal';
    }
    else{
    txt.style.fontStyle='italic';
    }
}
function optiondecoration(){
    if(txt.style.textDecoration=='underline'){
        txt.style.textDecoration='none';
    }
    else{
        txt.style.textDecoration='underline';
    }
}
function optionsize(){
    var sop=document.getElementById('liste').value;
    txt.style.fontSize= sop + 'px';
}
function optionfamily(){
    var sfam=document.getElementById('list').value;
    txt.style.fontFamily= sfam;
}
