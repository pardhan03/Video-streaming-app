import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const isMenu=useSelector((store)=>store.app.isMenuopen);
  if(!isMenu) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5" >Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar