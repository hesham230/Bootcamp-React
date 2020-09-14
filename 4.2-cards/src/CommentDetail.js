import React from 'react';
import './style.css';

// const CommentDetail = props => {
//   return (
//     <div className="comment">
//       <a href="#" className="avatar">
//         <img alt="avatar" src={props.avatar} />
//       </a>
//       <div className="content">
//         <p className="title">
//           {props.title}
//         </p>
//         <div className="decription">{props.decription}</div>
//       </div>
//       <div>
//         <a href="#">SHARE</a>
//         <a href="#">EXPLORE</a>
//       </div>
//     </div>
//   );
// };



class CommentDetail extends React.Component {
  render() {
    return (
      <div className="comment">
       <a href="#" className="avatar">
         <img alt="avatar" src={this.props.avatar} />
       </a>
       <div className="content">
         <p className="title">
           {this.props.title}
         </p>
         <div className="decription">{this.props.decription}</div>
       </div>
       <div>
         <a href="#">SHARE</a>
         <a href="#">EXPLORE</a>
       </div>
     </div>
    )
  }
}

export default CommentDetail;