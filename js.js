function calculation(){

    var stock = document.getElementById("stock").value;
    var buydate = document.getElementById("buydate").value;
    var buyprice = parseFloat(document.getElementById("buyprice").value);
    var buyconversion = parseFloat(document.getElementById("buyconversion").value);
    var buyfees = parseFloat(document.getElementById("buyfees").value);
    var sellprice = parseFloat(document.getElementById("sellprice").value);
    var sellconversion = parseFloat(document.getElementById("sellconversion").value);
    var sellfees = parseFloat(document.getElementById("sellfees").value);
    var selldate = document.getElementById("selldate").value;
    var buyconverted = (buyprice + buyfees)/buyconversion;
    var sellcoverted = (sellprice - sellfees)/sellconversion;
    console.log(buyconversion);
    document.getElementById("profit").innerHTML = sellcoverted - buyconverted;
}