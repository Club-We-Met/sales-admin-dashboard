import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Avatar } from '@mui/material';

// third-party

// project import
import Dot from 'components/@extended/Dot';

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Product Name'
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Total Order'
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,

    label: 'Status'
  },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Total Amount'
  }
];

const bodyCells = [
  {
    id: 1,
    align: 'left',
    icons: <Avatar />,
    username: 'Jhon Doe'
  },
  {
    id: 2,
    align: 'left',
    icons: <Avatar />,
    username: 'Virat Kholi'
  },
  {
    id: 3,
    align: 'right',
    icons: <Avatar />,
    username: 'Rohit Sharma'
  },
  {
    id: 4,
    align: 'left',
    icons: <Avatar />,
    username: 'MS Dhoni'
  },
  {
    id: 5,
    align: 'left',
    icons: <Avatar />,
    username: 'SpeedDemon87'
  },
  {
    id: 6,
    align: 'left',
    icons: <Avatar />,
    username: 'HoopsJunkie55'
  },
  {
    id: 7,
    align: 'left',
    icons: <Avatar />,
    username: 'GoalGetter99'
  },
  {
    id: 8,
    align: 'left',
    icons: <Avatar />,
    username: 'FitnessFreak123'
  },
  {
    id: 9,
    align: 'left',
    icons: <Avatar />,
    username: 'AceAthlete24'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| CUSTOMER TABLE ||============================== //

export default function OrderTable() {
  // const [order] = useState('asc');
  // const [orderBy] = useState(1);
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <TableBody>
            {bodyCells.map((row) => {
              const isItemSelected = isSelected(row.id);
              // const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <TableCell align="left">{row.icons}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
