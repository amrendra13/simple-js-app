function getHistory(){
    return document.getElementById("history-value").innerText;
  }
  
  function printHistory(num){
    document.getElementById("history-value").innerText=num;
  }
  
  function getOutput(){
    return document.getElementById("output-value").innerText;
  }
  
  function printOutput(num){
    if(num=="")
    document.getElementById("output-value").innerText=num;
    else
    document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
  
  function getFormattedNumber(num){
    if(num=="-"){
      return "";
    }
    var n=Number(num);
    var ans=n.toLocaleString("en");
    return ans;
  }
  
  function reverseFormattedNumber(num){
    return Number(num.replace(/,/g,""));
  }
  
  var operators=document.getElementsByClassName("operator");
  
  for(var i=0;i<operators.length;i++){
    operators[i].addEventListener('click',function(){
      if(this.id=="clear"){
        printHistory("");
        printOutput("");
      }
      else if(this.id=="backspace"){
        var output=reverseFormattedNumber(getOutput()).toString();
        if(output){ //if output has a value
          output=output.substr(0,output.length-1);
          printOutput(output);
        }
      }
      else{
        var output=getOutput();
        var history=getHistory();
        if(output=="" && history!="")
        {
          if(isNaN(history[history.length-1])){
            history=history.substr(0,history.length-1);
          }
        }
        if(output!="" || history!=""){
          output=output==""?output:reverseFormattedNumber(output);
          history=history+output;
          if(this.id=="="){
            var result=eval(history);
            printHistory("");
            printOutput(result);
          }
          else{
            history=history+this.id;
            printHistory(history);
            printOutput("");
          }
        }
      }
    });
  }
  
  var numbers=document.getElementsByClassName("number");
  
  for(var i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',function(){
      var output=reverseFormattedNumber(getOutput());
      if(output!=NaN){   //if output is a number
        output=output+this.id;
        printOutput(output);
      }
    });
  }
  