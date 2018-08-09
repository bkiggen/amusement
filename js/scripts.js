$(document).ready(function() {

    $("form#height").submit(function(event) {
      event.preventDefault();
      var feet = $(".feet").val();
      var inches = $(".inches").val();
      var height = parseInt(feet) + parseInt(inches);


      if(height < 48){
        // small
        $("ul .m, ul .l").removeClass("bolded");
        $(".s").addClass("bolded");
        console.log("small");
      } else if (height >= 48 && height <80){
        // medium
        $("ul .s, ul .l").removeClass("bolded");
        $(".m").addClass("bolded");
        console.log("medium");
      } else {
        // large
        $(".l").addClass("bolded");
        $("ul .s, ul .m").removeClass("bolded");
        console.log("large");
      };

    });
});
