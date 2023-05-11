(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.getElementById("download-btn").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "files/RESUME(reine).pdf";
    link.download = "RESUME(reine).pdf"; 
    link.click();
  });