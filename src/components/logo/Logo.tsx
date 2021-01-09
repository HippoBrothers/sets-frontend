import React from "react";

import "./logo.scss";

type LogoProps = {
  className?: string;
};

const Logo: React.FunctionComponent<LogoProps> = ({ className = "" }) => {
  return <h1 className={`sets-logo ${className}`}>SETS</h1>;
};

export default Logo;
