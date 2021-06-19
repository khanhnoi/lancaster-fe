import React from "react";

const ListView = () => {
  const mockDataListView = [
    {
      residence: "30A",
      type: ["2 Bedrooms", "2 Bathrooms", "West Exposure"],
      finish: "Classic palette",
      size: [
        { value: 1221, unit: "SQ.FT" },
        { value: 113, unit: "SQ.M" },
      ],
      price: 1850000,
    },
    {
      residence: "30A",
      type: ["2 Bedrooms", "2 Bathrooms", "West Exposure"],
      finish: "Classic palette",
      size: [
        { value: 1221, unit: "SQ.FT" },
        { value: 113, unit: "SQ.M" },
      ],
      price: 1850000,
    },
    {
      residence: "30A",
      type: ["2 Bedrooms", "2 Bathrooms", "West Exposure"],
      finish: "Classic palette",
      size: [
        { value: 1221, unit: "SQ.FT" },
        { value: 113, unit: "SQ.M" },
      ],
      price: 1850000,
    },
    {
      residence: "30A",
      type: ["2 Bedrooms", "2 Bathrooms", "West Exposure"],
      finish: "Classic palette",
      size: [
        { value: 1221, unit: "SQ.FT" },
        { value: 113, unit: "SQ.M" },
      ],
      price: 1850000,
    },
    {
      residence: "30A",
      type: ["2 Bedrooms", "2 Bathrooms", "West Exposure"],
      finish: "Classic palette",
      size: [
        { value: 1221, unit: "SQ.FT" },
        { value: 113, unit: "SQ.M" },
      ],
      price: 1850000,
    },
  ];
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <section className="listview-availability">
        <div className="container">
          <div className="row w-100">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="listview-availability-header">
                  <th>Residence</th>
                  <th>type</th>
                  <th>finish</th>
                  <th>size</th>
                  <th>price</th>
                  <th>detail (pdf)</th>
                </tr>
                {mockDataListView &&
                  mockDataListView.map((view, index) => (
                    <tr
                      key={index.toString()}
                      className="listview-availability-body"
                    >
                      <th>
                        <h4>{view.residence}</h4>
                      </th>
                      <th>
                        <ul className="listview-availability-body-list">
                          {view.type &&
                            view.type.map((tp, index) => (
                              <li key={index.toString()}>{tp}</li>
                            ))}
                        </ul>
                      </th>

                      <th>
                        <p>{view.finish}</p>
                      </th>
                      <th>
                        <ul className="listview-availability-body-list">
                          {view.size &&
                            view.size.map((sz, index) => (
                              <li key={index.toString()}>
                                {numberWithCommas(sz.value) +
                                  " " +
                                  numberWithCommas(sz.unit)}{" "}
                              </li>
                            ))}
                        </ul>
                      </th>

                      <th>
                        <p>${numberWithCommas(view.price)}</p>
                      </th>
                      <th>
                        <ul className="listview-availability-body-detail">
                          <li>View detail</li>
                        </ul>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListView;
