/* eslint-disable react/prop-types */
import React from "react";

export default function Details({ detailType, detail, style }) {
  return (
    <div className={style}>
      <p>{detailType}</p>
      <div>{detail} </div>
    </div>
  );
}
