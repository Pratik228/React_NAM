import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <p>Wlecome to Our Food Engine Creative Team</p>
        <div className="about-cards">
          <UserClass
            name={"Pratik from Class"}
            location={"Bengaluru"}
            contact={"pratikmisha79@gmail.com"}
          />
        </div>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>Hello There</h1>
//       <p>Wlecome to Our Food Engine Creative Team</p>
//       <div className="about-cards">
//         <UserClass
//           name={"Pratik from Class"}
//           location={"Bengaluru"}
//           contact={"pratikmisha79@gmail.com"}
//         />
//       </div>
//     </div>
//   );
// };

export default About;
