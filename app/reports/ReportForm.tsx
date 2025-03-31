// "use client";

// import React, { useState } from "react";

// interface ReportFormProps {
//   closeModal: () => void;
// }

// const ReportForm: React.FC<ReportFormProps> = ({ closeModal }) => {
//   const [location, setLocation] = useState<string>("");
//   const [weight, setWeight] = useState<number | "">("");

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
//         <h2 className="text-xl font-semibold mb-4">Add New Report</h2>

//         {/* Form Fields */}
//         <form>
//           <label className="block mb-2">
//             <span className="text-gray-700">Location</span>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full border p-2 rounded-md"
//               placeholder="Enter location"
//             />
//           </label>

//           <label className="block mb-2">
//             <span className="text-gray-700">Total Weight (kg)</span>
//             <input
//               type="number"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
//               className="w-full border p-2 rounded-md"
//               placeholder="Enter weight"
//             />
//           </label>

//           {/* Close and Submit Buttons */}
//           <div className="flex justify-end gap-2 mt-4">
//             <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>
//               Close
//             </button>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReportForm;
