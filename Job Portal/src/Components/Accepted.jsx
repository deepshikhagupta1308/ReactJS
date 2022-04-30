const Accepted = () => {
  let acceptedUserlist = JSON.parse(localStorage.getItem("acceptedUserList"));
  // console.log(acceptedUserlist);
  return (
    <>
      <h4>Accepted User List</h4>
      {acceptedUserlist.map((obj) => {
        return <h5 key={obj.id}>{obj.name}</h5>;
      })}
    </>
  );
};

export default Accepted;
