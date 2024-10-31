import Login from "./Login";

export default function Loginpage ({searchParams}) {
  const wantsMagicLink = searchParams.magicLink === "yes";
  return <Login isPasswordLogin={!wantsMagicLink} />
};