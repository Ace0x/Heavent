import React from "react";
import LevelCompareCard from "../components/LevelCompareCard";
import { useAuth } from "../context/authContext";
import { useParams } from "react-router-dom";
import DoughnutChart from "../components/charts/DoughnutChart";

export default function CompareUsers() {
  let { level1, level2 } = useParams();
  const [fetched, setFetched] = React.useState(false);
  const [levels, setLevels] = React.useState([]);
  const [error, setError] = React.useState(false);
  const { URL } = useAuth();

  React.useEffect(() => {
    fetch(`${URL}levels/compare/${level1}/${level2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLevels(data);
        setFetched(true);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Compare levels</h1>
      {fetched ? (
        <div className="container flex flex-col justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {levels.map((lvl) => (
              <LevelCompareCard data={lvl} />
            ))}
            <div className="flex flex-col col-span-1 md:col-span-2 white-glassmorphism p-4 m-4 justify-center items-center">
              <h1 className="title-text text-xl">Deaths comparison</h1>
              <div className="flex flex-col justify-center items-center">
                <DoughnutChart
                  chartData={{
                    labels: [levels[0].name, levels[1].name],
                    datasets: [
                      {
                        label: "Death tolls",
                        data: [levels[0].totalDeaths, levels[1].totalDeaths],
                        backgroundColor: [
                          "rgb(30, 99, 32)",
                          "rgb(255, 162, 05)",
                        ],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    rotation: 270,
                    circumference: 180,
                  }}
                />
                <h1 className="title-text text-xl">Clears comparison</h1>

                <DoughnutChart
                  chartData={{
                    labels: [levels[0].name, levels[1].name],
                    datasets: [
                      {
                        label: "Victories",
                        data: [
                          levels[0].totalVictories,
                          levels[1].totalVictories,
                        ],
                        backgroundColor: ["rgb(5, 99, 255)", "rgb(255, 99, 5)"],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    rotation: 270,
                    circumference: 180,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
