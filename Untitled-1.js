jQuery(function($) {

    var target = $("#lala");
    target.html(target.text().replace(/./g, "<span>$&</span>"));
  
    setTimeout(runAnimation, 250);
  
    function runAnimation() {
      var index, spans;
  
      index = 0;
      spans = target.children();
      doOne();
  
      function doOne() {
        var span = $(spans[index]);
        if (!$.trim(span.text())) {
          // Skip blanks
          next();
          return;
        }
  
        // Do this one
        span.css({
          position: "relative",
        }).animate({
          top: "-20"
        }, "fast").animate({
          top: "0"
        }, "fast", function() {
          span.css("position", "");
          next();
        });
      }
  
      function next() {
        ++index;
        if (index < spans.length) {
          doOne();
        }
        else {
          setTimeout(runAnimation, 500);
        }
      }
    }
  
  });