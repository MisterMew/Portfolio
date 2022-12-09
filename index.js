
$(document).ready(function () {

    var versionNumber = "version | 1.0.10"

    /* ABOUT ME: TABS */
    ///On Function Click
    $(".aboutme-tab-links").click(function () {
        let clickedTab = $(this).attr("id");                  //Get the current id of the clicked tab 
        OpenTab(`#${clickedTab}`, `#${clickedTab}-content`); //Use the id to Open the desired tab
    })

    ///Open Tab///
    function OpenTab(tabname, contentname) {
        var tabLinks = document.getElementsByClassName("aboutme-tab-links");
        var tabContents = document.getElementsByClassName("aboutme-tab-contents");

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



    /* RETROSPECTIVE GALLERIES */
    var focusedImageBox = document.getElementById("focusedImageBox");
    var focusedImage = document.getElementById("focusedImage");

    var modal = $(focusedImageBox);
    $(".openFocusedImage").click(function () {
        let clickedImg = this.src;

        modal.css("display", "block");
        $(focusedImage.setAttribute("src", clickedImg));
    });

    window.onclick = function (event) {
        if (modal.css("display") != "none" && event.target == focusedImage) {
            modal.css("display", "none");
        }
    };

    /* To Do;
     * - Close image by clicking outside
     * - Center image 
     * 
     * event.target == $(body).on("click")
     * event.target == focusedImage
     */


    ///Smooth Scrolling ///
    $("a").on('click', function (event) {
        if (this.hash !== "") //Make sure this.hash has a value before overriding default behavior
        {
            event.preventDefault(); //Prevent default anchor click behavior

            var hash = this.hash; //Store hash
            $('html, body').animate({ //Using jQuery's animate() method to add smooth page scroll
                scrollTop: $(hash).offset().top
            }, 800, function () {               //The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                window.location.hash = hash; //Add hash (#) to URL when done scrolling (default click behavior)
            });
        }
    });


    ///DISPLAY NAVIGATION///
    $('nav-dropdown').click(function (e) {
        e.preventDefault();

        if ($('nav-items').hasClass('.show')) {
            $('nav-items').removeClass('.show');
        } else {
            $('nav-items').addClass('.show');
        }
    });
})
