import { useState } from "react";
import axios from "axios";


export default function InputCom() {
  const [msg,setMsg] = useState<string>("Do you need a commit?");
  const [type,setType] = useState<string>("Any");
  const getData = async (e:any)=>{
    e.preventDefault();
    
    try{
      const response = await axios.get("https://backend-six-hazel-67.vercel.app/",
        {
          params:{
            extype:type
      }
    });
      console.log(type);
      setMsg(response.data);
    }
    catch(err){
      console.log(err);
    }
    
  }
  

  

  return (
    <div className="text-white w-[90%] flex flex-col justify-center items-center">
      
    
    <form onSubmit={getData} className="w-[80%] flex flex-col  items-center" >
    <div className="bg-[#161b22]
      border
      border-[#30363d]
      rounded-xl
      px-6
      py-2
      w-full
      shadow-lg
      flex
      justify-center">
        <h1 className="text-lg
        md:text-xl
        font-mono
        text-[#7ee787]
        break-words">{msg}</h1>
        
        
        </div>
        <div className="flex
                        flex-col
                        md:flex-row
                        gap-3
                        items-center
                        w-full
                        justify-center my-[5px]"
                        >
        <select name="typeOfExcuse" id="typeOfExcuse" value={type} onChange={(e)=>{setType(e.target.value)}}
          className="bg-[#161b22]
          text-[#c9d1d9]
          border
          border-[#30363d]
          rounded-lg
          px-4
          py-2
          font-mono
          outline-none
          focus:border-[#58a6ff]
          transition
          cursor-pointer
          hover:border-[#8b949e]
          w-full
          md:w-auto">
    <option value="Any" selected>Any type</option>
      <option value="Serious">Serious</option>
      <option value="funny">Funny</option>
      <option value="Chaotic">Chaotic</option>
      <option value="Corporate">Corporate</option>
      <option value="Sleep Deprived">Sleep Deprived</option>
    </select>

    <button type="submit" className="bg-[#238636] hover:bg-[#2ea043]
                    text-white
                    px-5
                    py-1
                    rounded-lg
                    font-medium
                    transition
                    shadow-md
                    active:scale-95
                    w-full
                    md:w-auto">
            Click
            </button>
    
        </div>
    
   

    </form>
    
    
    </div>
    
  )

}
