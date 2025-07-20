import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../script/firebase";
import AuthForm from "../components/AuthForm";
import { useUserStore } from "../store";

function LoginPage() {
  const navigate = useNavigate();
  const { loginToggleAction, clearForm } = useUserStore();

  const handleLogin = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      loginToggleAction();
      clearForm();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return <AuthForm isLogin={true} onSubmit={handleLogin} />;
}

export default LoginPage;