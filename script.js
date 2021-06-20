//Tip Calculate karney kheliye
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
 

  
    //koi values nahi enter karney ke bath,alert box nikaley gaa
    if (billAmt === "" || serviceQual == ""  || numOfPeople=="") {
      alert("Please Enter Bill Amount");
      return;
    }
    //checking for input box wheather it is 1 or less than 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //tip calculate karne kheliye
    var total = (billAmt * serviceQual) / numOfPeople;
    //rounding for 2 dec places 
    total = Math.round(total * 100) / 100;
    //it will fix to 2 dec points
    total = total.toFixed(2);
    //tip dekhne kheliye
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = `Rs.${total} each`;
    document.getElementById("reset").style.display="inline";
  
  }
  
  //Hide the tip amount on load
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("reset").style.display="none";
 
  function reset(){
    var billAmt = document.getElementById("billamt").value ="";
    var serviceQual = document.getElementById("serviceQual").value ="";
    var numOfPeople = document.getElementById("peopleamt").value ="";

  }

 


  