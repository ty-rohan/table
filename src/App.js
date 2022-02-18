import ButtonComponent from "./component/ButtonComponent";
import TableComponent from "./component/TableComponent";
import "./App.css";
import SwitchComponent from "./component/SwitchComponent";
import SimpleDropDown from "./component/SimpleDropDown";
import CkEditorComponent from "./component/CkEditorComponent";
import Sidebar from "./component/Sidebar";
import Multipledropdown from "./component/multipledropdown";
import EditorComponent from "./component/Editor";
import { useState, useEffect } from "react";
import Discussion from "./component/Discussion";

const tablerow = [
  {
    col1: 1,
    col2: "Cupcake",
    col3: 305,
    col4: 3.7,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "24-10-2022",
    children: [
      {
        col1: 1.1,
        col2: "Cupcake",
        col3: 305,
        col4: 3.7,
        col5: (
          <>
            <SwitchComponent />
          </>
        ),
        col6: "aaa",
        col7: "24-10-2022",
      },
      {
        col1: 1.1,
        col2: "Cupcake",
        col3: 305,
        col4: 3.7,
        col5: (
          <>
            <SwitchComponent />
          </>
        ),
        col6: "aaa",
        col7: "24-10-2022",
      },
    ],
  },
  {
    col1: 2,
    col2: "Donut",
    col3: 452,
    col4: 25.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "25-10-2022",
  },
  {
    col1: 3,
    col2: "Eclair",
    col3: 262,
    col4: 16.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "26-10-2022",
  },
  {
    col1: 4,
    col2: "Frozen yoghurt",
    col3: 159,
    col4: 6.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "25-10-2022",
  },
  {
    col1: 5,
    col2: "Gingerbread",
    col3: 356,
    col4: 16.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "28-10-2022",
  },
  {
    col1: 6,
    col2: "Honeycomb",
    col3: 408,
    col4: 3.2,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "20-10-2022",
  },
  {
    col1: 7,
    col2: "Ice cream sandwich",
    col3: 237,
    col4: 9.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "21-10-2022",
  },
  {
    col1: 8,
    col2: "Jelly Bean",
    col3: 375,
    col4: 0.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "24-11-2022",
  },
  {
    col1: 9,
    col2: "KitKat",
    col3: 518,
    col4: 26.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "25-11-2022",
  },
  {
    col1: 10,
    col2: "Lollipop",
    col3: 392,
    col4: 0.2,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "24-12-2022",
  },
  {
    col1: 11,
    col2: "Marshmallow",
    col3: 318,
    col4: 0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "14-10-2022",
  },
  {
    col1: 12,
    col2: "Nougat",
    col3: 360,
    col4: 19.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "11-10-2022",
  },
  {
    col1: 13,
    col2: "Oreo",
    col3: 437,
    col4: 18.0,
    col5: (
      <>
        <SwitchComponent />
      </>
    ),
    col6: "aaa",
    col7: "24-12-2022",
  },
];
function App() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(tablerow);
  }, []);
  const headCells = [
    {
      id: "col1",
      numeric: false,
      disablePadding: true,
      label: "SL No.",
    },
    {
      id: "col2",
      numeric: false,
      disablePadding: true,
      label: "Blog Heading",
    },
    {
      id: "col3",
      numeric: false,
      disablePadding: true,
      label: "Category",
      filter: true,
    },
    {
      id: "col4",
      numeric: false,
      disablePadding: true,
      label: "Short Description",
    },
    {
      id: "col5",
      numeric: false,
      disablePadding: true,
      label: "Publish",
    },
    {
      id: "col6",
      numeric: false,
      disablePadding: true,
      label: "Modified By",
      filter: true,
    },
    {
      id: "col7",
      numeric: false,
      disablePadding: true,
      label: "Modified On",
    },
  ];

  const filterselectInitialData = { col6: [], col3: [] };
  return (
    <div>
      {rows.length > 0 && (
        <TableComponent
          tablerow={rows}
          headCells={headCells}
          filterselectInitialData={filterselectInitialData}
        />
      )}
      {/* <ButtonComponent /> */}
      {/* <SwitchComponent /> */}
      {/* <SimpleDropDown /> */}
      {/* <CkEditorComponent /> */}
      {/* <Sidebar /> */}
      {/* <Multipledropdown /> */}
      {/* <EditorComponent /> */}
      {/* <Discussion /> */}
    </div>
  );
}

export default App;
