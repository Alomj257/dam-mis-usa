import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExpenditureTable from "../../Components/Expenditure/ExpenditureTable/ExpenditureTable";

const ExpenditurePage = () => {
  return (
    <div>
      <Navbar title="Expenditures" />
      <ExpenditureTable />
    </div>
  );
};

export default ExpenditurePage;
