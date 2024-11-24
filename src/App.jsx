import Navbar from "./components/Navbar";
import Sneaker from "./components/Sneaker";
export default function App() {
  return (
    <div>
      <Navbar />
      <Sneaker />
      <div className="attribution flex justify-center items-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Rugee</a>.
      </div>
    </div>
  )
}