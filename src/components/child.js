import React, { useState } from "react";
import "./child.css";

const Child = ({language}) => {
  const [show, setshow] = useState(false);

  return (
    <div>
        <div className="language-item">
          {show ? (
            <div onClick={() => {setshow(!show); console.log(language)}} className="information">
              <p>
                {language.options.map((option) => (
                  <li>{option}</li>
                ))}
              </p>
            </div>
          ) : (
            <div onClick={() => {setshow(!show); console.log(language)}} className="front">
              <img src={language.img} alt="image" />
              <b><p>{language.name}</p></b>{" "}
            </div>
          )}
        </div>
    </div>
  );
};

export default Child;
