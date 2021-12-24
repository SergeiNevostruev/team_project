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



  // Выпадающее меню

document.addEventListener('DOMContentLoaded', () => { 

  const button = document.querySelector('.dropbtn') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.show') // находим окно навигации
  const svg = document.querySelector('.svg-top')

  button.addEventListener('click', () => { // при клике на кнопку
    nav.classList.toggle('show-active') // открываем/закрываем окно навигации, добавляя/удаляя активный класс
    svg.classList.toggle('rotate')
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.show') && !target.closest('.dropbtn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('show-active') // то закрываем окно навигации, удаляя активный класс
      svg.classList.remove('rotate')
    }
  })

})

