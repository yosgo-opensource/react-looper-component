# React Looper Component

Flexible to mapping your data for component 👷👷👷👷👷

## Installation

```
> yarn add react-looper-component
```

## Why use

Because we always loop our data in component like this:

```javascript
<div>
  {
    items.map(item => <h1>{item.name}</h1>)  
  }
</div>
```

but it does not beautiful right? so we use react-loop-component to decorate it as the component.

## How to use

< Array >

```javascript
import Looper from 'react-looper-component'

const items = [
  {name: 'Foo', age: 18},
  {name: 'Bar', age: 20}
]

<Looper
  items={items}
  render={({name, age}) => (
    <div>
      <h1>{name} - {age}</h1>
    </div>
  )}
/>
```

< Object >

```javascript
import Looper from 'react-looper-component'

const items = {
  user1: { name: 'Foo', age: 18 },
  user2: { name: 'Bar', age: 20 }
}

<Looper
  items={items}
  render={({name, age}) => (
    <div>
      <h1>{name} - {age}</h1>
    </div>
  )}
/>
```

## render props

The react-looper-component does not care about render component, just loop the data and return to render props, it can help us to control child component flexible.

## License

MIT
