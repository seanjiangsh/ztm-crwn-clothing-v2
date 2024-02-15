import SignIn from "./sign-in/Sign-in";
import SignUp from "./sign-up/Sign-up";
import { AuthenticationContainer } from "./Authentication.styles";

export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}
