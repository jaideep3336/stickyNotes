import React from "react";
import { useNavigate } from 'react-router-dom';

  
function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  function handleClick(){
  
        navigate('/');
      }

  return (
    <footer>
      <div style={{display:"flex", justifyContent:"center"}}>
      <p>Copyright ⓒ {year}</p>
      <button class="btn btn-danger" style={{marginLeft:"10px"}} onClick={handleClick}>Signout</button>
      </div>
    </footer>
  );
}

export default Footer;
