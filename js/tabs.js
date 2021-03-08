// TABS JS 
// TABS JS REFERENCED FROM https://www.w3schools.com/howto/howto_js_tabs.asp
function openContent(event, tabName) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" tab-active","");
    }

    tabActive = document.getElementsByClassName("tab-active");
    for (i = 0; i < tabActive.length; i++) {
        document.getElementById(tabName).style.display = "block";
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " tab-active";

}

// have first tabs open by default
document.getElementById("default-open").click();
