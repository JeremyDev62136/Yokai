import Artistes from "./components/Artistes";
import Models from "./components/Models";
import Realisations from "./components/Realisations";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main>
      <Models />
      <Welcome/>
      <Artistes/>
      <Realisations/>
    </main>
  );
}
