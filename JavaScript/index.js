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

