'use client'

import React, { useState, useEffect } from 'react';
import  Header from "@/components/header";
import { supabase } from "@/utils/supabase";
import { Database } from "@/types_db";


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [login, setLogin] = useState<Database['public']['Tables']['member']['Row'][]>([]);
 
  const fetchLogin = async () => {
    console.log(username, password);
    const {data, error} = await supabase
    .from('member')
    .select("*")
    .match({use_yn : 'Y', cust_id:username, cust_pwd:password});
    
    if(error){
      alert(error.message);
      return false;
    }
    
    if(data.length > 0){
      setLogin(data);
      location.href="/";
      return false;
    }else{
      setLogin([]);
      alert("로그인 아이디 및 비밀번호를 확인해주세요.");
      return false;
    }
  }

 
  const handleLogin = (e: React.FormEvent) => {

    if (username !== '' && password !== '') {
      fetchLogin();
    } else {
      setError('Invalid credentials');
    }
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-black-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="username">
              Username                                                                      
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login