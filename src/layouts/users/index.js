import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function Users() {
  const token = localStorage.getItem("accessToken");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Define an async function to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get("https://defendr-backend-pzm1.onrender.com/user/getAll", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const filteredData = response.data.map((user) => ({
          fullname: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
              {user.fullname || "-"}
            </MDTypography>
          ),
          nickname: (
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
              {user.nickname || "-"}
            </MDTypography>
          ),
          email: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {user.email || "-"}
            </MDTypography>
          ),
          sex: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {user.sex || "-"}
            </MDTypography>
          ),
          phone: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {user.phone || "-"}
            </MDTypography>
          ),
        }));
        // Update the rows state with the filtered data
        setRows(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, [token]);

  const Columns = [
    { Header: "Full Name", accessor: "fullname", width: "30%", align: "left" },
    { Header: "Nickname", accessor: "nickname", align: "left" },
    { Header: "Email", accessor: "email", align: "center" },
    { Header: "Sex", accessor: "sex", align: "center" },
    { Header: "Phone", accessor: "phone", align: "center" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Users database
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {loading ? (
                  <MDBox display="flex" justifyContent="center" alignItems="center" height="100px">
                    <CircularProgress />
                  </MDBox>
                ) : (
                  <DataTable
                    table={{ columns: Columns, rows: rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Users;
