import React from "react";
import mug from "../assests/smallmug.jpg";
import "../Styles/dyning.css";

import dyningmug from "../assests/mainmug4.jpg";
function Dyning() {
  const manuItem = [
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
    {
      name: "Americano",
      imgUrl:
        "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=600",
      dec: "this is our best item in the mist",
    },
  ];
  return (
    <div className="dyningSection">
      <div className="smallMug">
        <div className="mugContainer">
          <img src={mug} alt="" />
        </div>
        <div className="h4Con">
          <h4>NOE ENJOY OUR WONDERFUL COFFEE AND DELITIOUS FOOD TOO</h4>
        </div>
        <div className="pCon">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            quam iste temporibus vitae. Dolor, dolorum?
          </p>
          <button style={{background:"brown" , color:"white"}}>ABOUT US</button>
        </div>
      </div>

      <div className="main-manu">
        <div className="abcd">
          <img src={dyningmug} alt="" id="dyning-mug" />
        </div>

        <div>
          <div className="manuCard">
            {manuItem.map((el, i) => {
              return (
                <div className="menuItem">
                  <div>
                    <img src={el.imgUrl} alt="" />
                  </div>
                  <div className="itemInfo">
                    <h6>{el.name}</h6>
                    <p>{el.dec}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Dyning;
