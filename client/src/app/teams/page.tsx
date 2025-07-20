"use client";

import { useGetTeamsQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import Header from "@/components/Header";
import {
  DataGrid,
  GridColDef,
  Toolbar,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  ColumnsPanelTrigger,
  // DensityPanelTrigger,
  ToolbarButton,
} from "@mui/x-data-grid";
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';
import FilterListIcon from '@mui/icons-material/FilterList';
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

// const CustomToolbar = () => {
//   return (
//     <Toolbar className="toolbar flex gap-2 p-2">
//       <Tooltip title="Filter">
//         <FilterPanelTrigger render={<ToolbarButton />} />
//       </Tooltip>
      
//       <Tooltip title="Download CSV">
//         <ExportCsv 
//           render={<ToolbarButton />}
//           options={{
//             fileName: 'teams-data',
//             delimiter: ',',
//           }}
//         >
//           <FileDownloadIcon fontSize="small" />
//         </ExportCsv>
//       </Tooltip>
      
//       <Tooltip title="Print">
//         <ExportPrint 
//           render={<ToolbarButton />}
//           printOptions={{
//             hideFooter: true,
//             hideToolbar: true,
//           }}
//         >
//           <PrintIcon fontSize="small" />
//         </ExportPrint>
//       </Tooltip>
      
//       <Tooltip title="Columns">
//         <ColumnsPanelTrigger render={<ToolbarButton />} />
//       </Tooltip>
      
//       <Tooltip title="Density">
//         <DensityPanelTrigger render={<ToolbarButton />} />
//       </Tooltip>
//     </Toolbar>
//   );
// };

// Alternative simple version for testing
// const CustomToolbar = () => {
//   return (
//     <Toolbar style={{ padding: '8px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
//       <span style={{ marginRight: '16px', fontWeight: 'bold' }}>Teams Toolbar</span>
//       <FilterPanelTrigger render={<ToolbarButton />} />
//       <ExportCsv render={<ToolbarButton />}>
//         <FileDownloadIcon fontSize="small" />
//       </ExportCsv>
//       <ExportPrint render={<ToolbarButton />}>
//         <PrintIcon fontSize="small" />
//       </ExportPrint>
//     </Toolbar>
//   );
// };

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  { field: "productOwnerUsername", headerName: "Product Owner", width: 200 },
  {
    field: "projectManagerUsername",
    headerName: "Project Manager",
    width: 200,
  },
];

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !teams) return <div>Error fetching teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
          pagination
          showToolbar
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Teams;