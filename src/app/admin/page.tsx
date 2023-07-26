import DashboarAdminPage from "@/components/DashboarAdminPage";
import React, { Suspense } from "react";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const AdminPage = async () => {
  await delay(2000)
  return (
    <div>
      AdminPage
      <Suspense fallback={<div>Loading component...</div>}>
        <DashboarAdminPage />
      </Suspense>
    </div>
  );
};

export default AdminPage;
