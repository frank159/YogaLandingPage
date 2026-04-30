import DescriptionPageA from "./pages/descriptionPageA/descriptionPageA";
import DiscoveryPage from "./pages/discoveryPage/discoveryPage";
import FinalPage from "./pages/finalPage/FinalPage";
import InfoPage from "./pages/infoPage/InfoPage";
import MainPage from "./pages/mainPage/mainPage";

export default function Home() {
  return (
    <div>
      <MainPage />
      <DescriptionPageA />
      <DiscoveryPage />
      <InfoPage />
      <FinalPage />
    </div>
  );
}
