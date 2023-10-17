import React from "react"
import { useAuth } from "../hook.tsx/useAuth"
import { useLocation, useNavigate } from "react-router-dom"

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname;

  const onSubmit = React.useCallback((e: React.FormEvent, fromPath: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = form.userName.value;
    auth?.signIn(value, () => navigate(fromPath, { replace: true }));
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e, from)}>
        <label>
          Name:
          <input type="text" name='userName' />
        </label>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};