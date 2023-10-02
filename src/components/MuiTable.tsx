import { Rowing } from "@mui/icons-material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>first Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="center">IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Data to use in table
const tableData = [
  {
    id: 1,
    first_name: "Sabine",
    last_name: "Spreag",
    email: "sspreag0@seattletimes.com",
    gender: "Female",
    ip_address: "206.183.13.168",
  },
  {
    id: 2,
    first_name: "Hershel",
    last_name: "Muckley",
    email: "hmuckley1@gravatar.com",
    gender: "Male",
    ip_address: "25.214.206.129",
  },
  {
    id: 3,
    first_name: "Zackariah",
    last_name: "Dmitrovic",
    email: "zdmitrovic2@vinaora.com",
    gender: "Male",
    ip_address: "166.91.139.133",
  },
  {
    id: 4,
    first_name: "Lia",
    last_name: "Scudders",
    email: "lscudders3@pinterest.com",
    gender: "Female",
    ip_address: "42.60.217.36",
  },
  {
    id: 5,
    first_name: "Jesus",
    last_name: "Ravenshaw",
    email: "jravenshaw4@amazon.co.uk",
    gender: "Male",
    ip_address: "93.76.128.163",
  },
  {
    id: 6,
    first_name: "Ashien",
    last_name: "Lockhart",
    email: "alockhart5@ftc.gov",
    gender: "Female",
    ip_address: "211.217.158.120",
  },
  {
    id: 7,
    first_name: "Laurie",
    last_name: "McKibben",
    email: "lmckibben6@eepurl.com",
    gender: "Male",
    ip_address: "6.125.150.61",
  },
  {
    id: 8,
    first_name: "Nevil",
    last_name: "Hovington",
    email: "nhovington7@alexa.com",
    gender: "Male",
    ip_address: "5.97.111.168",
  },
  {
    id: 9,
    first_name: "Hanan",
    last_name: "Campanelle",
    email: "hcampanelle8@fc2.com",
    gender: "Male",
    ip_address: "191.200.55.83",
  },
  {
    id: 10,
    first_name: "Marius",
    last_name: "Rapier",
    email: "mrapier9@hostgator.com",
    gender: "Genderfluid",
    ip_address: "10.229.201.155",
  },
];
