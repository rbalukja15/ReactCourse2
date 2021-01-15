import React, { Component } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import {Button} from "@material-ui/core";
import {tableOptions} from "./items.datatables/table.options";

const columns = tableOptions.tableColumns;

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        this._refreshData();
    }

    _refreshData = () => {
        axios.get('/api/items').then( (response) => {
            console.log(response.data);
            this.setState({ items: response.data });
        } ).catch(error => console.log(error))
    }

    deleteItem = (id) => {
        axios.delete(`/api/items/${id}`).then((response) => {
            this._refreshData();
        }).catch(error => console.log(error));
    }

    render() {
        const tableOptions = {
            filterType: 'checkbox',
            selectableRows: 'single',
            onRowsDelete: (rowsDeleted, newData) => {
                const itemToRemove = this.state.items[rowsDeleted.data[0].index];
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
                        const rowId = this.state.items[metaData.rowIndex]._id;
                        return <Button variant={"contained"} color={"secondary"} onClick={() => this.deleteItem(rowId)}>Delete</Button>;
                    }
                }
            }
        ];

        const { items } = this.state;

        return (
            <div>
                <MUIDataTable
                    title={'List of items'}
                    data={items}
                    columns={extendedTableColumns}
                    options={tableOptions}
                />
            </div>
        );
    }
}

export default Item;
