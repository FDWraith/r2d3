var bill_data = {
    'Agriculture': 92145575058,
    'Commerce': 9559346998,
    'Defense': 344946606112,
    'Education': 41089971768,
    'Energy': 18376089358,
    'Health': 469265987480,
    'Security': 16151957775,
    'HUD': 37782005646,
    'Interior': 9817110592,
    'Justice': 20677550018,
    'Labor': 39122376334,
    'State': 8207929299,
    'Transportation': 51006505462,
    'Treasury': 479346998895,
    'Veterans': 57743954829,
    'EPA': 8865840186,
    'GSA': 90830980,
    'ISA': 14836136000,
    'NASA': 16482140665,
    'SSA': 541659506566,
    'Others': 131035964158,
    //this is negated, so we can display on graph
    'Receipts': 212371425064
};

var dyn_bill = d3.select("#dynamic-bill");
var bill_values = [];
for (var key in bill_data) {
    bill_values.push(bill_data[key]);
}

var makeBillBars = function() {

    dyn_bill.selectAll("div")
        .data(bill_values)
        .enter()
        .append("div")
        .style("width", function(d) {
            return (d / 2000000000) + "px";
        })
        .text(function(d) {
            return "$" + (d / 2000000000).toFixed(1) + "B";
        })
        .attr("class", "bill");
};

var addBillLabels = function() {

    var bars = document.getElementsByClassName("bill");

    var bill_keys = [];
    for (key in bill_data) {
        bill_keys.push(key);
    }
    
    for(var i = 0; i < bars.length; i++) {
        var newHeading = document.createElement("h2");
        var headingText = document.createTextNode(bill_keys[i]);
        newHeading.appendChild(headingText);
        
        document.getElementsByClassName("chart").item(0).insertBefore(newHeading, bars.item(i));
    }
    
};

var bush_data = {
    'Agriculture': 91851289833,
    'Commerce': 7810824481,
    'Defense': 601580171977,
    'Education': 66730399595,
    'Energy': 21648963075,
    'Health': 708590794132,
    'Security': 41149215983,
    'HUD': 49659079413,
    'Interior': 9931208902,
    'Justice': 26853818917,
    'Labor': 59522508851,
    'State': 17696509863,
    'Transportation': 65699544764,
    'Treasury': 555181588265,
    'Veterans': 85734951947,
    'EPA': 8031360647,
    'GSA': 346990389,
    'ISA': 11491148204,
    'NASA': 18040465351,
    'SSA': 665451694486,
    'Others': 185262518968,
    //this is negated, so we can display on graph
    'Receipts': 281022761760     
};


var dyn_bush = d3.select("#dynamic-bush");
var bush_values = [];
for (var key in bush_data) {
    bush_values.push(bush_data[key]);
}

var makeBushBars = function() {

    var width = 0;
    
    dyn_bush.selectAll("div")
        .data(bush_values)
        .enter()
        .append("div")
        .attr("style", function(d) {
            width = d / 2000000000;
            return "width: " + width + "px ; transform: translate(" + ((window.innerWidth * 0.387) - width) + "px, 0)";
        })
        // .style( {"width": function(d) {
        //     width = d / 2000000000;
        //     console.log(width);
        //     return width + "px";
        // } }, { "transform": function(d) {
        //     return "translate(" + width + ", 0)";
        // } })
        .text(function(d) {
            return "$" + (d / 2000000000).toFixed(1) + "B";
        })
        .attr("class", "bush");
};

var addBushLabels = function() {

    var bars = document.getElementsByClassName("bush");

    var bush_keys = [];
    for (key in bush_data) {
        bush_keys.push(key);
    }
    
    for(var i = 0; i < bars.length; i++) {
        var newHeading = document.createElement("h2");
        var headingText = document.createTextNode(bush_keys[i]);
        newHeading.appendChild(headingText);
        
        document.getElementsByClassName("chart").item(1).insertBefore(newHeading, bars.item(i));
    }
    
};

makeBillBars();
addBillLabels();

makeBushBars();
addBushLabels();
