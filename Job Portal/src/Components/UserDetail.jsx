import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params.id);
  return <>UserDetails</>;
};

export default UserDetail;
