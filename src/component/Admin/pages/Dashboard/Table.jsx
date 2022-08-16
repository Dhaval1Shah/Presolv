import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import "./table.css";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import DataJson from "../../../Utils/data.json";
import { useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
// import Profile from "../Profile/Profile";

function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function Table() {
  const history = useHistory();
  const [showData, setShowData] = useState([]);
  const [pageSize, setPageSize] = React.useState(25);

  useEffect(() => {
    setShowData(DataJson);
  }, []);

  const handleContained = (e) => {
    e.stopPropagation();

    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Confirm",
        });
      }
    });
  };

  const handleContained2 = (e) => {
    e.stopPropagation();

    Swal.fire({
      title: "Are you sure?",
      text: "Rejecte It !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Rejecte it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "successfully Rejected",
        });
      }
    });
  };

  const ProfilePage = () => {
    history.push(<Profile />);
  };

  const columns = [
    { field: "keyInc", headerName: "Sr No", width: 110 },
    {
      field: "id",
      headerName: "Case ID",
      width: 130,
      renderCell: (params) => {
        let convertID = "A" + pad(params.id, 6);
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to={`/casedetails/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                onClick={ProfilePage}
                className="ContentButton"
                color="primary"
              >
                {convertID}
              </Button>
            </Link>

            <Button
              // onClick={handleContained2}
              variant="contained"
              color="inherit"
              className="CancleButton"
              style={{ marginTop: "5px", textTransform: "none" }}
            >
              Track
            </Button>
          </div>
        );
      },
    },
    { field: "ref_id", headerName: "Reference ID", width: 130 },
    {
      field: "created_at",
      headerName: "Date",
      width: 160,
    },
    {
      field: "party_name",
      headerName: "Party Details",
      width: 160,
    },
    { field: "city", headerName: "Comments", width: 130 },
    {
      field: "arbitration",
      headerName: "Arbitrator",
      width: 130,
      renderCell: (params) => {
        return <div>{params.value === null ? "No Assign" : "Assign"}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 110,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="contained"
              onClick={handleContained}
              className="ContentButton"
              // color="success"
            >
              Confirm
            </Button>

            <Button
              onClick={(e) => {
                handleContained2(e);
              }}
              variant="contained"
              color="error"
              className="CancleButton"
              style={{ marginTop: "5px" }}
              id={params.row.id}
            >
              Reject
            </Button>
          </div>
        );
      },
    },
    { field: "status", headerName: "Status ", width: 132 },
  ];

  const rows = [];

  showData.map((e, i) => {
    rows.push({
      keyInc: e.keyInc,
      id: e.id,
      ref_id: e.ref_id,
      created_at: e.created_at,
      party_name: e.party_name,
      city: "ahmedabad",
      arbitration: e.arbname,
      action: "Approve",
    });
  });

  return (
    <div style={{ height: 540, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={70}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[25, 50, 100]}
        pagination
        checkboxSelection
      />
    </div>
  );
}

export default Table;
