
$(document).ready(function(){

    /* ABOUT ME: TABS */
    var tabLinks = document.getElementsByClassName("aboutme-tab-links");
    var tabContents = document.getElementsByClassName("aboutme-tab-contents");
    
    ///Open Tab///
    function OpenTab(tabname, contentname) {
        //De-activate all other classes
        for (tabLink of tabLinks) {
            $(tabLink).removeClass("active-link");
        }
        for (tabContent of tabContents) {
            $(tabContent).removeClass("active-tab");
        }
        
        //Activate the classes
        $(contentname).addClass("active-tab");
        $(tabname).addClass("active-link");
    }

    ///On Function Click
    $(".aboutme-tab-links").click(function() {
        let clickedTab = $(this).attr("id");                  //Get the current id of the clicked tab 
        OpenTab(`#${clickedTab}`, `#${clickedTab}-content`); //Use the id to Open the desired tab
    })



    ///Smooth Scrolling ///
    $("a").on('click', function(event) {
        if (this.hash !== "") //Make sure this.hash has a value before overriding default behavior
        {
            event.preventDefault(); //Prevent default anchor click behavior

            var hash = this.hash; //Store hash
            $('html, body').animate({ //Using jQuery's animate() method to add smooth page scroll
                scrollTop: $(hash).offset().top
            }, 800, function(){               //The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                window.location.hash = hash; //Add hash (#) to URL when done scrolling (default click behavior)
            });
        }
    });
})
