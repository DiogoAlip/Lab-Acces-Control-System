import { useParams } from "wouter";
import { NavBar } from "../components/NavBar";
import { LabRoutes } from "../routes/LabRoutes";
export const LogedUserPage = () => {
  const params = useParams();
  console.log(params.name, params.passwd);
  return (
    <>
      <NavBar />
      <LabRoutes />
    </>
  );
};
