import React from "react";
import { useAuth } from "../context/authContext";
import { useParams } from "react-router-dom";
import DoughnutChart from "../components/charts/DoughnutChart";
import StatsCompareCard from "../components/StatsCompareCard";

export default function CompareLevelStats() {
  let { user1, user2, level } = useParams();
  const [fetched, setFetched] = React.useState(false);
  const [levelstats, setLevelstats] = React.useState([]);
  const [error, setError] = React.useState(false);
  const { URL } = useAuth();

  React.useEffect(() => {
    fetch(`${URL}levelstats/compare/${user1}/${user2}/${level}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLevelstats(data);
        setFetched(true);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Compare level stats</h1>
      {fetched ? (
        <div className="container flex flex-col justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {levelstats.map((lvl) => (
              <StatsCompareCard data={lvl} />
            ))}
            <div className="flex flex-col col-span-1 md:col-span-2 white-glassmorphism p-4 m-4 justify-center items-center">
              <h1 className="title-text text-xl">Playing numbers</h1>
              <div className="flex flex-col justify-center items-center">
                <DoughnutChart
                  chartData={{
                    labels: [levelstats[0].userId, levelstats[1].userId],
                    datasets: [
                      {
                        label: "Death tolls",
                        data: [levelstats[0].deaths, levelstats[1].deaths],
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
                <DoughnutChart
                  chartData={{
                    labels: [levelstats[0].userId, levelstats[1].userId],
                    datasets: [
                      {
                        label: "Victories",
                        data: [levelstats[0].victories, levelstats[1].victories],
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
