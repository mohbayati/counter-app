import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartR } from "@fortawesome/free-regular-svg-icons";

const Like = (props) => {
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      icon={props.Liked ? faHeart : faHeartR}
    />
  );
};

export default Like;
