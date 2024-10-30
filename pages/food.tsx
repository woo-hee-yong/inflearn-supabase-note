import React, { useState, useEffect } from 'react';
import { supabase } from "@/utils/supabase";
import { Database } from "@/types_db";
import '../app/app.css';

const food = () => {
  const [selectedFood, setSelectedFood] = useState<{}>();
  const [tbFood, setTbFood] = useState<Database['public']['Tables']['food']['Row'][]>([]);
  const fetchNotes = async () => {
    const {data, error} = await supabase
    .from('food')
    .select("*")
    .match({use_yn : 'Y'});

    if(error){
      alert(error.message);
      return false;
    }
    setTbFood(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleClick = () => {
    const randomFood = tbFood[Math.floor(Math.random() * tbFood.length)];
    console.log(randomFood);
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
          <h2>{selectedFood.food_nm}</h2>
          <iframe src={selectedFood.food_map} className="food-map" />
        </div>
      )}
    </div>
  );
};

export default food;


