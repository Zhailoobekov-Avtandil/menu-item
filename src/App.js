import {Card} from './components/Card'
import pic1 from './images/1img.jpg'
import pic2 from './images/2img.jpg'
import pic3 from './images/3img.jpg'
import pic4 from './images/4img.jpg'

function App() {

  const data = [{
    img: pic1,
    title: 'УНАГИ УРАМАКИ',
    text: 'угор, авокадо, сливочный сыр, огурец, соус унаги, кунжут',
    price: '1900.00 ТГ',
    pieces: '8 штук',
    composition: 'Калорийность Ккал: 298',
    quantity: '1',
    take: 'ДОБАВИТЬ В КОРЗИНУ'
},
{
  img: pic2,
    title: 'МАДРИД РОЛЛ',
    text: 'Лосось, авокадо, слайси соус, перец чили, икра тобико,',
    price: '1100.00 ТГ',
    pieces: '8 штук',
    composition: 'Калорийность Ккал: 275',
    quantity: '1',
    take: 'ДОБАВИТЬ В КОРЗИНУ'
},
{
  img: pic3,
    title: 'ТЕПЛАЯ КРЕВЕТКА С МОЦАРЕЛЛОЙ',
    text: 'Теплый ролл - Креветка, тамаго, огурец, сливочный сыр, икра табико, сыр моцарелла',
    price: '1700.00 ТГ',
    pieces: '8 штук',
    composition: 'Калорийность Ккал: 257',
    quantity: '1',
    take: 'ДОБАВИТЬ В КОРЗИНУ'
},
{
  img: pic4,
    title: 'ФРЕШ РОЛЛ С БАКЛАЖАНОМ',
    text: 'Рисовая бумага, лист салата, баклажан в чесосоном соусе, помидор.',
    price: '550.00 ТГ',
    pieces: '6 штук',
    composition: 'Калорийность Ккал: 235',
    quantity: '1',
    take: 'ДОБАВИТЬ В КОРЗИНУ'
},
]

  return (
    <div className="App">
      {data.map((el, id) => {
        return <Card data={el} key={id}/>
        })}
    </div>
  );
}

export default App;
