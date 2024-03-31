import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { getCalls } from "../store/statistics/statisticsThunks";

Chart.register(CategoryScale);

const Statistics = () => {
  const dispatch = useAppDispatch();
  const calls = useSelector((state: RootState) => state.call.calls);

  useEffect(() => {
      dispatch(getCalls());
  }, []);

  console.log(calls);
  const Data = [
    {
      id: 1,
      month: "Jan",
      calls: 380,
      completed: 300,
      cancelled: 50,
      nonsuccessful: 30
    },
    {
      id: 2,
      month: "Feb",
      calls: 220,
      completed: 150,
      cancelled: 50,
      nonsuccessful: 20
    },
    {
      id: 3,
      month: "Mar",
      calls: 230,
      completed: 120,
      cancelled: 50,
      nonsuccessful: 60
    },
    {
      id: 4,
      month: "Apr",
      calls: 370,
      completed: 120,
      cancelled: 50,
      nonsuccessful: 60
    },
    {
      id: 5,
      month: "May",
      calls: 210,
      completed: 120,
      cancelled: 50,
      nonsuccessful: 60
    },
    {
      id: 6,
      month: "Jun",
      calls: 410,
      completed: 120,
      cancelled: 50,
      nonsuccessful: 60
    }

  ];

  const [barChartData, setBarChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "Number of calls ",
        data: Data.map((data) => data.calls),
        backgroundColor: [
          "#0066FF",
        ],
        borderColor: "black",
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 5
      }
    ]
  });

  const [totalCalls, setTotalCalls] = useState(1000);
  
  const [donughtData, setDonughtData] = useState({
    labels: ['Completed', 'Uncompleted'],
    datasets: [
      {
        label: "Completed calls",
        data: [100, 200],
        backgroundColor: [
          "#0066FF",
          "#CDD2FD"
        ],
        borderColor: "black",
        borderWidth: 0,
        borderRadius: 0,
      }
    ]
  })

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
        <DashboardSide highlighted={"none"} />
        <div className="w-3/4">
          <TopIcons />
          <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">Statistics</p>
          <div className="w-full flex justify-between px-6 mt-4">
            <div className="bg-[#fefefe4a] h-full p-6 rounded-[51px]">
              <p className="text-[#0066FF] main-font font-bold">call volumes during 2023</p>
              <Bar className="mt-2"
                data={barChartData}
                options={{
                  plugins: {
                    title: {
                      display: false,
                    },
                    legend: {
                      display: false,
                    }
                  },
                }}
              />
            </div>
            <div className="flex w-1/6 items-center justify-center">
              <Doughnut
                data={donughtData}
                options={{
                  cutout: "80%",
                  plugins: {
                    title: {
                      display: false,
                    },
                    legend: {
                      display: false
                    }
                  },
                }}
              />
              <p className="absolute main-font font-semibold">74%</p>
            </div>
            <div className="flex w-1/6">
              <Doughnut
                data={donughtData}
                options={{
                  cutout: "80%",
                  plugins: {
                    title: {
                      display: false,
                    },
                    legend: {
                      display: false
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;