$(document).ready(function(){

    /* Set our data values */
    var w = 500
    var h= 500
    var barPadding= 1;
    var dataset= [100, 300, 450, 340, 230, 170, 480, 300, 200, 140];

    /* Tidy up and minify equations */
    var colWidth= w/dataset.length;
    var barWidth= colWidth - barPadding;

    /* Create the SVG element */
    var svg= d3.select("#draw-here")
        .append ("svg")
        .attr ("height", h)
        .attr ("width", w)

    /* Building the bars */
    svg.selectAll ("rect")              /*   */
        .data (dataset)                 /*   */
        .enter ()                       /*   */
        .append ("rect")                /*   */
        .attr ("x", function (d, i) {
            return i * colWidth;        /* sets location for each bar, starting at 0 and moving across for each bar */
        })
        .attr ("y", function (d) {
            return h - d;               /* would normaly start at the top left (0,0) so 'minus the height' starts it at the bottom of the container */
        })
        .attr ("height", function (d) {
            return d;                   /* defines where the bars end */
        })
        .attr ("width", barWidth)       /* adds spacing between each dataset */
        .attr ("fill", "teal");         /* fills bar with teal color */

    /* Adding text information to each bar */
    svg.selectAll ("text")
        .data (dataset)
        .enter ()
        .append ("text")
        .text (function (d) {
            return d;
        })
        .attr ("text-anchor", "middle")
        .attr ("x", function (d, i) {
            return i * colWidth + barWidth / 2;
        })
        .attr ("y", function (d) {
            return h - d + 14;
        })
    /* Additional styling to text */
        .attr ("font-family", "sans-serif")
        .attr ("font-size", "11px")
        .attr ("fill", "white");
})