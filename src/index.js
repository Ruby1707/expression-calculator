function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    function expressionCalculator(expr) {
  var Minus=0;
  var Plus=0;
  var Del=0;
  var Umn=0;
  var k=0;
  var m=0;
  Inf=0;
  let ExprMass=[];
  for(var i=0;i<expr.length;i++){
    if(expr.substr(i,1)==" "){
      expr=expr.slice(0,i)+expr.slice(i+1,expr.length+1)
      i--;
  }
  }

  for(var i=0;i<expr.length;i++){
    ExprMass[i]=expr.substr(i,1);
  }
  for(var i=0;i<ExprMass.length-1;i++){
    if(ExprMass[i]!="("&&ExprMass[i]!=")"&&ExprMass[i]!="+"&&ExprMass[i]!="*"&&ExprMass[i]!="/"&&ExprMass[i]!="-"){
      if(ExprMass[i+1]!="("&&ExprMass[i+1]!=")"&&ExprMass[i+1]!="+"&&ExprMass[i+1]!="*"&&ExprMass[i+1]!="/"&&ExprMass[i+1]!="-"){
        if(ExprMass[i+2]!="("&&ExprMass[i+2]!=")"&&ExprMass[i+2]!="+"&&ExprMass[i+2]!="*"&&ExprMass[i+2]!="/"&&ExprMass[i+2]!="-"){
          if(i==ExprMass.length-2){
          ExprMass[i]=ExprMass[i]+ExprMass[i+1];
          ExprMass.splice(i+1,2);
          }
          else{
            ExprMass[i]=ExprMass[i]+ExprMass[i+1]+ExprMass[i+2];
            ExprMass.splice(i+1,2);
          }
        }
        else{ExprMass[i]=ExprMass[i]+ExprMass[i+1];
        ExprMass.splice(i+1,1);
        }
      }
    }
    if(ExprMass[i]=="("){
      k++;
    }
    if(ExprMass[i]==")"){
      m++;
    }
  }
  if(k!=m){
    throw "ExpressionError: Brackets must be paired";
  }
  else{
    Inf=ExprMass.indexOf("/", 0);
    if(ExprMass[Inf+1]==0){
      throw "TypeError: Devision by zero."
    }
    else{
  var LeftBreck=0;
  var RightBreck=0;

  while(ExprMass.length>1){
    LeftBreck=ExprMass.indexOf(")", 0);
    RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
    if(LeftBreck>0||RightBreck>0){
      for(var j=RightBreck+1;j<LeftBreck-1;j++){
      Umn=ExprMass.indexOf("*", j);
     if(Umn>0&&ExprMass[j-RightBreck-1]!="("&&ExprMass[j-RightBreck+2]!=")"){
        ExprMass[Umn]=String(Number(ExprMass[Umn-1])*Number(ExprMass[Minus+1]));
        ExprMass.splice(Umn+1,1);
        ExprMass.splice(Umn-1,1);
        LeftBreck=ExprMass.indexOf(")", 0);
        RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
        }
      }
      for(var j=RightBreck+1;j<LeftBreck-1;j++){
      Del=ExprMass.indexOf("/", j);
     if(Del>0&&ExprMass[j-RightBreck-1]!="("&&ExprMass[j-RightBreck+2]!=")"){
        ExprMass[Del]=String(Number(ExprMass[Del-1])/Number(ExprMass[Minus+1]));
        ExprMass.splice(Del+1,1);
        ExprMass.splice(Del-1,1);
        LeftBreck=ExprMass.indexOf(")", 0);
        RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
        }
      }
    for(var j=RightBreck+1;j<LeftBreck-1;j++){
     Minus=ExprMass.indexOf("-", j);
     if(Minus>0&&ExprMass[j-RightBreck-1]!="("&&ExprMass[j-RightBreck+2]!=")"){
        ExprMass[Minus]=String(Number(ExprMass[Minus-1])-Number(ExprMass[Minus+1]));
        ExprMass.splice(Minus+1,1);
        ExprMass.splice(Minus-1,1);
        LeftBreck=ExprMass.indexOf(")", 0);
        RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
        }
      }
LeftBreck=ExprMass.indexOf(")", 0);
    RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
    for(var j=RightBreck+1;j<LeftBreck-1;j++){
       Plus=ExprMass.indexOf("+", j);
       if(Plus>0){
       ExprMass[Plus]=String(Number(ExprMass[Plus-1])+Number(ExprMass[Plus+1]));
       ExprMass.splice(Plus+1,1);
       ExprMass.splice(Plus-1,1);
       LeftBreck=ExprMass.indexOf(")", 0);
       RightBreck=ExprMass.lastIndexOf("(", LeftBreck);
       }
      }
    if( LeftBreck-RightBreck==2){
      ExprMass.splice(LeftBreck,1);
      ExprMass.splice(RightBreck,1);
      }
    }
  else{
    for(var j=0;j<ExprMass.length-1;j++){
      Umn=ExprMass.indexOf("*", j);
      if(Umn>0){
        ExprMass[Umn]=String(Number(ExprMass[Umn-1])*Number(ExprMass[Umn+1]));
        ExprMass.splice(Umn+1,1);
        ExprMass.splice(Umn-1,1);
        }
      }
    for(var j=0;j<ExprMass.length-1;j++){
      Del=ExprMass.indexOf("/", j);
      if(Del>0){
        ExprMass[Del]=String(Number(ExprMass[Del-1])/Number(ExprMass[Del+1]));
        ExprMass.splice(Del+1,1);
        ExprMass.splice(Del-1,1);
        }
      }
    for(var j=0;j<ExprMass.length-1;j++){
      Minus=ExprMass.indexOf("-", j);
      if(Minus>0){
        ExprMass[Minus]=String(Number(ExprMass[Minus-1])-Number(ExprMass[Minus+1]));
        ExprMass.splice(Minus+1,1);
        ExprMass.splice(Minus-1,1);
        }
      }
    for(var j=0;j<ExprMass.length-1;j++){
       Plus=ExprMass.indexOf("+", j);
     if(Plus>0){
       ExprMass[Plus]=String(Number(ExprMass[Plus-1])+Number(ExprMass[Plus+1]));
       ExprMass.splice(Plus+1,1);
       ExprMass.splice(Plus-1,1);
     }
  }
  var Result="";
   for(var j=0;j<ExprMass.length-1;j++){
    ExprMass.splice(0,1);
    ExprMass.splice(1,1);
  }
  }
  }
  }
    Result=Number(Number(ExprMass[0]).toFixed(4));
  }
  return Result;
}
}

module.exports = {
    expressionCalculator
}
