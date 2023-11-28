function calculation(){

    var stock = document.getElementById("stock").value;
    var buydate =  new Date(document.getElementById("buydate").value) ;
    var buyprice = parseFloat(document.getElementById("buyprice").value);
    var buyconversion = parseFloat(document.getElementById("buyconversion").value === "" ? 1 :document.getElementById("buyconversion").value);
    var buyfees = parseFloat(document.getElementById("buyfees").value === "" ? 0 :document.getElementById("buyfees").value);
    var sellprice = parseFloat(document.getElementById("sellprice").value);
    var sellconversion = parseFloat(document.getElementById("sellconversion").value === "" ? 1 :document.getElementById("sellconversion").value);
    var sellfees = parseFloat(document.getElementById("sellfees").value === "" ? 0 :document.getElementById("sellfees").value);
    var selldate = new Date(document.getElementById("selldate").value) ;
    
    if(isNaN(buyprice) || isNaN(sellprice)){
       
        alert("Prices are mandatory")
        return 
    }
   
    var buyconverted = (buyprice + buyfees)/buyconversion;
    var sellcoverted = (sellprice - sellfees)/sellconversion;

    var netresult = sellcoverted - buyconverted
    document.getElementById("profit").innerHTML = netresult.toFixed(2) ;
    var timediff = selldate - buydate
    document.getElementById("days").innerHTML = Math.ceil(timediff/ (1000 * 3600 * 24));
     
    document.getElementById("percentage").innerHTML = (netresult*100/(buyconverted+sellfees)).toFixed(2) 
}