$(document).ready(function(){
   
    
    $("#s1").click(function(){
        $(".design-desc").toggle();
        });
    $("#s2").click(function(){
        $(".dev-desc").toggle();
        });
    $("#s3").click(function(){
        $(".prod-desc").toggle();
        });
    //Hovering on the portofolio images.
    $("#card1 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body1 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body1 ").hide();

        }
       
    );
    $("#card2 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body2 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body2 ").hide();

        }
       
    );
    $("#card3 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body3 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body3 ").hide();

        }
       
    );
    $("#card4 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body4 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body4 ").hide();

        }
       
    );
    $("#card5 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body5 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body5 ").hide();

        }
       
    );
    $("#card6 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body6 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body6 ").hide();

        }
       
    );
    $("#card7 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body7 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body7 ").hide();

        }
       
    );
    $("#card8 img").hover(
        function(){
            $(this).animate({
                opacity:0.8,
            },100),$("#card-body8 ").show();
        },
        function(){
            $(this).animate({opacity:1},100),$("#card-body8 ").hide();

        }
       
    );

    //Validation of the form
    $("form[name='Contactform']").validate({
        //rules governing the inputs
         rules: { 
           pname: "required",
           email: {
             required: true,
             email: true
           },
           msg:"required"
         },
         // validation error messages
         messages: {
           pname: "Please enter your firstname",
           email: {
               required: "Please, Fill this field",
               email: "Your email address must be in the format of name@domain.com"
             },
           msg:"Please Enter your message",
           success: "valid",
           
         },
         
         
         submitHandler: function(form) {
           form.submit(),alert(  " Thank you, your was message succefully sent!"); 
         }
       });

   
});