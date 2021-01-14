import moment from "moment";

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
];

export const tableOptions = {
    tableColumns,
}
