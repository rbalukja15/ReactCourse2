import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import {Button} from "@material-ui/core";
import {tableOptions} from "./items.datatables/table.options";
import { connect } from 'react-redux';
import {deleteItem, getItems} from "../../redux/actions/itemActions";

const columns = tableOptions.tableColumns;

class Item extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._refreshData();
    }

    _refreshData = () => {
        this.props.getItems();
    }

    deleteItem = (id) => {
        this.props.deleteItem(id).then( () => {
            this._refreshData();
        } )
    }

    render() {
        const { items: { items } } = this.props;

        const tableOptions = {
            filterType: 'checkbox',
            selectableRows: 'single',
            onRowsDelete: (rowsDeleted, newData) => {
                const itemToRemove = items[rowsDeleted.data[0].index];
                this.deleteItem(itemToRemove._id);
                this._refreshData();
            },
        }

        const extendedTableColumns = [
            ...columns,
            {
                name: 'editAction',
                label: 'Edit Action',
                options: {
                    filter: false,
                    sort: false,
                    customBodyRender: (value, metaData) => {
                        return <Button variant={"contained"} color={"primary"}>Edit</Button>;
                    }
                }
            },
            {
                name: 'deleteAction',
                label: 'Delete Action',
                options: {
                    filter: false,
                    sort: false,
                    customBodyRender: (value, metaData) => {
                        const rowId = items[metaData.rowIndex]._id;
                        return <Button variant={"contained"} color={"secondary"} onClick={() => this.deleteItem(rowId)}>Delete</Button>;
                    }
                }
            }
        ];

        return (
            <div>
                { items.length ? (
                    <MUIDataTable
                        title={'List of items'}
                        data={items}
                        columns={extendedTableColumns}
                        options={tableOptions}
                />) : null }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.item,
});

const mapDispatchToProps = {
    getItems,
    deleteItem,
}



export default connect(mapStateToProps, mapDispatchToProps)(Item);
