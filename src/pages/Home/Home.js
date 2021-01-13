import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles.scoped.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fetchProfile, fetchAddProfile, fetchDeleteProfile, fetchUpdateProfile } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormProfile from '../../components/forms/ProfileForm/ProfileForm';

const Home = () => {
  const dispatch = useDispatch();
  const { dataProfile, isLoadingProfile, isLoadingDelete, message } = useSelector((s) => s.home);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [profile, setProfile] = useState({});

  const handleOpen = () => {
    setType('add');
    setOpen(true);
  };

  const handleClose = () => {
    setType('');
    setOpen(false);
  };

  const handleOpenDelete = (id) => {
    setId(id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenEdit = (profile) => {
    setId(profile.profileId);
    setProfile(profile);
    setType('edit');
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setType('');
    setOpenEdit(false);
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  useEffect(() => {
    if (message === 'SUCCESSADD' || message === 'SUCCESSDELETE' || message === 'SUCCESSUPDATE') {
      setOpen(false);
      setOpenDelete(false);
      dispatch(fetchProfile());
    }
  }, [message]);

  const handleSubmit = (values) => {
    if (type === 'edit') {
      dispatch(fetchUpdateProfile(id, values));
    } else {
      dispatch(fetchAddProfile(values));
    }
  };

  const handleDelete = () => {
    dispatch(fetchDeleteProfile(id));
  };

  const handleUpdate = () => {
    setOpenEdit(false);
    setType('edit');
    setOpen(true);
  };

  return (
    <>
      <AppNavBar handleOpen={handleOpen} />
      <div className={styles.main}>
        <Grid container direction="column" justify="center" alignItems="center">
          {isLoadingProfile || isLoadingDelete ? (
            <div className={styles.loader}>
              <CircularProgress />
            </div>
          ) : dataProfile.length > 0 ? (
            dataProfile.map((item, i) => (
              <CardProfile
                key={i + 'profile'}
                data={item}
                openDelete={handleOpenDelete}
                openEdit={handleOpenEdit}
              />
            ))
          ) : (
            <div className={styles.loader}>
              <h3>No Profile</h3>
            </div>
          )}
        </Grid>
      </div>
      <AddDialog
        open={open}
        onClose={handleClose}
        handleSubmit={handleSubmit}
        type={type}
        data={profile}
      />
      <DeleteDialog open={openDelete} onClose={handleCloseDelete} handleDelete={handleDelete} />
      <EditDialog open={openEdit} onClose={handleCloseEdit} handleUpdate={handleUpdate} />
    </>
  );
};

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 400,
    margin: '20px 0px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardProfile = ({ data, openDelete, openEdit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Profile
        </Typography>
        <Typography variant="h5" component="h2">
          {data.namaLengkap}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${data.kelas} - ${data.noAbsen}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            openEdit(data);
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            openDelete(data.profileId);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppNavBar = ({ handleOpen }) => {
  const classes = useStyles2();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              handleOpen();
            }}
          >
            Add Profile
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const AddDialog = ({ open, onClose, handleSubmit, type, data }) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {type === 'add' ? 'Add Profile' : 'Edit Profile'}
        </DialogTitle>
        <DialogContent>
          <FormProfile
            onClose={onClose}
            onSubmit={handleSubmit}
            classes={styles}
            type={type}
            data={data}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

const DeleteDialog = ({ open, onClose, handleDelete }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete Profile?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this profile ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const EditDialog = ({ open, onClose, handleUpdate }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Edit Profile?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to edit this profile ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            No
          </Button>
          <Button onClick={handleUpdate} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
