import React, { useState } from 'react';
import '../app/app.css';

const About = () => {
  const foods = [
    { name: '권서방네 순대국'         , map: 'https://naver.me/5U1zh0RF'      }
    , { name: '수백당 (순대국)'       , map: 'https://naver.me/5mgcussU'      }
    , { name: '제육덮밥'              , map: 'https://naver.me/GpfKpnZy'      }
    , { name: '라멘'                  , map: 'https://naver.me/FiL5nWpE'      }
    , { name: '설렁탕'                , map: 'https://naver.me/FYAjnkgU'      }
  ];

  const [selectedFood, setSelectedFood] = useState<{name:string , map:string}>();

  const handleClick = () => {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    setSelectedFood(randomFood);
  };

  return (
    <div className="container">
      <h1 className="title">오늘 뭐 먹지?</h1>
      <button onClick={handleClick} className="button">
        랜덤 음식 선택
      </button>
      {selectedFood && (
        <div className="food">
          <h2>{selectedFood.name}</h2>
          <iframe src={selectedFood.map} className="food-map" />
        </div>
      )}
    </div>
  );
};

export default About;


