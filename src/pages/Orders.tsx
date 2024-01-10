import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
import "../styles/_orders.scss";
import { IOrdersTable } from "../utils/models/products";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns: Column<IOrdersTable>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows] = useState<IOrdersTable[]>([
    {
      _id: "jewfewf",
      amount: 3434,
      quantity: 2323,
      discount: 4334,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/jewfewf`}></Link>,
    },
  ]);
  const Table = TableHOC<IOrdersTable>(
    columns,
    rows,
    "dashboard-product-box",
    rows.length > 6
  )();
  return (
    <div className="orders">
      <h3>Orders</h3>
      {Table}
    </div>
  );
};

export default Orders;
