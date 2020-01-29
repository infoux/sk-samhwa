$(document).ready(function() {

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

