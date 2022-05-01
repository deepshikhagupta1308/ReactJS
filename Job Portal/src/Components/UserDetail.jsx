import { useParams, useNavigate } from "react-router-dom";

const UserDetail = () => {
  // const [selected, setSelected] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const userlist = JSON.parse(localStorage.getItem("userlist"));

  // console.log("userlist", userlist);
  const userData = userlist.find((item) => item.id === Number(id));

  console.log("userdata", userData);

  const _acceptUserList = () => {
    if (localStorage.getItem("acceptedUserList") === null) {
      localStorage.setItem("acceptedUserList", JSON.stringify([userData]));
    } else {
      const selected = JSON.parse(localStorage.getItem("acceptedUserList"));
      selected.push(userData);
      localStorage.setItem("acceptedUserList", JSON.stringify(selected));
    }

    let acceptedList = JSON.parse(localStorage.getItem("acceptedUserList"));
    console.log("userLIst", userlist);
    console.log("acceptUserList", acceptedList);

    // const newArr = JSON.parse(userData).filter(ele => ele.id !== userId.id)

    for (let i = userlist.length - 1; i >= 0; i--) {
      for (let j = 0; j < acceptedList.length; j++) {
        if (userlist[i] && userlist[i].id === acceptedList[j].id) {
          userlist.splice(i, 1);
        }
      }
    }
    localStorage.setItem("userlist", JSON.stringify(userlist));
    console.log("newUserLIst", userlist);
    navigate("/");
  };

  const _rejectUserList = () => {
    if (localStorage.getItem("rejectedUserList") === null) {
      localStorage.setItem("rejectedUserList", JSON.stringify([userData]));
    } else {
      const rejected = JSON.parse(localStorage.getItem("rejectedUserList"));
      rejected.push(userData);
      localStorage.setItem("rejectedUserList", JSON.stringify(rejected));
    }
    let rejectedList = JSON.parse(localStorage.getItem("rejectedUserList"));
    // console.log("userLIst", userlist);
    // console.log("acceptUserList", acceptedList);

    // const newArr = JSON.parse(userData).filter(ele => ele.id !== userId.id)

    for (let i = userlist.length - 1; i >= 0; i--) {
      for (let j = 0; j < rejectedList.length; j++) {
        if (userlist[i] && userlist[i].id === rejectedList[j].id) {
          userlist.splice(i, 1);
        }
      }
    }
    localStorage.setItem("userlist", JSON.stringify(userlist));
    console.log("newUserLIst", userlist);
    navigate("/");
  };
  return (
    <>
      <h4>User Detail</h4>
      <div>
        UserId: {userData.id} <br></br>
        UserName: {userData.name} <br></br>
        UserEmail: {userData.email} <br></br>
        UserPhone: {userData.phone} <br></br>
        <button onClick={_acceptUserList}>Accept</button>
        <button onClick={_rejectUserList}>Reject</button>
      </div>
    </>
  );
};

export default UserDetail;
