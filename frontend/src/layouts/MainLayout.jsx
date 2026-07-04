import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar/>

        <main className="flex-1">
            {children}
        </main>
    </div>
  );
};

export default MainLayout;  