import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles(() => ({
  paper: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '8px',
    },
  },
  avatar: {
    margin: '8px',
    backgroundColor: deepPurple[500],
    color: '#fff', // Sử dụng màu trắng trực tiếp
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '24px', // theme.spacing(3) is typically 8px * 3
  },
  submit: {
    margin: '24px 0 16px', // theme.spacing(3, 0, 2) is typically 8px * 3, 0, 8px * 2
  },
  googleButton: {
    marginBottom: '16px', // theme.spacing(2) is typically 8px * 2
  },
}));