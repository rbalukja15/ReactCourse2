import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
})


const muiStyles = {
    theme: createTheme,
}

export default muiStyles;
