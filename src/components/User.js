const User = ({ name }) => {
  useEffect(() => {
    setInterval(() => {
      console.log("Pratik");
    }, 1000);

    return () => {};
  }, []);

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact : pratikmisha79@gmail.com</h4>
    </div>
  );
};

export default User;
