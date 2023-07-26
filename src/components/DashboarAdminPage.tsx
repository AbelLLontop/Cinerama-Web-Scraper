import React from "react";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


const DashboarAdminPage = async () => {
await delay(4000);
  return(
      <div>Dashboar Admin Page
      </div>
  )
};

export default DashboarAdminPage;
