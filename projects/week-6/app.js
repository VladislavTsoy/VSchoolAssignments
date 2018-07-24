function openTab(name, element, color) {
    var tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tabcontent')

    for(var i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none"
    }

    tabLinks = document.getElementsByClassName('tablink');
    for(var i = 0; i < tabLinks.length; i++){
        tabLinks[i].style.backgroundColor = ""
    }

    document.getElementById(name).style.display = "block";
    element.style.backgroundColor = color;
}   

document.getElementById("defaultOpen").click();

