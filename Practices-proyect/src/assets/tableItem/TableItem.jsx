import Table from 'react-bootstrap/Table';

const TableItem = ({ netIncomes }) => {

  const totalNetIncome = netIncomes.reduce((total, netIncome) => {
    return total + netIncome.income;
  }, 0);
  
  const averageNetIncome = (totalNetIncome / netIncomes.length).toFixed(2);

  return (
    <div>
      <Table responsive striped hover variant="dark" size='xl'>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((company, index) => (
            <tr key={index}>
              <td>{company.brand}</td>
              <td>${company.income}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>Total Average:{averageNetIncome}</p>
    </div>
  );
};

export default TableItem;