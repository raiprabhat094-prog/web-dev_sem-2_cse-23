
function result(){
    let inputdata=document.getElementById("inputtext").Value;
    document.getElementById('text').textcontent=inputdata;

    let changecolor=document.getElementById('text');
        changecolor.style.color="brown";
    
    let bodycolor=document.getElementByTagName('body')[0];
    bodycolor.style.backgroundColor="bisque";
}
let para=document.getElementById("paratext");
function changetextcolor(){
    para.style.backgroundcolor="burlywood"+ Math.floor(Math.random()*16777215).tostring(16);
}
para.addEventListener('mouseover'.changetextcolor);