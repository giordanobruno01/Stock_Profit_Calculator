function calculation(){

    var stock = document.getElementById("stock").value;
    var buydate = document.getElementById("buydate").value;
    var buyprice = document.getElementById("buyprice").value;
    var buyconversion = document.getElementById("buyconversion").value;
    var buyfees = document.getElementById("buyfees").value;
    var sellprice = document.getElementById("sellprice").value;
    var sellconversion = document.getElementById("sellconversion").value;
    var sellfees = document.getElementById("sellfees").value;
    var selldate = document.getElementById("selldate").value;
    var buyconverted = (buyprice + buyfees)*buyconversion;
    var sellcoverted = (sellprice + sellfees)*sellconversion;
    console.log(buyfees);
    document.getElementById("profit").innerHTML = sellcoverted - buyconverted;
}