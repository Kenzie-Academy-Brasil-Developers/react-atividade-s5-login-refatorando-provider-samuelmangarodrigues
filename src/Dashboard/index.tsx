import { Button } from "../Login/styles";
import { useAuth } from "../Providers/Auth";
import { ContainerDash } from "./styles";

const Dash = () => {
  const { Logout } = useAuth();
  return (
    <ContainerDash>
      <img
        alt="Kenzie Academy Logo"
        src="https://img.search.brave.com/qhUdbcG5KPTVO86BgHZAu9rSx4nDFz93BXNbSU8uDa0/fit/200/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/b3MwNnFCbW5kaUhp/YnhmdHR0bm1RQUFB/QSZwaWQ9QXBp"
      />
      <Button onClick={() => Logout()}>Sair</Button>
    </ContainerDash>
  );
};
export default Dash;
