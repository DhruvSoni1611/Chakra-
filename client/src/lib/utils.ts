// export const dataGridClassNames =
//   "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

// export const dataGridSxStyles = (isDarkMode: boolean) => {
//   return {
//     "& .MuiDataGrid-columnHeaders": {
//       color: `${isDarkMode ? "#e5e7eb" : ""}`,
//       '& [role="row"] > *': {
//         backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
//         borderColor: `${isDarkMode ? "#2d3135" : ""}`,
//       },
//     },
//     "& .MuiIconbutton-root": {
//       color: `${isDarkMode ? "#a3a3a3" : ""}`,
//     },
//     "& .MuiTablePagination-root": {
//       color: `${isDarkMode ? "#a3a3a3" : ""}`,
//     },
//     "& .MuiTablePagination-selectIcon": {
//       color: `${isDarkMode ? "#a3a3a3" : ""}`,
//     },
//     "& .MuiDataGrid-cell": {
//       border: "none",
//     },
//     "& .MuiDataGrid-row": {
//       borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`,
//     },
//     "& .MuiDataGrid-withBorderColor": {
//       borderColor: `${isDarkMode ? "#2d3135" : "e5e7eb"}`,
//     },
//   };
// };

export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: `${isDarkMode ? "#e5e7eb" : ""}`,
      '& [role="row"] > *': {
        backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
        borderColor: `${isDarkMode ? "#2d3135" : ""}`,
      },
    },
    "& .MuiIconbutton-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-selectIcon": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiDataGrid-cell": {
      border: "none",
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
      transition: "background-color 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: `${isDarkMode ? "#2a2d31" : "#f9fafb"}`,
        cursor: "pointer",
      },
      "&.Mui-selected": {
        backgroundColor: `${isDarkMode ? "#374151" : "#e0e7ff"}`,
        "&:hover": {
          backgroundColor: `${isDarkMode ? "#4b5563" : "#c7d2fe"}`,
        },
      },
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: `${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
    },
    // Additional hover effects for cells
    "& .MuiDataGrid-cell:hover": {
      color: `${isDarkMode ? "#f3f4f6" : "#1f2937"}`,
    },
    // Hover effect for toolbar buttons
    "& .MuiButton-root:hover": {
      backgroundColor: `${isDarkMode ? "#374151" : "#f3f4f6"}`,
    },
  };
};