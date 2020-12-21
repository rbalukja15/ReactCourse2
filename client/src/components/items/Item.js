import React, { Component } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import moment from "moment";
import {Button} from "@material-ui/core";

const tableColumns = [
    {
        name: "#",
        label: "#",
        options: {
            filter: false,
            sort: false,
            customBodyRender(value, metaData) {
                return metaData.rowIndex + 1;
            }
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "origin",
        label: "Origin",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "price",
        label: "price",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "quantity",
        label: "Quantity",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "createdDate",
        label: "Date",
        options: {
            filter: false,
            sort: false,
            customBodyRender(value, metaData) {
                return moment().calendar(value);
            }
        }
    },
]

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
            this.setState({ items: response.data });
        } ).catch(error => console.log(error))
    }

    deleteItem = (id) => {
        axios.delete(`/api/items/${id}`).then((response) => {
            console.log(response.data);
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
            ...tableColumns,
            {
                name: 'editAction',
                label: 'Edit Action',
                options: {
                    filter: false,
                    sort: false,
                    customBodyRender: (value, metaData) => {
                        return <Button variant={"contained"} color={"secondary"}>Click</Button>;
                    }
                }
            }
        ]

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
