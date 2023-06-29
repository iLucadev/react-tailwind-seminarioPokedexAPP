import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Home() {
  /* const isLoading = useSelector((state) => state.data.isLoading);

  if (isLoading) {
    return (
      <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">
        <Loading />
      </div>
    );
  } */

  return <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">{"Hey there!"}</div>;
}
