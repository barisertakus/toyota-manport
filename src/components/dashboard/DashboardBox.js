import React from "react";

function DashboardBox({ boxClass, header, color, children, style }) {
  const textColor =
    color === "black" || color === "red" || color === "green"
      ? "white"
      : "black";

  return (
    <div className={`${boxClass}__box`} style={style}>
      <div
        className={`${boxClass}__boxHeader`}
        style={{ backgroundColor: color, color: textColor }}
      >
        {children ? <h3 style={{color: textColor}}>{header}</h3> : header}
      </div>
      {children}
    </div>
  );
}

export default DashboardBox;
