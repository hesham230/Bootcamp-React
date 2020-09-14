import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style.css";

// const App = () => {
//   return (
//     <div className="ui container comments">

//       <ApprovalCard>
//         <CommentDetail
//           title="Sam"
//           decription="Nice blog post"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           title="Alex"
//           decription="I like the subject"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           title="Jane"
//           decription="I like the writing"
//           avatar={faker.image.avatar()}
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            title="Sam"
            decription="Nice blog post"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            title="Alex"
            decription="I like the subject"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            title="Jane"
            decription="I like the writing"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
