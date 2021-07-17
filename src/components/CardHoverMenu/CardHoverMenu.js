import React from "react";
import github from "../../images/github-1.png";
const evStop = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
};
//----==============-----------------------------------
class CardHoverMenus extends React.Component {
  state = { hiddenPopupMenu: true };
  toggle = () => {
    this.setState({ hiddenPopupMenu: !this.state.hiddenPopupMenu });
  };
  clkBtn = (ev, msg) => {
    evStop(ev);
    this.props.flashFn(msg);
  };
  render() {
    const p = {};

    return (
      <div className="whenhovered" onClick={this.toggle}>
        {this.state.hiddenPopupMenu && (
          <div>
            <div className="mt-5 pt-5" />
            <h1 style={{ fontFamily: "EB Garamond,Open Sans" }}>
              {this.props.title}
            </h1>
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {this.props.description}
            </p>
            <div className="Links">
              <img
                src={github}
                alt=""
                style={{
                  width: "26px",
                  height: "26px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardHoverMenus;
