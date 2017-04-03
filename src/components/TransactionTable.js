import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [{
  header: 'Block',
  columns: [{
    header: 'Block Number',
    accessor: 'blockNumber'
  }],
  }, {
  header: 'Transaction',
  columns: [{
    header: 'Hash',
    accessor: 'hash'
  },{
    header: 'From',
    accessor: 'from'
  }, {
    header: 'To',
    accessor: 'to'
  }, {
    header: 'Gas Used',
    accessor: 'gasUsed'
  }, {
    header: 'Gas Price',
    accessor: 'gasPrice',
    render: props => <span className='number'>{props.value.toNumber()}</span>
  }, {
    header: 'Cost',
    accessor: 'cost'
  }, {
    header: 'Cost (ETH)',
    accessor: 'costEth'
  }, {
    header: 'Cost (CAD)',
    accessor: 'costCAD'
  }]
}];

const TransactionTable = ({ transactions }) => (
  <ReactTable data={transactions}
    columns={columns}
    showPagination={false}
    showPageSizeOptions={false}
    defaultPageSize={3}
    getTdProps={(state, rowInfo, column, instance) => {
      return {
        onClick: e => {
          e.preventDefault()
          console.log(`event: ${e}`)
          console.log(`rowInfo: ${rowInfo.rowValues.blockHash}`)

        }
      }
    }}/>
)

export default TransactionTable
