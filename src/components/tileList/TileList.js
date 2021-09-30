import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = (props) => {
  return (
    <div>
      {props.object.map((info, index) => <Tile info={info} key={index}/>)}
    </div>
  );
};

TileList.defaultProps = {
  contacts: [],
}