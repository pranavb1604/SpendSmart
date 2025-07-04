import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./HeaderClient"; // adjust path if needed

const Header = async () => {
  await checkUser(); // this must run on the server
  return <HeaderClient />;
};

export default Header;
