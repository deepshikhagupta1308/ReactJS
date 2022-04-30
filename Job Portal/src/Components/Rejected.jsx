const Rejected = () => {
  let rejectedUserList = JSON.parse(localStorage.getItem("rejectedUserList"));

  return (
    <>
      <h4>Rejected Users List</h4>
      {rejectedUserList.map((obj) => {
        return <h5 key={obj.id}>{obj.name}</h5>;
      })}
    </>
  );
};

export default Rejected;
