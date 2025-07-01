$(window).resize(function () {
    var windowHeight = $( window ).height();
    
    var newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);
    
    var newContentHeight = windowHeight * 0.7;
    var newContentHeightMargin = (windowHeight * 0.3);
    $('#content').height(newContentHeight);
  });
  
  
  function calcIncomeTax() {
    var preFormattedIncome = document.getElementById("income").value;
    var income = preFormattedIncome.replace(/[^\d.-]/g, '');
    // Tax slabs and rates (as of knowledge cutoff in 2023)
    if (income <= 600000) {
        // First slab: 0% tax
      document.getElementById("total").innerHTML = (0.00).toFixed(2);
    } else if (income >= 600000 && income <= 1200000) {
        // Second slab: 2.5% tax
        var incomeTax = (income - 600000) * 0.025;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 1200000  && income <= 2400000){
        // Third slab: 12.5% tax
        var incomeTax = 15000 + (income - 1200000) * 0.125; 
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 2400000 && income <= 3600000) {
        /// Fourth slab: 22.5% tax
        var incomeTax = 165000 + (income - 2400000) * 0.225;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 3600000 && income <= 6000000) {
         /// Fifth slab: 27.5% tax
         var incomeTax = 435000 + (income - 3600000) * 0.275;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
    else {
 // Sixth slab: 35% tax
        var incomeTax = 1095000 + (income - 6000000) * 0.35;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
  }