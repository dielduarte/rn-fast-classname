# rn-fast-classname

a fast helper to use conditional styles using css in js

## hot to use

To install just run `yarn add rn-fast-classname` or `npm install -s rn-fast-classname`.

then:

```js
import getClass from 'rn-fast-className'

const styles = {
  container: {
    backgroundColor: 'red'
  },
  containerFull: {
    flex: 1
  },
};

//...then in the render
render() {
  const containerStyles = getClass(styles, {
    container: true,
    containerFull: this.props.full
  });

  return (
    <Container style={containerStyles}>                  
       {this.props.children}
    </Container>
  )
}
```

## why rn-fast-classname

rn-fast-classname uses [fast-memoize](https://github.com/caiogondim/fast-memoize.js#readme) to memoize the return of the `getClass` function, so if your component need to rerender for any reasons but the styles didn't changed, `getClass` just will get the result from the cache.
