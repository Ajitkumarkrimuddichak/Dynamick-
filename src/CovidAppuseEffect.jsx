import React, { useState, useEffect } from "react";

const CovidAppuseEffect = () => {
  const [data, setData] = useState([]);
  //API Note working Error only for API
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-flude mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span>Covid-19 Data
          </h1>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                  <th>Update</th>
                </tr>
              </thead>
            </table>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <th>{curElem.state}</th>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidAppuseEffect;
