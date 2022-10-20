var h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.innerHTML="Web Calculator";
var p = document.createElement("p");
p.setAttribute("id","description");
p.innerHTML="Using HTML CSS DOM and JS";
var div = document.createElement("div");
div.setAttribute("class","container");
var div1 = document.createElement("div");
div1.setAttribute("class","first")
div1.innerHTML=`<input type="text" placeholder="0" id="result" class="top">`;
var div2 = document.createElement("div");
div2.setAttribute("class","buttons");

var b1 = create_button("button","onclick","Clear()","id","clear","C");
var b2 = create_button1("button","onclick","ans('%')","%");
var b3 = create_button1("button","onclick","del()","←");
var b4 = create_button("button","onclick","ans('/')","class","op","÷");
var b5 = create_button1("button","onclick","ans('7')","7");
var b6 = create_button1("button","onclick","ans('8')","8");
var b7 = create_button1("button","onclick","ans('9')","9");
var b8 = create_button("button","onclick","ans('*')","class","op","×");
var b9 = create_button1("button","onclick","ans('4')","4");
var b10 = create_button1("button","onclick","ans('5')","5");
var b11 = create_button1("button","onclick","ans('6')","6");
var b12 = create_button("button","onclick","ans('-')","class","op","-");
var b13 = create_button1("button","onclick","ans('1')","1");
var b14 = create_button1("button","onclick","ans('2')","2");
var b15 = create_button1("button","onclick","ans('3')","3");
var b16 = create_button("button","onclick","ans('+')","class","op","+");
    b16.setAttribute("id","add");
var b17 = create_button1("button","onclick","ans('00')","00");
var b18 = create_button1("button","onclick","ans('0')","0");
var b19 = create_button1("button","onclick","ans('.')",".");
var b20 = create_button("button","onclick","calculate()","id","equal","=");


function create_button(tag,attrname,attrvalue,attrname1,attrvalue1,content,attrname2,attrvalue2){
    var ele=document.createElement(tag);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.innerHTML=content;    
    return ele;
}
function create_button1(tag,attrname,attrvalue,content){
    var ele=document.createElement(tag);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;    
    return ele;
}

div.append(div1,div2);
div2.append(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20);
document.body.append(h1,p,div);

let output=document.getElementById("result");
    function ans(num){
        output.value += num;
    }
    function calculate(){
        try{
            output.value=eval(output.value);
        }
        catch(err){
            alert("Please Enter The Correct Number")
            location.reload();
        }
    }
    function del(){
        output.value = output.value.slice(0,-1);
    }
    function Clear(){
        output.value ="";
    }