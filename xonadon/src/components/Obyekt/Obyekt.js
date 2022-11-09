

import React from 'react';
import '../../styles/Obyekt.css';
import { AiOutlineSearch } from "react-icons/ai";

const Obyekt = () => {
  return (
    <div className='obyekt'>
      <h1>Obyekt</h1>

      <div className="obyekt-item">
         <form className='obyekt-item__form'>
           <input className='obyekt-item__search' type="text" placeholder='Input search text' />
           <button className="search-btn"><AiOutlineSearch/></button>
         </form>

         <div className="obyekt-item__card">
          <h2>Obyektlar</h2>
          <p>+</p>
         </div>

         <div className="obyect-item-content">
           <div className="obyect-item-content__top">
             <p>Nomi</p>
             <p>Manzil</p>
             <p>Maydoni</p>
             <p>Padezlar soni</p>
             <p>Umumiy Xonalar soni</p>
             <p>Bir Xonalilar soni</p>
             <p>Ikki xonalilar soni</p>
             <p>Uch xonalilar soni</p>
             <p>To'rt xonalilar soni</p>
             <p>Besh xonalilar soni</p>
             <p></p>
             <p></p>
             <p></p>
           </div>
           <div className="obyect-item-content__bottom">
             <p>Dorxona</p>
             <p>Amir Temur 105 a uy</p>
             <p>120 m2</p>
             <p>5</p>
             <p>400</p>
             <p>30</p>
             <p>130</p>
             <p>100</p>
             <p>60</p>
             <p>40</p>
             <p><button>O'chirish</button></p>
             <p><button>Qo'shish</button></p>
             <p><button>O'zgartrish</button></p>
           </div>
           <div className="obyect-item-content__bottom">
             <p>Dorxona</p>
             <p>Amir Temur 105 a uy</p>
             <p>120 m2</p>
             <p>5</p>
             <p>400</p>
             <p>30</p>
             <p>130</p>
             <p>100</p>
             <p>60</p>
             <p>40</p>
             <p><button>O'chirish</button></p>
             <p><button>Qo'shish</button></p>
             <p><button>O'zgartrish</button></p>
           </div>
           <div className="obyect-item-content__bottom">
             <p>Dorxona</p>
             <p>Amir Temur 105 a uy</p>
             <p>120 m2</p>
             <p>5</p>
             <p>400</p>
             <p>30</p>
             <p>130</p>
             <p>100</p>
             <p>60</p>
             <p>40</p>
             <p><button>O'chirish</button></p>
             <p><button>Qo'shish</button></p>
             <p><button>O'zgartrish</button></p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Obyekt