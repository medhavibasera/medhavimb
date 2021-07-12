import React from "react";
//----===============-----------------------------------
class CardMoreMenuBtn extends React.Component {
  render() {
    const p = this.props;
    const clsD = p.isRight ? "float-right mr-0" : "";
    const clsB = p.isRight ? " m-0" : " w-100 p-3";
    const clsI = p.isRight ? "  pl-2" : " pr-3 pl-4";
    const iconTag = <i className={"fas fa-" + this.props.icon + clsI} />;
    return (
      <div className={clsD}>
        <button
          type="button"
          className={"btn btn-light text-left " + clsB}
          onClick={this.props.clicked}
        >
          {p.isRight || (
            <div>
              {iconTag}
              {p.txt}
            </div>
          )}
          {p.isRight && (
            <div>
              {p.txt}
              {iconTag}
            </div>
          )}
        </button>
      </div>
    );
  }
}
export default CardMoreMenuBtn;
