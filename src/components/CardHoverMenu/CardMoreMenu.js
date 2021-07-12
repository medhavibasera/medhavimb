import React from "react";
import CardMoreMenuBtn from "./CardMoreMenuBtn";
//----============-----------------------------------
class CardMoreMenu extends React.Component {
  render = () => {
    const p = this.props;
    return p.hidden ? (
      <CardMoreMenuBtn
        clicked={p.toggle}
        isRight={true}
        icon="ellipsis-v"
        txt="MORE"
      />
    ) : (
      <div
        style={{ background: "white", maxWidth: 150 }}
        className="m-0 float-right"
      >
        <CardMoreMenuBtn
          icon="thumbtack"
          txt="Github"
        />
        <CardMoreMenuBtn
          icon="thumbs-up"
          txt="Website"
        />
       
      </div>
    );
  };
}
export default CardMoreMenu;
