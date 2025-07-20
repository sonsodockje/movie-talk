import { Link } from "react-router-dom";
import { useUserStore } from "../store";

function AuthForm({ isLogin, onSubmit }) {
  const { email, password, name, setEmail, setPassword, setName } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-gray-800 p-8 rounded-lg">
        <h2 className="text-white text-2xl font-bold mb-6">
          {isLogin ? "로그인" : "회원가입"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">
                이름
              </label>
              <input
                className="w-full p-2 bg-gray-700 text-white rounded"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              이메일
            </label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="password">
              비밀번호
            </label>
            <input
              className="w-full p-2 bg-gray-700 text-white rounded"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {isLogin ? "로그인" : "회원가입"}
          </button>
        </form>
        <p className="text-white mt-4">
          {isLogin ? "계정이 없으신가요? " : "이미 계정이 있으신가요? "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "회원가입" : "로그인"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
