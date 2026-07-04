const DashboardHeader = () => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">
        {greeting}, Aravindan 
      </h1>

      <p className="mt-2 text-slate-400">
        Track your applications and opportunities.
      </p>
    </div>
  );
};

export default DashboardHeader;