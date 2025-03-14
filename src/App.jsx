import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Students from "./sections/students";
import Filter from "./sections/filter";
import Group from "./sections/group";
import Search from "./sections/search";
import Sort from "./sections/sort";
import Count from "./sections/count";
import BestTime from "./sections/best-time";
import Level from "./sections/level";
import Analysis from "./sections/analysis";
import DeleteDuplicate from "./sections/delete-duplicate";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  const renderContent = () => {
    switch (activeTab) {
      case "1":
        return <Students />;
      case "2":
        return <DeleteDuplicate />;
      case "3":
        return <Filter />;
      case "4":
        return <Group />;
      case "5":
        return <Count />;
      case "6":
        return <Sort />;
      case "7":
        return <Search />;
      case "8":
        return <Level />;
      case "9":
        return <Analysis />;
      case "10":
        return <BestTime />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="relative w-screen h-screen flex">
        <div className="basis-[30%] bg-secondary rounded-tr-4xl rounded-br-4xl shadow-2xl">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={(id) => setActiveTab(id)}
          />
        </div>
        <div className="basis-[70%] h-full pt-10 px-5 text-white">{renderContent()}  </div>
      </div>
    </>
  );
}

export default App;
