import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './test.module.scss';
import {Button, FormControl} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import axios from 'axios';

function EventHandling(props) {
    const [person, setPerson] = useState({
        name: props.name,
        origin: props.origin,
        price: props.price,
        quantity: props.quantity,
    })


    const handleInputChange = (e) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;

        setPerson({
            ...person,
            [targetName]: targetValue,
        });
    }

    const handleFormSubmit = () => {
        console.log(person);
        axios.post('/api/items', person)
            .then(response => console.log(response))
            .catch(error => console.log(error.message));
    }

    return (
        <div className={styles.mainDiv}>
            <form>
                <FormGroup>
                    <FormControl style={{ marginRight: 2, maxWidth: '25rem', marginBottom: '2rem' }} required>
                        <TextField
                            label={"Name"}
                            name={"name"}
                            type={"text"}
                            value={person.name}
                            onChange={handleInputChange}
                            variant={"outlined"}
                        />
                    </FormControl>
                    <FormControl style={{ marginRight: 2, maxWidth: '25rem', marginBottom: '2rem' }} required>
                        <TextField
                            label={"Origin"}
                            name={"origin"}
                            type={"text"}
                            value={person.origin}
                            onChange={handleInputChange}
                            variant={"outlined"}
                        />
                    </FormControl>
                    <FormControl style={{ marginRight: 2, maxWidth: '25rem', marginBottom: '2rem' }} required>
                        <TextField
                            label={"Price"}
                            name={"price"}
                            type={"number"}
                            value={person.price}
                            onChange={handleInputChange}
                            variant={"outlined"}
                        />
                    </FormControl>
                    <FormControl style={{ marginRight: 2, maxWidth: '25rem', marginBottom: '2rem' }} required>
                        <TextField
                            label={"Quantity"}
                            name={"quantity"}
                            type={"number"}
                            value={person.quantity}
                            onChange={handleInputChange}
                            variant={"outlined"}
                        />
                    </FormControl>
                    <div>
                        <Button
                            //type={"submit"}
                            style={{ float: 'left' }}
                            color={"secondary"}
                            variant={"contained"}
                            onClick={handleFormSubmit}
                        >
                            Submit Form
                        </Button>
                    </div>
                </FormGroup>
            </form>
        </div>
    );
}

EventHandling.propTypes = {
    name: PropTypes.string.isRequired,
    origin: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}

EventHandling.defaultProps = {
    name: "",
    origin: "",
    price: 0,
    quantity: 0,
}

export default EventHandling;
