$(document).ready(function(){

    var w = 500
    var h= 500
    var barPadding= 1;
    var dataset= [100, 300, 450, 340, 230, 170, 480, 300, 200, 140];

    var colWidth= w/dataset.length;
    var barWidth= colWidth - barPadding;

    var svg= d3.select("#draw-here")
        .append ("svg")
        .attr ("height", h)
        .attr ("width", w)

    svg.selectAll ("rect")
        .data (dataset)
        .enter ()
        .append ("rect")
        .attr ("x", function (d, i) {
            return i * colWidth;
        })
        .attr ("y", function (d) {
            return h - d;
        })
        .attr ("height", function (d) {
            return d;
        })
        .attr ("width", barWidth);
        
})