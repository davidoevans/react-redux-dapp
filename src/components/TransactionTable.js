import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [{
  header: 'Block Hash',
  accessor: 'blockHash' // String-based value accessors!
}, {
  header: 'Block Number',
  accessor: 'blockNumber'
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
    header: 'Gas',
    accessor: 'gas'
  }, {
    header: 'Gas Price',
    accessor: 'gasPrice',
    render: props => <span className='number'>{props.value.toNumber()}</span>
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

          console.log(`event: ${e}`)
          console.log(`rowInfo: ${rowInfo.rowValues.blockHash}`)

        }
      }
    }}/>
)

export default TransactionTable
