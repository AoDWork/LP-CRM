import React, { useState } from 'react';
import './App.css';
import Img from './logo.svg';


function App() {

  const [cards, setCards] = useState([
    { disabled: false, id: "1", named: "Blue", img: Img },
    { disabled: false, id: "2", named: "8GB", img: Img },
    { disabled: false, id: "3", named: "16GB", img: Img },
    { disabled: false, id: "4", named: "20", img: Img }
  ])

  const [selected, setSelect] = useState([])

  // let copied = Object.assign([], cards);

  const Card = (props) => {
    return (
      <div className='card' onClick={() => selectCard(props.id)}>
        <div className='switch'>
          <input type="checkbox" onClick={() => handleSwitch(props.id)} />
        </div>
        <div className='card-good'>
          xxxx-
          <input className='id' type="text" placeholder={props.id} />
        </div>
        <div className='named'>
          <img src={Img} alt="" />
          <input className='name' type="text" placeholder={props.named} />
        </div>
        <span data-hint="Удалить">
          <button className='deleteCard' onClick={() => deleteCard(props.id)}>+</button>
        </span>
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
    setCards(cards => ([
      { disabled: false, id: (cards.length + 1), named: "____", img: Img },
      ...cards
    ]))
  }

  const deleteCard = (id) => {
    setCards((cards) =>
      cards.filter((el) => el.id !== id)
    )
  }

  const selectCard = (id) => {
    if (!selected.includes(id)) {
      setSelect(selected.concat(id))
    }
    console.log(selected)
  }

  const handleMouseOver = e => {
    let foo = document.querySelectorAll(".deleteCard")

    for (var i = 0; i < foo.length; i++) {
      foo[i].classList.add("reavel")
    }
  }

  const handleMouseLeave = e => {
    let foo = document.querySelectorAll(".deleteCard")

    for (var i = 0; i < foo.length; i++) {
      foo[i].classList.remove("reavel")
    }
  }

  const handleSwitch = id => {
    console.log( [...cards].forEach(el => { if(el.id === id)el.disabled = !el.disabled}) )  
    console.log(cards)  
    // setCards(cards => ( 
    //   [cards.map(el => { if(el.id === id){console.log(el.disabled = !el.disabled)} }) ]
    // ))
  }


  return (
    <div className="App">
      <div className='table-container' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
  )
}

export default App
