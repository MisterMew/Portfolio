
$(document).ready(function(){

    /* ABOUT ME: TABS */
    var tabLinks = document.getElementsByClassName("aboutme-tab-links");
    var tabContents = document.getElementsByClassName("aboutme-tab-contents");
    
    ///Open Tab
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
})
