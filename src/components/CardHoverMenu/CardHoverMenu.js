import React from "react";
import CardMoreMenu from "./CardMoreMenu";
import CardHoverButton from "./CardHoverButton";
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
    const p = {
      funcs: {
        viewBoard: (e) => this.clkBtn(e, "viewBoard"),
        pinAny: (e) => this.clkBtn(e, "pinAny"),
        pinHere: (e) => this.clkBtn(e, "pinHere"),
        notInterested: (e) => this.clkBtn(e, "notInterested"),
        shareCard: (e) => this.clkBtn(e, "shareCard"),
      },
    };
    //Above is hardwired for demo. Normally, const p = this.props;
    return (
      <div className="whenhovered" onClick={this.toggle}>
        {this.state.hiddenPopupMenu && (
          <div>
            <div className="mt-5 pt-5" />
            <h1 style={{ fontFamily: "Open Sans" }}>{this.props.title}</h1>
            <p>{this.props.description}</p>
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
