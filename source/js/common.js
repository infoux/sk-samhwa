

$(document).ready(function() {




try {
    // Get the modal
    var modal = document.getElementById("mModal");

    // Get the button that opens the modal
    var btn = document.getElementById("mBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal-close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

} catch(e) {} 



    $(".type02 h4").on("click", function(){
        var opens = $(this).attr("data");
        $(this).parent().find("h4").removeClass("active");
        $(this).parent().find(".data").removeClass("active");

        $(this).addClass("active");
        $(this).parent().find("#"+ opens).addClass("active");
    });

    

    $(".sell-data h3 button.switch").on("click", function(){
        var opens = $(this).attr("data");
        $(this).parent().parent().toggleClass("open");

    });




    $(".open-pop").on("click", function(){
        $("div.pop").removeClass("on");
        $(this).parent().parent().parent().find("div.pop").addClass("on");
        
    });

    // $("div.pop h4 i").on("click", function(){
    //     $(this).parent().parent().parent().removeClass("on");
        
    // });
    $("div.pop h4").on("click", 'i', function(){
        $(this).parent().parent().parent().removeClass("on");

    });



    $(".toggle-menu").on("click", function(){
        
        $("aside").css("height", $(document).height());
        $(this).addClass("on");
        $("aside").addClass("on");
        
    });

    $("aside button.close").on("click", function(){
        $(".toggle-menu").removeClass("on");
        $("aside").removeClass("on");
    });


    $('input[name="latest"]').click(function(){
        var $radio = $(this);
        
        // if this was previously checked
        if ($radio.data('waschecked') == true)
        {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        }
        else
            $radio.data('waschecked', true);
        
        // remove was checked from other radios
        $radio.siblings('input[name="latest"]').data('waschecked', false);
    });


});

