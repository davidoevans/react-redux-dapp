import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [{
  header: 'Public Address',
  accessor: 'address' // String-based value accessors!
},
// {
//   header: 'Name',
//   accessor: 'name'
// },
{
  header: 'Balance',
  columns: [{
    header: 'Intrinsic (ETH)',
    accessor: 'balance',
    render: props => <span className='number'>{props.value.toNumber()}</span>
  }, {
    header: 'Fiat (CAD)',
    accessor: 'cadCoin',
    render: props => (
          <span className="number">$ {parseFloat(Math.round(props.value * 100) / 100).toFixed(2)}</span>
    )
  }, {
    header: 'MetaCoin',
    accessor: 'meta'
  }]
}];

const AccountTable = ({ accounts }) => (
  <ReactTable data={accounts}
    columns={columns}
    showPagination={false}
    showPageSizeOptions={false}
    defaultPageSize={10} />
)

export default AccountTable
