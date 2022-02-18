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
  Modal,
  IconButton,
  Collapse,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { makeStyles } from "@mui/styles";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
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
      minHeight: "0 !important",
    },
    "& .MuiSelect-icon": {
      fontSize: "1.2rem !important",
    },
    iconOpen: {
      transition: "none !important",
    },
  },
});

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
  return stabilizedThis.map(el => el[0]);
}

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
    setRows,
    tablerow,
    headCells,
  } = props;
  const classes = useStyles();

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const [selected, setSelected] = useState(filterselectInitialData);
  useEffect(() => {
    let selectedkeys = Object.keys(selected);
    let filteredarray = [...tablerow];
    selectedkeys.map(val => {
      if (selected[val].length) {
        let filtered = filteredarray.filter(e =>
          selected[val].includes(e[val])
        );
        filteredarray = [...filtered];
      }
    });
    setRows(filteredarray);
  }, [selected]);

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
        {headCells.map(headCell => {
          return headCell.filter && headCell.filter ? (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              // style={{ maxWidth: 1000 }}
            >
              {headCell.label}
              <Select
                multiple
                value={selected[headCell.id]}
                onChange={e => handleChange(e, headCell.id)}
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
                  filterOption[headCell.id].map(option => (
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
        <TableCell align="left" padding="none" style={{ width: 150 }}>
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

export default function TableComponent({
  tablerow = [],
  headCells = [],
  filterselectInitialData = [],
}) {
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
  const [rows, setRows] = useState(tablerow);
  const [open, setOpen] = useState(false);
  // const filterselectInitialData = {
  //   col3: [],
  //   col6: [],
  // };
  useEffect(() => {
    headCells.map(headCell => {
      if (headCell.filter && headCell.filter) {
        setFilterHead(oldArray => [...oldArray, headCell.id]);
      }
    });
  }, []);

  useEffect(() => {
    if (filterHead.length) {
      let array = [];
      filterHead.map(val => {
        array[val] = [...new Set(tablerow.map(items => items[val]))];
      });
      setFilterOption(array);
    }
  }, [filterHead]);

  const classes = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.col1);
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

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

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
              rows={rows}
              setRows={setRows}
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
              headCells={headCells}
              tablerow={tablerow}
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
                    <>
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
                            onClick={event => handleClick(event, row.col1)}
                          />
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col1}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                          >
                            {open ? "close" : "open"}
                          </IconButton>
                          {row.col2}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col3}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col4}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col5}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col6}
                        </TableCell>
                        <TableCell align="left" padding="none">
                          {row.col7}
                        </TableCell>
                        <TableCell style={{ paddingLeft: "0px" }}>
                          {/* {hoverRow === index && ( */}
                          <>
                            <Tooltip title="Edit Script">
                              <EditOutlinedIcon
                                className="mr-3"
                                color="primary"
                                style={{
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log(row.col1)}
                              />
                            </Tooltip>
                            <Tooltip title="Delete Script">
                              <DeleteOutlineOutlinedIcon
                                className="mx-4"
                                color="primary"
                                style={{
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log("delete")}
                              />
                            </Tooltip>
                            <Tooltip title="More Actions">
                              <MoreVertOutlinedIcon
                                className="ml-3"
                                color="primary"
                                style={{
                                  fontSize: "15px",
                                  cursor: "pointer",
                                }}
                                onClick={() => console.log("preview")}
                              />
                            </Tooltip>
                          </>
                          {/* )} */}
                        </TableCell>
                      </TableRow>
                      {row.children && (
                        <TableRow hover key={row.col1}>
                          <TableCell style={{ padding: 0 }} colSpan={"100%"}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                              {row.children.map((item, index) => {
                                return (
                                  <Table>
                                    <TableBody>
                                      <TableRow key={item.col1}>
                                        <TableCell padding="checkbox">
                                          <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            inputProps={{
                                              "aria-labelledby": labelId,
                                            }}
                                            onClick={event =>
                                              handleClick(event, item.col1)
                                            }
                                          />
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col1}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col2}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col3}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col4}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col5}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col6}
                                        </TableCell>
                                        <TableCell align="left" padding="none">
                                          {item.col7}
                                        </TableCell>
                                        <TableCell
                                          style={{ paddingLeft: "0px" }}
                                        >
                                          {/* {hoverRow === index && ( */}
                                          <>
                                            <Tooltip title="Edit Script">
                                              <EditOutlinedIcon
                                                className="mr-3"
                                                color="primary"
                                                style={{
                                                  fontSize: "15px",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  console.log(item.col1)
                                                }
                                              />
                                            </Tooltip>
                                            <Tooltip title="Delete Script">
                                              <DeleteOutlineOutlinedIcon
                                                className="mx-4"
                                                color="primary"
                                                style={{
                                                  fontSize: "15px",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  console.log("delete")
                                                }
                                              />
                                            </Tooltip>
                                            <Tooltip title="More Actions">
                                              <MoreVertOutlinedIcon
                                                className="ml-3"
                                                color="primary"
                                                style={{
                                                  fontSize: "15px",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  console.log("preview")
                                                }
                                              />
                                            </Tooltip>
                                          </>
                                          {/* )} */}
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                );
                              })}
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
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
