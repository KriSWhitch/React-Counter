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
  counters_container: {
    ...displayFlex,
    flexDirection: 'column',
    margin: 'auto',
  },
  counter_parent: {
    ...displayFlex,
    flexDirection: 'column',
    margin: 'auto',
    width: '600px',
  },
  counters_list: {
    ...displayFlex,
    flexDirection: 'column',
    margin: 'auto',
    padding: '0',
    listStyle: 'none',
  },
  counters_list_element: {
    marginBottom: '10px',
  },
};

export default styles;
