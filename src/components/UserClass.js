import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dumy",
        location: "Dummy Location",
        avatar_url: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Pratik228");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
  }

  componentWillUnmount() {}
  render() {
    const { name, location, avatar_url, company } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} alt="Pratik Profile" />
        <h2>Name : {name}</h2>
        <p>Location: {location}</p>
        <p>Company: {company}</p>
      </div>
    );
  }
}

export default UserClass;
