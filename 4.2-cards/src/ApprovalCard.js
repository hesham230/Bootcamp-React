import React from "react";
import "./style.css";

// const ApprovalCard = props => {
//   return (
//     <div className="ui card">
//       <div className="content">{props.children}</div>
//       <div className="extra content">
//       </div>
//     </div>
//   );
// };

class ApprovalCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content"></div>
      </div>
    );
  }
}

export default ApprovalCard;
