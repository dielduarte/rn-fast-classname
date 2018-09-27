const getClass = require('./index');

const styles = {
  container: {
    marginTop: 10
  },
  text: {
    color: '#000'
  },
  flex: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'red'
  }
};

describe('getClass', () => {
  it('should return an object of keys that have true as a value in the second param', () => {
    const stylesExpected = [{ marginTop: 10 }, { flexDirection: 'row' }];

    const conditionalStyles = { container: true, flex: true, button: false };

    expect(getClass(styles, conditionalStyles)).toEqual(stylesExpected);
  });

  it('should return an empty array if have no keys true', () => {
    const conditionalStyles = { container: false, flex: false, button: false };

    expect(getClass(styles, conditionalStyles)).toEqual([]);
  });
});
