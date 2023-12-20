import IndivComp from "./IndivComp";

function Common() {
  const width1 = { width: "34%" };
  const width2 = { width: "22%" };
  return (
    <>
      <h2 className="display-6 text-center mb-4">Common Places</h2>

      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={width1}></th>
              <th style={width2}>Temp</th>
              <th style={width2}>Max_temp</th>
              <th style={width2}>Min_temp</th>
              <th style={width2}>Humidity</th>
              <th style={width2}>Sunrise</th>
              <th style={width2}>Sunset</th>
              <th style={width2}>Wind_speed</th>
            </tr>
          </thead>
          <tbody>
            <IndivComp city={"Shanghai"} />
            <IndivComp city={"New York"} />
            <IndivComp city={"London"} />
            <IndivComp city={"Tokyo"} />
            <IndivComp city={"Delhi"} />
            <IndivComp city={"Mumbai"} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Common;
