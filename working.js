$(window).resize(function () {
    var windowHeight = $( window ).height();
    
    var newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);
    
    var newContentHeight = windowHeight * 0.7;
    $('#content').height(newContentHeight);
  });
  
  
  function calcIncomeTax() {
    var preFormattedIncome = document.getElementById("income").value;
    var income = preFormattedIncome.replace(/[^\d.-]/g, '');
    // Tax slabs and rates (as of knowledge cutoff in 2025)
    if (income <= 600000) {
        // First slab: 0% tax
      document.getElementById("total").innerHTML = (0.00).toFixed(2);
    } else if (income > 600000 && income <= 1200000) {
        // Second slab: 5% tax
        var incomeTax = (income - 600000) * 0.05;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income > 1200000  && income <= 2200000){
        // Third slab: 15% tax
        var incomeTax = 30000 + (income - 1200000) * 0.15; 
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income > 2200000 && income <= 3200000) {
        /// Fourth slab: 25% tax
        var incomeTax = 180000 + (income - 2200000) * 0.25;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income > 3200000 && income <= 4100000) {
         /// Fifth slab: 30% tax
         var incomeTax = 430000 + (income - 3200000) * 0.30;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
    else { //*where income > 4100000
 // Sixth slab: 35% tax
        var incomeTax = 700000 + (income - 6000000) * 0.35;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
  }
