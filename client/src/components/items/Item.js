import React, { Component } from 'react';
import {Button, ButtonGroup, Divider, List, ListItem} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";

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

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List component={"nav"}>
                    { initialList.map( (value, index) =>
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
}

export default Item;
