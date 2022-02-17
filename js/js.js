function sidebarHandler(e) {
  document.getElementById("miniSidebar").classList.add("-translate-x-[0px]");
  document.getElementById("black-page").classList.remove("hidden");
  document.getElementById("black-page").classList.add("block");
}

function sidebarRemover() {
  console.log("black click");
  document.getElementById("black-page").classList.add("hidden");
  document.getElementById("miniSidebar").classList.remove("-translate-x-[0px]");
  document.getElementById("miniSidebar").classList.add("-translate-x-[270px]");
}
