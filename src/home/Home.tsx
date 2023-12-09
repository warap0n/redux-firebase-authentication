import { useAppSelector } from "../redux/hooks/hooks";
import { RootState } from "../redux/store";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

type Props = {
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({ setAuthorized }: Props) => {
  const state = useAppSelector((state: RootState) => state);
  let userInfo = state.user;
  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        setAuthorized((prev) => !prev);
        console.log("signout success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>displayName: {userInfo?.displayName}</div>
      <div>email: {userInfo?.email}</div>
      <div>photoURL: {userInfo?.photoURL}</div>
      <div>uid: {userInfo?.uid}</div>

      <div>
        <button onClick={signoutHandler}>signOut</button>
      </div>
    </>
  );
};

export default Home;
