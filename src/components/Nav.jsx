import { useState } from "react";
import { useAuthStore } from "../store";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  const isLogin = useAuthStore((state) => state.isLogin);
  const loginToggleAction = useAuthStore((state) => state.loginToggleAction);
  const [input, setInput] = useState("");
  function searchHandler() {
    console.log(input);
    setInput("");
  }

  return (
    <>
      <div className="flex flex-row justify-between w-full px-28 py-5 text-gray-50 bg-transparent absolute top-0">
        <Link to={`/`}>로고</Link>

        <div className="flex items-center gap-5">
          <div className="flex items-center relative">
            <div className="absolute left-3">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="absolute right-2">
              <button
                className="rounded-full bg-black/10 p-1.5"
                onClick={searchHandler}
              >
                <svg
                  className="text-white/80"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <input
              type="text"
              value={input}
              className="text-sm text-gray-100 rounded-lg bg-[#10202D] py-2.5 pl-10 pr-12 w-[320px]"
              required
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {isLogin === false ? (
            <Link to={`/login`}>
              {" "}
              <button
                className="rounded-md text-sm bg-[#10202D] py-2.5 px-3 hover:bg-[#ffffff]/10"
                // onClick={loginToggleAction}
              >
                로그인
              </button>
            </Link>
          ) : (
            <div className="flex gap-1">
              <button
                className="rounded-md text-sm bg-[#10202D] py-2.5 px-3 hover:bg-[#ffffff]/10"
                onClick={loginToggleAction}
              >
                로그아웃
              </button>
              <Link to={`/account:id`}>
                <button className="rounded-md text-sm bg-[#10202D] py-2.5 px-3 hover:bg-[#ffffff]/10">
                  내 정보
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
