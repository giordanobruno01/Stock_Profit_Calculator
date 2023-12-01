function calculation() {
  var stock = document.getElementById("stock").value;
  var buydate =
    document.getElementById("buydate").value === ""
      ? 0
      : new Date(document.getElementById("buydate").value);
  document.getElementById("buydate").value;
  var buyprice = parseFloat(document.getElementById("buyprice").value);
  var buyconversion = parseFloat(
    document.getElementById("buyconversion").value === ""
      ? 1
      : document.getElementById("buyconversion").value
  );
  var buyfees = parseFloat(
    document.getElementById("buyfees").value === ""
      ? 0
      : document.getElementById("buyfees").value
  );
  var sellprice = parseFloat(document.getElementById("sellprice").value);
  var sellconversion = parseFloat(
    document.getElementById("sellconversion").value === ""
      ? 1
      : document.getElementById("sellconversion").value
  );
  var sellfees = parseFloat(
    document.getElementById("sellfees").value === ""
      ? 0
      : document.getElementById("sellfees").value
  );
  var selldate =
    document.getElementById("selldate").value === ""
      ? 0
      : new Date(document.getElementById("selldate").value);

  if (isNaN(buyprice) || isNaN(sellprice)) {
    alert("Prices are mandatory");
    return;
  }

  var buyconverted = (buyprice + buyfees) / buyconversion;
  var sellcoverted = (sellprice - sellfees) / sellconversion;

  var netresult = sellcoverted - buyconverted;
  document.getElementById("profit").innerHTML = netresult.toFixed(2);
  var timediff = selldate - buydate;
  document.getElementById("day").innerHTML = Math.ceil(
    timediff / (1000 * 3600 * 24)
  );

  document.getElementById("percentage").innerHTML = (
    (netresult * 100) /
    (buyconverted + sellfees)
  ).toFixed(2);
  document.getElementById("results").style.display = "block";
  if (buydate === 0 || selldate === 0) {
    document.getElementById("days").style.display = "none";
  }
  if(stock!==""){
    document.getElementById("stockname").innerHTML = "Profit for "+ stock
  }
}
function displaydollar() {
  document.getElementById("dollar").style.display = "block";
  document.getElementById("othercurr").style.display = "none";
}
function displayother() {
  document.getElementById("dollar").style.display = "none";
  document.getElementById("othercurr").style.display = "block";
}
//   $(document).ready(function () {
//     console.log("hello");
//     $("#optdollar").click(function () {
//       console.log("hello");
//       $("#dollar").toggle();
//       $("#othercurr").hide();
//     });
//   });
//   $(document).ready(function () {
//     $("#optother").click(function () {
//       $("#othercurr").show();
//       $("#dollar").hide();
//     });
//   });
