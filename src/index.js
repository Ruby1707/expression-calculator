function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  var Minus=0;
  var Plus=0;
  var Del=0;
  var Umn=0;
  var k=0;
  var m=0;
  var Result=0;
    Inf=0;
    let ExprMass=[];
    let New =[];
    for(var i=0;i<expr.length;i++){
      if(expr.substr(i,1)==" "){
        expr=expr.slice(0,i)+expr.slice(i+1,expr.length+1)
        i--;
    }
    }

    for(var i=0;i<expr.length;i++){
      ExprMass[i]=expr.substr(i,1);
    }
    if(ExprMass[expr.length-1]==")"){
    for(var i=0;i<=ExprMass.length-1;i++){
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
    }
    else{
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
      if(ExprMass[i]=="("){
        k++;
      }
      if(ExprMass[i]==")"){
        m++;
      }
    }
    for(var i=0;i<=ExprMass.length-1;i++){
      if(ExprMass[i]=="("){
        k++;
      }
      if(ExprMass[i]==")"){
        m++;
      }
      if(ExprMass[i]=="/"&&ExprMass[i+1]==0){
        throw "TypeError: Devision by zero.";
      }
    }
    if(k!=m){
      throw "ExpressionError: Brackets must be paired";
    }

  while(ExprMass.length>1){

    var Left=ExprMass.indexOf(")",0);
    var Right=ExprMass.lastIndexOf("(",Left);
    if(Left>=0&&Right>=0){
    var NPlus=0;
    var NMinus=0;
    var NUmn=0;
    var NDel=0;

    for(var i=Right;i<=Left;i++){
      New[i-Right]=ExprMass[i];
      if(New[i-Right]=="+"){
        NPlus++;
      }
      if(New[i-Right]=="*"){
        NUmn++;
      }
      if(New[i-Right]=="-"){
        NMinus++;
      }
      if(New[i-Right]=="/"){
        NDel++;
      }
    }

    for(var i=0;i<=NDel-1;i++){
      Del=New.indexOf("/",0);
      New[Del]=String(Number(New[Del-1])/Number(New[Del+1]));
      New.splice(Del-1,3,New[Del]);
    }
    for(var i=0;i<=NUmn-1;i++){
      Umn=New.indexOf("*",0);
      New[Umn]=String(Number(New[Umn-1])*Number(New[Umn+1]));
      New.splice(Umn-1,3,New[Umn]);
    }

    for(var i=0;i<=NMinus-1;i++){
      Minus=New.indexOf("-",0);
      New[Minus]=String(Number(New[Minus-1])-Number(New[Minus+1]));
      New.splice(Minus-1,3,New[Minus]);
    }
    for(var i=0;i<=NPlus-1;i++){
      Plus=New.indexOf("+",0);
      New[Plus]=String(Number(New[Plus-1])+Number(New[Plus+1]));
      New.splice(Plus-1,3,New[Plus]);
    }


    New.splice(0,3,New[1])
    ExprMass.splice(Right,Left-Right+1 ,String(New.splice(0,3,New[1])));

    }

    else{

    var NPlus=0;
    var NMinus=0;
    var NUmn=0;
    var NDel=0;
    for(var i=0;i<=ExprMass.length;i++){

      if(ExprMass[i]=="+"){
        NPlus++;
      }
      if(ExprMass[i]=="*"){
        NUmn++;
      }
      if(ExprMass[i]=="-"){
        NMinus++;
      }
      if(ExprMass[i]=="/"){
        NDel++;
      }
    }
    for(var i=0;i<=NDel-1;i++){
      Del=ExprMass.indexOf("/",0);
      ExprMass[Del]=String(Number(ExprMass[Del-1])/Number(ExprMass[Del+1]));
      ExprMass.splice(Del-1,3,ExprMass[Del]);
    }

    for(var i=0;i<=NUmn-1;i++){
      Umn=ExprMass.indexOf("*",0);

      ExprMass[Umn]=String(Number(ExprMass[Umn-1])*Number(ExprMass[Umn+1]));
     ExprMass.splice(Umn-1,3,ExprMass[Umn]);
    }
      for(var i=0;i<=NMinus-1;i++){
      Minus=ExprMass.indexOf("-",0);
      ExprMass[Minus]=String(Number(ExprMass[Minus-1])-Number(ExprMass[Minus+1]));
      ExprMass.splice(Minus-1,3,ExprMass[Minus]);
    }
    for(var i=0;i<=NPlus-1;i++){
      Plus=ExprMass.indexOf("+",0);
      ExprMass[Plus]=String(Number(ExprMass[Plus-1])+Number(ExprMass[Plus+1]));
      ExprMass.splice(Plus-1,3,ExprMass[Plus]);
    }
  }
}
Result=Number(Number(ExprMass[0]).toFixed(4));
return Result;
}


module.exports = {
    expressionCalculator
}
