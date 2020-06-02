const submitAction = ({ actionMethods }) => ({
  // params: actions
  onSubmit: values => {
    // alert(JSON.stringify(values, null, 2));
    actionMethods.registerReservation({ payload: { data: values } });
    // reset form
    // actions.resetForm();
  }
});

export default submitAction;
