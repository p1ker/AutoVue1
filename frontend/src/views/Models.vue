<template>
  <div>
    <ul class="models">
      <a href="AUTO.html">
        <li class="model">
        <Model
            title = "BMW M5 CS"
            imageSrc = "https://cdn.motor1.com/images/mgl/81JbW/s3/2022-bmw-m5-cs-front-view.jpg"
            imageAlt = "BMW"
            description="Быстрейший в истории, новый BMW M5 CS с двигателем мощностью в 635 л.с. (467 кВт) и разгоном до 100 км/ч за рекордные 3 секунды.Оснащенный двигателем мощностью 625 л.с. (460 кВт) и подвеской с гоночными настройками BMW M5 Competition с системой полного привода M xDrive олицетворяет собой эталон динамики."
            price = "Цена: 100 000$"/>
        </li>
      </a>
      <a href="Home.vue">
        <li class="model">
            <Model
                title = "Volkswagen Teramont I"
                imageSrc = "https://a.d-cd.net/aEAAAgNDIOA-1920.jpg"
                imageAlt = "BMW"
                description="Volkswagen Teramont (на североамериканском рынке Atlas) - полноразмерный 7-местный семейный кроссовер. Официальный дебют новинки состоялся на Лос-анджелесском моторшоу в 2016 году."
                price = "Цена: 120 000$"/>
        </li>
      </a>
      <a href="Home.vue">
        <li class="model">
            <Model
                title = "AUDI E-Tron"
                imageSrc = "https://www.allcarz.ru/wp-content/uploads/2018/04/foto-e-tron_01.jpg"
                imageAlt = "AUDI"
                description="Audi e-tron Quattro - первая серийная модель Ауди BEV (Battery Electric Vehicle) с электрическим приводом, подходящая для повседневного использования. Производится е-трон в Брюсселе."
                price = "Цена: 110 000$"/>
        </li>
      </a>
      <a href="Home.vue">
        <li class="model">
            <Model
                title = "Porsche Taycan Turbo S"
                imageSrc = "https://autopeople.ru/news/wp-content/uploads/carpixel.net-2020-porsche-taycan-turbo-s-us-96969-hd.jpg"
                imageAlt = "AUDI"
                description="Porsche Taycan Turbo S с суммарной мощностью двигателей 751 л.с. разгоняет более чем двухтонный автомобиль до «сотни» за 2,6 секунды. Эта дорогостоящая премьера — первопроходец Porsche в мире электромобилей."
                price = "Цена: 300 000$"/>
        </li>
      </a>
      <a href="Home.vue">
        <li class="model">
            <Model
                title = "Tesla Model S Plaid"
                imageSrc = "https://s.auto.drom.ru/i24232/pubs/4/68609/3006225.jpg"
                imageAlt = "AUDI"
                description="Tesla Model S Plaid выполнена в кузове седан, оснащена трехмоторной силовой установкой, выдающей в сумме 1034 лошадиных силы. Заявленный разгон до 100км/ч составляет всего 2.1сек., а максимальная скорость ограничена 322 км/ч."
                price = "Цена: 250 000$"/>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
import Model from "../components/Model";

export default {
    name: 'Models',
    components: {
       Model
    }
}
</script>
