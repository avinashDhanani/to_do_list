import React from "react";

function Container(props) {
  return (
    <div style={{ width: `${props.width}`, height: `${props.height}` }}>
      {props.children}
    </div>
  );
}

export default Container;
