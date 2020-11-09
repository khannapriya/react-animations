import React, { useState } from 'react'

import { AiFillLike } from "react-icons/ai";

export default function Likebutton({likeButton}) {
   
    const [liked, setLiked]= useState(false);
    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => setLiked(!liked)}><AiFillLike/>{likeButton} - </button>
      <p>aaa : </p>
    </div>
  )
}
