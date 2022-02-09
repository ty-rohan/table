import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
  MenuItem,
  Select,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import SwitchComponent from "./SwitchComponent";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const useStyles = makeStyles({
  tableHeadBg: {
    backgroundColor: "#f0f3f9",
  },
  tableHeadColor: {
    color: "#3c3838",
    fontFamily: "Open Sans",
    fontWeight: "400",
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectText: {
    fontSize: "8px",
    fontWeight: "bold",
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  select: {
    "& .MuiSelect-select": {
      minWidth: "0 !important",
    },
    "& .MuiSelect-icon": {
      fontSize: "1.2rem !important",
    },
  },
});

const rows = [
  {
    col1: 1,
    col2: "Cupcake",
    col3: 305,
    col4: 3.7,
    col5: 67,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "24-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 2,
    col2: "Donut",
    col3: 452,
    col4: 25.0,
    col5: 51,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "25-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 3,
    col2: "Eclair",
    col3: 262,
    col4: 16.0,
    col5: 24,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "26-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 4,
    col2: "Frozen yoghurt",
    col3: 159,
    col4: 6.0,
    col5: 24,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "25-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 5,
    col2: "Gingerbread",
    col3: 356,
    col4: 16.0,
    col5: 49,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "28-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 6,
    col2: "Honeycomb",
    col3: 408,
    col4: 3.2,
    col5: 87,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "20-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 7,
    col2: "Ice cream sandwich",
    col3: 237,
    col4: 9.0,
    col5: 37,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "21-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 8,
    col2: "Jelly Bean",
    col3: 375,
    col4: 0.0,
    col5: 94,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "24-11-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 9,
    col2: "KitKat",
    col3: 518,
    col4: 26.0,
    col5: 65,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "25-11-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 10,
    col2: "Lollipop",
    col3: 392,
    col4: 0.2,
    col5: 98,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "24-12-2022",
    col9: 22,
    col10: 1,
    col11: 0,
  },
  {
    col1: 11,
    col2: "Marshmallow",
    col3: 318,
    col4: 0,
    col5: 81,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "14-10-2022",
    col9: 132,
    col10: 1,
    col11: 3,
  },
  {
    col1: 12,
    col2: "Nougat",
    col3: 360,
    col4: 19.0,
    col5: 9,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "11-10-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
  {
    col1: 13,
    col2: "Oreo",
    col3: 437,
    col4: 18.0,
    col5: 63,
    col6: (
      <>
        <SwitchComponent />
      </>
    ),
    col7: "aaa",
    col8: "24-12-2022",
    col9: 2,
    col10: 1,
    col11: 0,
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
  },
  {
    id: "col4",
    numeric: false,
    disablePadding: true,
    label: "Picture",
  },
  {
    id: "col5",
    numeric: false,
    disablePadding: true,
    label: "Short Description",
  },
  {
    id: "col6",
    numeric: false,
    disablePadding: true,
    label: "Publish",
  },
  {
    id: "col7",
    numeric: false,
    disablePadding: true,
    label: "Modified By",
  },
  {
    id: "col8",
    numeric: false,
    disablePadding: true,
    label: "Modified On",
  },
  {
    id: "col9",
    numeric: false,
    disablePadding: true,
    label: "Comments",
    filter: true,
  },
  {
    id: "col10",
    numeric: false,
    disablePadding: true,
    label: "Likes",
    filter: true,
  },
  {
    id: "col11",
    numeric: false,
    disablePadding: true,
    label: "Dislikes",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    filterOption,
    filterselectInitialData,
  } = props;
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const options = ["Blog", "case study", "faq", "product"];

  const [selected, setSelected] = useState(filterselectInitialData);
  // const isAllSelected =
  //   options.length > 0 && selected.length === options.length;

  const handleChange = (event, id) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected({
        ...selected,
        [id]:
          selected[id].length === filterOption[id].length
            ? []
            : filterOption[id],
      });
      return;
    }
    setSelected({ ...selected, [id]: value });
  };

  return (
    <TableHead className={classes.tableHeadBg}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => {
          return headCell.filter && headCell.filter ? (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              // style={{ maxWidth: 1000 }}
            >
              {/* <TableSortLabel
                active={true}
                IconComponent={null}
                className={classes.tableHeadColor}
              > */}
              {headCell.label}
              {console.log(selected[headCell.id], "selected[headCell.id]")}
              <Select
                multiple
                // value={selected[headCell.id]}
                value={selected[headCell.id]}
                onChange={(e) => handleChange(e, headCell.id)}
                renderValue={() => false}
                IconComponent={FilterAltOutlinedIcon}
                variant="standard"
                className={classes.select}
              >
                <MenuItem
                  value="all"
                  classes={{
                    root:
                      selected[headCell.id] &&
                      selected[headCell.id].length ===
                        filterOption[headCell.id] &&
                      filterOption[headCell.id].length
                        ? classes.selectedAll
                        : "",
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      classes={{
                        indeterminate: classes.indeterminateColor,
                      }}
                      checked={
                        filterOption[headCell.id] &&
                        filterOption[headCell.id].length > 0 &&
                        selected[headCell.id] &&
                        selected[headCell.id].length ===
                          filterOption[headCell.id].length
                      }
                      indeterminate={
                        selected[headCell.id] &&
                        selected[headCell.id].length > 0 &&
                        selected[headCell.id] &&
                        selected[headCell.id].length <
                          filterOption[headCell.id].length
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.selectAllText }}
                    primary="Select All"
                  />
                </MenuItem>
                {filterOption[headCell.id] &&
                  filterOption[headCell.id].map((option) => (
                    <MenuItem key={option} value={option}>
                      <ListItemIcon>
                        <Checkbox
                          checked={
                            selected[headCell.id] &&
                            selected[headCell.id].indexOf(option) > -1
                          }
                        />
                      </ListItemIcon>
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
              </Select>
              {/* </TableSortLabel> */}
            </TableCell>
          ) : (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              // style={{ maxWidth: 1000 }}
            >
              <TableSortLabel
                active={true}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                IconComponent={SortByAlphaIcon}
                className={classes.tableHeadColor}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell align="left" padding="none" style={{ width: 100 }}>
          <TableSortLabel
            active={true}
            IconComponent={null}
            className={classes.tableHeadColor}
          >
            Action
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("col1");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [hoverRow, setHoverRow] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterSelected, setFilterSelected] = useState([]);
  const [filterOption, setFilterOption] = useState([]);
  const [filterHead, setFilterHead] = useState([]);
  const filterselectInitialData = {
    col1: [],
    col2: [],
    col3: [],
    col4: [],
    col5: [],
    col6: [],
    col7: [],
    col8: [],
    col9: [],
    col10: [],
    col11: [],
    col12: [],
  };
  useEffect(() => {
    headCells.map((headCell) => {
      if (headCell.filter && headCell.filter) {
        setFilterHead((oldArray) => [...oldArray, headCell.id]);
      }
    });
  }, []);

  useEffect(() => {
    if (filterHead.length) {
      let array = [];
      filterHead.map((val) => {
        array[val] = [...new Set(rows.map((items) => items[val]))];
      });
      console.log(array, "array");
      setFilterOption(array);
    }
  }, [filterHead]);

  const classes = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.col1);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "98%", margin: "10px auto" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            className={classes.MuiTableRow}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              setFilterSelected={setFilterSelected}
              filterSelected={filterSelected}
              filterOption={filterOption}
              filterselectInitialData={filterselectInitialData}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.col1);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      key={row.col1}
                      onMouseEnter={() => setHoverRow(index)}
                      onMouseLeave={() => setHoverRow()}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                          onClick={(event) => handleClick(event, row.col1)}
                        />
                      </TableCell>
                      {Object.entries(row).map(([_, ele], index) => {
                        return (
                          <TableCell
                            key={index}
                            sx={{ pt: { lg: 2, sm: 1 }, pb: { lg: 1, sm: 1 } }}
                            align="left"
                            padding="none"
                          >
                            {ele}
                          </TableCell>
                        );
                      })}
                      <TableCell style={{ paddingLeft: "0px" }}>
                        {hoverRow === index && (
                          <>
                            <Tooltip title="Edit">
                              <EditIcon
                                style={{
                                  fill: "#0072ea",
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log("edit")}
                              />
                            </Tooltip>
                            <Tooltip title="Delete">
                              <DeleteIcon
                                style={{
                                  fill: "#0072ea",
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log("delete")}
                              />
                            </Tooltip>
                            <Tooltip title="Preview">
                              <PreviewIcon
                                style={{
                                  fill: "#0072ea",
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log("preview")}
                              />
                            </Tooltip>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
