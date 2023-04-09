import React from 'react'
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from '@uiw/react-codemirror';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [code, setCode] = useState('Write Code Here!');
  const checkCode=()=>{
    axios.post('http://localhost:3000/python', {code}).then((res)=>console.log(res));
    };

  
  return (
    <div className={` flex py-0 my-2 justify-between items-center flex-col`}>
    <h1 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] absolute top-0 left-10 py-0 my-1`}>IS IDE</h1>
    <header className="App-header">
      <div className="my-20 grid grid-cols-2 gap-2 grid-rows-3">
        <div className='row-span-2 '>
        <CodeMirror
            value={code}
            height="700px"
            width ="900px"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            onChange={(editor, data, value) => {
              setCode(editor.getValue());
            }}
            className="flex flex-col "
          />
          </div>

          <div className='bg-white'> <input type="text" id="large-input" class="block w-full h-full text-start p-2.5"></input></div>
          <div >Output</div>
          <div
            onClick={() => checkCode()}
            className="h-10 border-2 p-2 bg-green-400 justify-center items-center text-white font-poppins font-semibold text-[1rem] rounded-md pt-2 cursor-pointer px-0.75 rem py-1.5 rem  "
          >
            Submit Code
          </div> 
      </div>
          </header> 
          </div>
      
  )
}

export default App