import React from 'react'
import {useParams,useLocation} from 'react-router-dom';

const Post = () => {
    const { name } = useParams();
    const data=useLocation();
    console.log(data);
    const query=new URLSearchParams(data.search);
    console.log(query.get("myName"));
  return (
    <div className="h-20 p-20 flex items-center justify-center font-bold text-3xl text-blue-500 border border-blue-500">
      <div>Id= {name}</div>
    </div>
  );
}

export default Post