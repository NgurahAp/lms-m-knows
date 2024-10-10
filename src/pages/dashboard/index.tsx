import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";


const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col pt-64">
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
