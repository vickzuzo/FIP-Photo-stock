import React from "react";
import { TableContainer } from "./styles";
import moment from "moment";

const Table = ({ data, columns }) => {
  return (
    <TableContainer>
      <table>
        <thead>
          {columns.map((column, idx) => (
            <th key={idx}>{column}</th>
          ))}
        </thead>
        <tbody>
          {data?.map((value, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{moment(value.createdAt).format("DD, MMM, YY")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
