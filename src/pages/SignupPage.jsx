import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import AuthForm from "../components/AuthForm";
import { useUserStore } from "../store";

function SignupPage() {
  const navigate = useNavigate();
  const { clearForm } = useUserStore();

  const handleSignup = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      clearForm();
      navigate("/login");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/weak-password") {
        alert("비밀번호는 6자리 이상이어야 합니다.");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    }
  };

  return <AuthForm isLogin={false} onSubmit={handleSignup} />;
}

export default SignupPage;