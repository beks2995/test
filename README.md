## Тестовое задание для фронтенд-разработчика (React)

В тестовом задании представлены макеты дизайна двух страниц: страницы каталога продуктов и страница корзины. Тестовое задание состоит из нескольких уровней — обязательных (level 1, level 2 и level 3) и необязательный (level 4).
Необязательные задачи не должны занять много времени, но помогут вам показать себя с лучшей стороны. Вы можете сделать только часть из них, если что-то покажется вам интересным, или не делать их вовсе.

Условий несколько:
- Используйте менеджер пакетов NPM;
- Используйте [React](https://github.com/facebook/react);
- Используйте [Redux](https://github.com/reduxjs/react-redux);
- Сборка скриптов [Webpack](https://webpack.js.org/);
- Сборка стилей проекта должна выполняться [Webpack](https://webpack.js.org/) или [Gulp](https://github.com/gulpjs/gulp);
- Работоспособность последних версиях браузеров Chrome, Safari и Firefox;

## Задачи
### Level 1

Реализовать список товаров, который можно отфильтровать с помощью расположенного слева списка брендов. Необходимые данные можно подгрузить из JSON-файлов [продукты](assets/products.json) и [бренды](assets/brands.json).

![](assets/images/catalog.png?raw=true "")

### Добавление товара в корзину
При добавлении в корзину необходимо отображать количество продуктов в корзине рядом с иконкой вверху.

### Вёрстка и дизайн
Для упрощения задания представлены не макеты в Sketch, Figma или PS, а мокапы, показывающие основную структуру страниц. В этой задаче вы вольны использовать любую сетку или не использовать вовсе.
Логотип можно взять [отсюда](assets/images/logo.png). Эта задача позволит нам понять, как вы видите в целом UI, как его сделать аккуратней и удобней для пользователя, не имея при этом чётких дизайнов или ограничений.

### Level 2

* Сделать респонсив начиная от 320px и выше. Использовать фреймворк [Bootstrap](https://github.com/react-bootstrap/react-bootstrap). Главное, чтобы интерфейс оставался удобным, аккуратным и эстетичным.


## Необязательные задачи

### Level 3
* Страница корзины

![](assets/images/cart-level-2.png?raw=true "")

Вывести добавленные ранее товары. Добавить поле с возможностью выбора количества и кнопку Удалить для удаления позиции из корзины. Текст с суммой всего заказа должен в реальном времени пересчитывать сумму. Переключение между страницей каталога и корзины реализовать с помощью [React Router](https://github.com/remix-run/react-router).

### Level 4

Добавлен новый тип продукта "[Настраиваемый](assets/level3/products.json)" (configurable) . У данного продукта есть опции (configurable_options), в нашем случае пользователь может выбрать цвет и размер товара. Также в информации о продукте присутствует список доступных вариантов товара (variants). 


![](assets/images/catalog-level-3.png?raw=true "")

* Необходимо реализовать добавление доступных вариантов товаров в корзину и  невозможность добавления несуществующих вариантов.
* Менять изображение товара при полном соответствии выбранных опций пользователя с одним из вариантов товара 
* Вывести выбранные опции в корзине (если выполнен level 3)

![](assets/images/cart-level-3.png?raw=true "")

# Результат работы
Результат работы должен быть представлен в репозитории github. Запуск проекта должен производиться терминальными командами <br />
```npm i```<br />
```npm run dev``` сборка версии для разработки<br />
```npm run build``` сборка версии для продакшн
