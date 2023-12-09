import "./Login.scss"; //sassファイルはgithub上で確認できます。
import { signInWithPopup } from "firebase/auth";
import { provider } from "../Firebase";
import { useAppDispatch } from "../redux/hooks/hooks";
import { login } from "../redux/auth/user";
import { auth } from "../Firebase";

const Login = () => {
  const dispatch = useAppDispatch();
  const popup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const userInfo = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        dispatch(login(userInfo));
        console.log(auth);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(errorCode, errorMessage, email);
      });
  };

  return (
    <div className="loginContainer">
      <div className="login" onClick={popup}>
        <img src="./google.svg" className="icon" alt="" sizes="100px" />
        <div className="buttonName">ログイン</div>
      </div>
    </div>
  );
};

export default Login;
