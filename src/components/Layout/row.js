import React from "react";
import "./buttons.css";
import "./layout/row.css"

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