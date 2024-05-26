import { Helmet } from "react-helmet-async";
import { SelectView } from "../../sections/select/view";
// import { SelView } from "../../sections/overview/view";
// import { AppView } from "../sections/overview/view";

export default function app() {
  return (
    <>
      <Helmet>
        <title> Order | WebSite</title>
      </Helmet>
      <SelectView />
    </>
  );
}
