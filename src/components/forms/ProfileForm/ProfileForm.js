import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

const FormComponent = ({ classes, handleSubmit, onClose, type, data, change }) => {
  const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => {
    return (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    );
  };

  useEffect(() => {
    if (type === 'edit' && data !== {}) {
      change('noAbsen', data.noAbsen);
      change('namaLengkap', data.namaLengkap);
      change('kelas', data.kelas);
    }
  }, [type, data]);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Field name="noAbsen" component={renderTextField} label="No Absen" type="number" />
      <Field name="namaLengkap" component={renderTextField} label="Nama Lengkap" />
      <Field name="kelas" component={renderTextField} label="Kelas" />
      <DialogActions>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default reduxForm({ form: 'profile' })(FormComponent);
