'use client'

import React, { useState, useEffect } from 'react';
import  Header from "@/components/header";
import { supabase } from "@/utils/supabase";
import { Database } from "@/types_db";
const food = () => {
  const [selectedFood, setSelectedFood] = useState<{food_nm:string, food_map:string} | undefined>();
  const [tbFood, setTbFood] = useState<Database['public']['Tables']['food']['Row'][]>([]);
  const [activeNewNoteBtn, setActiveNewNoteBtn ] =  useState(false);
  const [search, setSearch] = useState("");
  const fetchFoods = async () => {
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
    fetchFoods();
  }, []);

  const handleClick = () => {
    const randomFood = tbFood[Math.floor(Math.random() * tbFood.length)];
    console.log(randomFood);
    setSelectedFood({
      food_nm   : randomFood.food_nm??'',
      food_map  : randomFood.food_map??''
    });
  };

  return (
    <main className="w-full h-screen flex flex-col">
      <Header setActiveNoteId='' setIsCreating='' activeNewNoteBtn={activeNewNoteBtn} search={search} setSearch={setSearch}/>
      <div className="container">
        <h1 className="title">오늘 뭐 먹지?</h1>
        <button onClick={handleClick} className="button">
          랜덤 음식 선택
        </button>
        {selectedFood && (
          <div className="">
            <h2>{selectedFood.food_nm}</h2>
            <iframe src={selectedFood.food_map} className="food-map" />
          </div>
        )}
      </div>
    </main>
  );
};

export default food;


