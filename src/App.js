import React, { useState } from 'react';
import './App.css';
import Img from './logo.svg';


function App() {

  const [cards, setCards] = useState([
    { disabled: false, id: "1", named: "Blue", img: Img },
    { disabled: false, id: "2", named: "8GB", img: Img },
    { disabled: false, id: "3", named: "16GB", img: Img },
    { disabled: false, id: "4", named: "20", img: Img }
  ]);

  let copied = Object.assign([], cards);

  // const cards = [
  //   { disabled: false, id: "1", named: "Blue", img: Img },
  //   { disabled: false, id: "2", named: "8GB", img: Img },
  //   { disabled: false, id: "3", named: "16GB", img: Img },
  //   { disabled: false, id: "4", named: "20", img: Img }
  // ]

  const Card = (props) => {
    return (
      <div className='card'>
        <div className='switch'>
          <input type="checkbox" />
        </div>
        <div className='card-good'>
          xxxx-
          <input className='id' type="text" placeholder={props.id} />
        </div>
        <div className='named'>
          <img src={Img} alt="" />
          <input className='name' type="text" placeholder={props.named} />
        </div>
      </div>
    );
  }

  const ListElement = (props) => {
    return (
      <option>{props.named}</option>
    );
  }

  let renderCards = cards.map((el, ind) => <Card key={ind} named={el.named} img={el.img} id={el.id} />)

  let renderList = cards.map((el, ind) => <ListElement key={ind} named={el.named} />)

  const addCard = () => {
    // copied.unshift({ disabled: false, id: "_", named: "____", img: Img });
    setCards([
        { disabled: false, id: "_", named: "____", img: Img },
        ...cards
    ]);
    console.log(cards);
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='header__item'>Статус
          <select className="select" name="status" id=""></select>
        </div>
        <div className='header__item'>Товар
          <select className="select" name="good" id=""></select>
        </div>
        <div className='header__item'>ID
          <select className="select" name="id" id=""></select>
        </div>
        <div className='header__item-4'>Название
          <select className="select" name="named" id="">
            {renderList}
          </select>
        </div>
        <div className="buttons">
          <button className="addCardBtn" onClick={addCard}>+</button>
          <button className="deleteChosenCards">X</button>
        </div>
      </div>

      <div className='body'>
        {renderCards}
      </div>

    </div>
  );
}

export default App;
