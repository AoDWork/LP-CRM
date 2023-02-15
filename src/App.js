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

  // let copied = Object.assign([], cards);

  const Card = (props) => {
    return (
      <div className='card'>
        <div className='switch' onClick={handleSwitch}>
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
        <button className='deleteCard' onClick={deleteCard}>+</button>
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
    setCards([
      { disabled: false, id: "_", named: "____", img: Img },
      ...cards
    ]);
    console.log(cards);
  }

  const deleteCard = (e) => {
    // setCards([...cards].map((el, ind) => {
    //       if(e.)
    //     })
    // );
    console.log(e);
  }

  const handleMouseOver = e => {
    let foo = document.querySelectorAll(".deleteCard");

    for (var i = 0; i < foo.length; i++) {
      foo[i].classList.add("reavel");
    }
  };

  const handleMouseLeft = e => {
    let foo = document.querySelectorAll(".deleteCard");

    for (var i = 0; i < foo.length; i++) {
      foo[i].classList.remove("reavel");
    }
  };

  const handleSwitch = e => {
    console.log(e.currentTarget.id)
  };




  return (
    <div className="App">
      <div className='table-container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeft}>
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
            <button className="deleteChosenCards"><p>+</p></button>
          </div>
        </div>

        <div className='body'>
          {renderCards}
        </div>
      </div>
    </div>
  );
}

export default App;
