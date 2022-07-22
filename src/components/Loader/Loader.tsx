import UseAnimations from "react-useanimations";
import loadingIcon from "react-useanimations/lib/loading";

const Loader: React.FC = () => {
  return (
    <main className="flex items-center justify-center bg-indigo-700 w-screen hscreen">
      <UseAnimations
        size={100}
        animation={loadingIcon}
        strokeColor="white"
        autoPlay={true}
        loop={true}
      />
    </main>
  );
};

export default Loader;
