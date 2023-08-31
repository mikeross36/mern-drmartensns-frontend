import { useSelector } from "react-redux";

export function useCurrentUser() {
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;
  return currentUser;
}
