import React from "react";
import BackNavigationPane from "../components/BackNavigationPane";
import { useNavigate } from "react-router-dom";
import MedicationSheetList from "../components/nursesPageComponents/MedicationSheetList";
// TODO: delete this: https://www.figma.com/file/lfnsAmiUoc9nFRiqAzwQhG/Patient-memo?node-id=378%3A8809

export default function MedicationSheet() {
  // Navigation object
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      {/* Back navigation pane */}
      <BackNavigationPane
        onBack={() => navigate("/dashboard")}
        title="Manage Medication Sheet"
        isButton={true}
        buttonText="New Sheet"
      />
      {/* TODO: Search bar */}

      {/*  Patient list */}

      <div className="w-2/3 mt-32 mx-auto">
        <MedicationSheetList />
      </div>
    </div>
  );
}
