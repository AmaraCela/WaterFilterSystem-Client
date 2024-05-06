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
  interface DataItem {
    id: number;
    month: string,
    calls: number;
    completed: number;
    cancelled: number;
    nonsuccessful: number;
  }

  const dispatch = useAppDispatch();
  const [currentYear, setCurrrentYear] = useState(new Date().getFullYear());
  const calls = useSelector((state: RootState) => state.call.calls);
  const [Data, setData] = useState<DataItem[]>([]);
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun"];
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    dispatch(getCalls());
    let data: DataItem[] = [];
    for (let i = 1; i <= 6; i++) {
      data.push({
        id: 1,
        month: months[i - 1],
        calls: 0,
        completed: 0,
        cancelled: 0,
        nonsuccessful: 0,
      });
    }
    setData(data);
  }, []);


  useEffect(() => {
    if (calls && !calculated) {
      setCalculated(true);
      setData(prevData => {
        const newData = [...prevData];
        for (let call of calls) {
          const month = new Date(call.scheduledTime).getMonth();
          newData[month].calls += 1;
        }
        return newData;
      });
    }
  }, [calls]);
  


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

  useEffect(() => {
    const chartData: any = {
      labels: Data.map((data) => data.month),
      datasets: [
        {
          label: "Number of calls",
          data: Data.map((data) => data.calls),
          backgroundColor: "#0066FF",
          borderColor: "black",
          borderWidth: 1,
          barThickness: 10,
          borderRadius: 5
        }
      ]
    };
    setBarChartData(chartData);
  }, [Data]);
  


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
   
      <div className="dashboard w-full h-screen rounded-3xl flex flex-row">
        <DashboardSide highlighted={"Statistics"} />
        <div className="w-3/4 main-content">
          <TopIcons />
          <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">Statistics</p>
          <div className="w-full flex justify-between px-6 mt-4">
            <div className="bg-[#fefefe4a] h-full p-6 rounded-[51px]">
              <p className="text-[#0066FF] main-font font-bold">call volumes during {currentYear}</p>
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
   
  );
}

export default Statistics;