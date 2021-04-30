const displayFlex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = {
  button: {
    borderRadius: 3,
    height: 48,
    padding: '0 10px',
    margin: 10,
  },
  counter: {
    ...displayFlex,
    flexDirection: 'column',
  },
  counter_display: {
    textAlign: 'center',
    ...displayFlex,
    border: '1px solid black',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    width: '500px',
    height: '200px',
  },
  counter_control_panel: {
    width: '500px',
    ...displayFlex,
    border: '1px solid black',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  counter_value: {
    fontSize: '30px',
    color: 'black',
  },
};

export default styles;
