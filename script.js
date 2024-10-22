document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Перевіряємо, чи це внутрішнє посилання
      if (link.hostname === window.location.hostname) {
        // Перевірка, чи це та ж сама сторінка
        if (link.href === window.location.href) {
          event.preventDefault(); // Запобігаємо переходу
          alert("Ви вже на цій вкладці!"); // Виводимо повідомлення
        } else {
          event.preventDefault(); // Зупиняє стандартну дію посилання
          const url = this.getAttribute("href");
          document.body.classList.remove("loaded"); // Прибирає ефект завантаження
          setTimeout(function () {
            window.location.href = url; // Переходить на нову сторінку після затримки
          }, 500); // Затримка для плавного переходу
        }
      }
    });
  });
});

// Додаємо подію для відновлення сторінки після повернення з кешу
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Якщо сторінка була взята з кешу (повернення назад)
    document.body.classList.add("loaded"); // Примусово додаємо клас для завершення анімації
  }
});
