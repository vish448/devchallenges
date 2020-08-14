import React from "react";
import "../Buttons/buttons.css";
import "./row.css"

const Row = ({children}) => {
    return (
        <div className="row">
            <div className="btnGroup">
              {children}
            </div>
          </div>
    );
}

export default Row