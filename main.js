function id(i){return document.getElementById(i);}
function put(t){id('console').innerHTML += t + '<br />';}
function clear(){id('console').innerHTML = '';}
window.onload = function()
{
 let ctrl = false;
 id('input').onkeydown = e =>
 {
  if(e.keyCode === 9)
  {
   e.preventDefault();
   let start = e.target.selectionStart, end = e.target.selectionEnd, value = e.target.value;
   e.target.value = value.substr(0,start) + ' ' + value.substr(end);
   e.target.selectionStart = e.target.selectionEnd = start + 1;
  }
  else if(e.keyCode === 13 && ctrl)
  {
   try
   {
    eval(id('input').value);
   }
   catch(ex)
   {
    if(ex.lineNumber)
    {
     put('Line ' + ex.lineNumber + ': ' + ex.name + ': ' + ex.message);
    }
    else
    {
     put(ex.name + ': ' + ex.message);
    }
   }
  }
  else if(e.keyCode === 17){ctrl = true;}
 };
 id('input').onkeyup = e => {if(e.keyCode === 17){ctrl = false;}};
};
