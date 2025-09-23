import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/user.api";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreateUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreateUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreateUser.current = true;
    }
    navigate("/")
  }, [createUser, navigate, user]);
  return <>Loading...</>;
};

export default AuthCallbackPage;
