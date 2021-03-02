import React from "react";
import "./Card.css";
import "../../../theme.css";

export default function Card({ children, highlight }) {
  const cardClassName = highlight ? "card sale" : "card";

  return <div className={cardClassName}>{children}</div>;
}
