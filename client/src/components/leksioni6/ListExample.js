import React, {useState} from 'react';
import {Button, Divider, List, ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Paper from "@material-ui/core/Paper";

const initialList = [
    {
        id: 1,
        name: 'first',
        createdAt: Date.now()
    },
    {
        id: 2,
        name: 'second',
        createdAt: Date.now()
    },
    {
        id: 3,
        name: 'third',
        createdAt: Date.now()
    }
];

const itemToAdd = {
    id: 4,
    name: 'New Item',
    createdAt: Date.now(),
}

function ListExample(props) {
    const [list, setList] = useState(initialList);

    const deleteItem = (listId) => {
        setList(list.filter( value => value.id !== listId ));
    }

    const addItem = () => {
        setList([...list, itemToAdd])
    }

    return (
        <div>
            <Button variant={"contained"} color={"primary"} onClick={addItem}>Add to the list</Button>
            <List component={"nav"}>
                { list.map( (value, index) =>
                    (
                        <Paper key={index}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccessAlarmIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={value.name}
                                    secondary={moment().calendar(value.createdAt)}
                                />
                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                    onClick={() => deleteItem(value.id)}
                                >
                                    Delete Item
                                </Button>
                            </ListItem>
                            <Divider />
                        </Paper>
                    )
                ) }
            </List>
        </div>
    );
}

export default ListExample;
