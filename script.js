document.getElementById("learnMoreBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var learnMorePage = document.getElementById("learnMorePage");
    learnMorePage.classList.toggle("hidden");
  });
  