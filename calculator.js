$(document).ready(function(){
   $("#reset").click(function(){
        $("#aplusb").val("");
        $("#aA").val("");
        $("#aA1").val("");
        $("#bB").val("");
        $(".result").html("");

   });
   $("#submit").click(function(){
    var sum=$("#aplusb").val();
    var a=$("#aA").val();
    var A=$("#aA1").val();
    var b=$("#bB").val();
    if(sum==""&&a==""&&A==""&&b==""){
        alert("Please Enter Atleast One Value");
        return false;
    }
    sum=parseFloat(sum);
    a=parseFloat(a);
    A=parseFloat(A);
    console.log(A);
    b=parseFloat(b);
    if((!isNaN(a)&&a==0.0)||(!isNaN(b)&&b==0.0)||(!isNaN(A)&&A==0)||(!isNaN(sum)&&sum==0)){
        alert("Please Enter Non Zero Values");
        return false;
    }
    if(!isNaN(A)&&!isNaN(a)&&A!=a){
        alert("Both A's value Must Be Same");
        return false;
    }
    temp=[];
    var count=0;
    if(!isNaN(sum)){
        temp.push(0);
        count=count+1;
    }
    if(!isNaN(a)){
        temp.push(1);
        count=count+1;
    }
    if(!isNaN(A)){
        temp.push(2);
        count=count+1;
    }
    if(!isNaN(b)){
        temp.push(3);
        count=count+1;
    }
    if(count==0){
        alert("Please enter numbers!!");
        return true;
    }
    var sum1=-1;
    var a1=-1;
    var A1=-1;
    var b1=-1;
    for(var i=0;i<count;i++){
        if(temp[i]==0){
            sum1=1;
        }
        if(temp[i]==1){
            a1=1;
        }
        if(temp[i]==2){
            A1=1;
        }
        if(temp[i]==3){
            b1=1;
        }
    }
if(sum1==1&&a1==1&&A1==1&&b1==1){
        if(sum!=(A+b)){
            alert("A+B value is not equal");
            return false;
        }
    var z=sum/a;
    var ratio=A/b;
    console.log(z);
    console.log(ratio);
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("This numbers donot make golden ratio with difference "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("This numbers donot make golden ratio with difference "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(sum1==1&&a1==1&&b1==1){
    console.log(sum)
    if(sum!=(a+b)){
        alert("A+B value is not equal");
        return false;
    }
    var z=sum/a;
    var ratio=a/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with difference "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with difference "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }

}
if(sum1==1&&A1==1&&b1==1){
    if(sum!=(A+b)){
        alert("A+B value is not equal");
        return false;
    }
    var z=sum/A;
    var ratio=A/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(sum1==1&&a1==1&&A1==1){
    var z=sum/a;
    var ratio=a/(sum-a);
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(sum1==1&&a1==1){
    console.log(a);
    var z=sum/a;
    var goldenratio=1.618;
    var ratio=(a/(sum-a));
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(sum1==1&&b1==1){
    var z=sum/(sum-b);
    var ratio=(sum-b)/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(sum1==1&&A1==1){
    var z=sum/(sum-A);
    var ratio=(A)/(sum-A);
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }

}
if(sum1==1){
    var OA=sum/1.618;
    var OB=sum-OA;
    var HTML="The  given number makes Golden Ratio with <br> A =  "+OA+" B = "+OB+" <br> and A+B/A = 1.618 and A/B = 1.618."
    $(".result").html(HTML);
    console.log("a is "+OA);
    console.log("b is " +OB);
    return true;
}
if(a1==1&&A1==1&&b1==1){
    var Asum=a+b;
    var z=Asum/a;
    var ratio=a/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(a1==1&&A1==1){
   var goldenratio=1.618;
   var OB=a/goldenratio;
   console.log("a is "+a);
   console.log("b is "+OB);
   var HTML="The  given number makes Golden Ratio with <br> A =  "+a+" B = "+OB+" <br> and A+B/A = 1.618 and A/B = 1.618."
    $(".result").html(HTML);
   return true; 
}
if(a1==1&&b1==1){
    var goldenratio=1.618;
    var z=(a+b)/a;
    var ratio=a/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
}
if(a1==1){
    var goldenratio=1.618;
   var OB=a/goldenratio;
   var HTML="The  given number makes Golden Ratio with <br> A =  "+a+" B = "+OB+" <br> and A+B/A = 1.618 and A/B = 1.618."
    $(".result").html(HTML);
   console.log("a is "+a);
   console.log("b is "+OB);
   return true; 
   
}
if(A1==1&&b1==1){
    var z=(A+b)/A;
    var ratio=A/b;
    var goldenratio=1.618;
    if(ratio>goldenratio){
        var diff=ratio-goldenratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio>ratio){
        var diff=goldenratio-ratio;
        var HTML="This numbers donot make Golden Ratio with difference "+diff+" <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        console.log("this numbers donot make golden ratio with diff "+diff);
        return true;
    }
    if(goldenratio==ratio){
        var HTML="This numbers  make Golden Ratio with <br> A/B = "+ratio+" <br> and A+B/A = "+z;
        $(".result").html(HTML);
        return true;
    }
    
}
if(A1==1){
    var goldenratio=1.618;
    var OB=A/goldenratio;
    var HTML="The  given number makes Golden Ratio with <br> A =  "+A+" B = "+OB+" <br> and A+B/A = 1.618 and A/B = 1.618."
    $(".result").html(HTML);
    console.log("a is "+A);
    console.log("b is "+OB);
    return true;  
}
if(b1==1){
    var goldenratio=1.618;
   var OA=b*goldenratio;
   var HTML="The  given number makes Golden Ratio with <br> A =  "+OA+" B = "+b+" <br> and A+B/A = 1.618 and A/B = 1.618."
    $(".result").html(HTML);
   console.log("a is "+OA);
   console.log("b is "+b);
   return true; 
}
});
});