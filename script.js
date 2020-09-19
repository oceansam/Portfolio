var projectTabs = document.querySelectorAll(
  ".projects-container .button-container button"
);
var tabPanels = document.querySelectorAll(".projects-container .tab-box");

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.getElementById(tab.id + "Info");
    tabPanels.forEach((tabPanel) => {
      tabPanel.classList.remove("active");
    });
    target.classList.add("active");
  });
});
