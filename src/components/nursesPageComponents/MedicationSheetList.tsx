import React, { MouseEvent } from "react";
import doctorImage from "../../assets/images/SideImage.png";

const MedicationSheetListArray = [
  {
    id: 1,
    doctorName: "Dr. John Doe",
    doctorImage: doctorImage,
    DrDate: "2020-01-01",
    DrTime: "10:00 AM",
    drugName: "Paracetamol",
    drugDose: "1",
    issuanceDate: "2020-01-01",
    issuanceTime: "10:00 AM",
    nurseName: "Mary Jane",
    nurseImage: doctorImage,
  },
  {
    id: 1,
    doctorName: "Dr. John Doe",
    doctorImage: doctorImage,
    DrDate: "2020-01-01",
    DrTime: "10:00 AM",
    drugName: "Paracetamol",
    drugDose: "1",
    issuanceDate: "2020-01-01",
    issuanceTime: "10:00 AM",
    nurseName: "Mary Jane",
    nurseImage: doctorImage,
  },
];

export default function MedicationSheetList(this: any) {
  const [tableRowColor] = React.useState(false);
  const blackText = "text-white";

  const handleMouseEnter = (e: MouseEvent<HTMLTableRowElement>) => {
    // Do something
  };

  return (
    <div className="mt-1 mb-3">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr>
            <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-5 text-black dark:text-slate-200 text-left">
              Doctor
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-5 text-black dark:text-slate-200 text-left">
              Drugs/Prescription
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-5 text-black dark:text-slate-200 text-left">
              Date/Time
            </th>
            <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-5 text-black dark:text-slate-200 text-left">
              Sign
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {MedicationSheetListArray.map((item, index) => (
            <tr
              className="pl-8 hover:bg-[#7123E2] cursor-pointer"
              onMouseOver={handleMouseEnter}
            >
              <td className="p-4 pl-8 rounded-l-xl mt-3">
                <div className="flex justify-start items-center">
                  <img
                    src={item.doctorImage}
                    alt="doctor"
                    className="rounded-full object-cover w-12 h-12 mr-5"
                  />
                  <div>
                    <p
                      className={`font-bold text-base ${
                        tableRowColor ? blackText : ""
                      }`}
                    >
                      {item.doctorName}
                    </p>
                    <p
                      className={`${
                        tableRowColor ? "text-white" : "text-black"
                      }`}
                    >
                      {item.DrTime}, {item.DrDate}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-start items-center">
                  <div>
                    <p
                      className={`font-bold text-base ${
                        tableRowColor ? "text-white" : "text-black"
                      }`}
                    >
                      {item.drugName}
                    </p>
                    <p
                      className={`${
                        tableRowColor ? "text-white" : "text-black"
                      }`}
                    >
                      {item.drugDose}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 pr-8">
                <div className="flex justify-start items-center">
                  <div>
                    <p
                      className={`font-bold text-base ${
                        tableRowColor ? "text-white" : "text-black"
                      }`}
                    >
                      {item.issuanceTime}, {item.issuanceDate}
                    </p>
                    <br />
                  </div>
                </div>
              </td>
              <td className="p-4 pr-8  rounded-r-xl">
                <div className="flex justify-start items-center">
                  <img
                    src={item.nurseImage}
                    alt="doctor"
                    className="rounded-full object-cover w-10 h-10 mr-5"
                  />
                  <div>
                    <p
                      className={`font-bold text-base ${
                        tableRowColor ? "text-white" : "text-black"
                      }`}
                    >
                      {item.nurseName}
                    </p>
                    <br />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
