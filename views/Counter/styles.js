const displayFlex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = {
  button: {
    height: 48,
    margin: 10,
    padding: '0 10px',
    borderRadius: 3,
  },
  counter: {
    ...displayFlex,
    flexDirection: 'column',
  },
  counter_display: {
    ...displayFlex,
    width: '500px',
    height: '200px',
    textAlign: 'center',
    border: '1px solid black',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  counter_control_panel: {
    ...displayFlex,
    width: '500px',
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
