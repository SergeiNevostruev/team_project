function openCity(evt, cityName) {
    // Объявляю все переменные
    var i, tabcontent, tablinks;

    // Элементы с классом, содержимого вкладки.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Элементы с классом ссылки вкладки
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Показать открытую вкладку и добавить кнопке активный класс открывщейся вкладке
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // При зарузке страницы показывает вседа активную вкладку
  document.getElementById("defaultOpen").click();



  //////-------------hamburger---------///////
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });