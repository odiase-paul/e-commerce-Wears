import LandingPage from "./Route/landing-page/landing";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Route/navigation-items/navigation.items";
import SignIn from "./Route/sign-in/signIn";
import Hats from "./component/hats/hats";
import Jackets from "./component/jackets/jackets";
import Shoes from "./component/shoes/shoes";
import Women from "./component/women/allWomenProduct/women";
import Men from "./component/men/allMenProduct/men";
import WomenShoes from "./component/women/shoes/womenShoes";
import WomenHats from "./component/women/hats/womenHats";
import WomenJackets from "./component/women/jackets/womenJackets";
import MenJackets from "./component/men/jackets/menJackets";
import MenHats from "./component/men/hats/menHats";
import MenShoes from "./component/men/shoes/menShoes";
import Shop from "./shop/shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<LandingPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="hats" element={<Hats />} />
        <Route path="jackets" element={<Jackets />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="women" element={<Women />} />
        <Route path="WomenJackets" element={<WomenJackets />} />
        <Route path="WomenShoes" element={<WomenShoes />} />
        <Route path="WomenHats" element={<WomenHats />} />
        <Route path="men" element={<Men />} />
        <Route path="MenJackets" element={<MenJackets />} />
        <Route path="MenHats" element={<MenHats />} />
        <Route path="MenShoes" element={<MenShoes />} />
      </Route>
    </Routes>
  );
}

export default App;
