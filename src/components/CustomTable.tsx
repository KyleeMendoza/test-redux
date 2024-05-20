import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetDataQuery } from "../services/api";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../slice/tableSlice";

interface TableState {
  data: any[];
}

interface RootState {
  table: TableState;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "street", headerName: "Street", width: 130 },
];

export default function CustomTable() {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.table.data);

  const { data, isLoading, isSuccess, isError, error } =
    useGetDataQuery("/users");

  React.useEffect(() => {
    if (isLoading) {
    } else if (isSuccess) {
      dispatch(setData({ data: data }));
    } else if (isError) {
    }
  }, [data, isLoading, isSuccess, isError, error]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
