# vuetify-time-range-picker

Similar to [v-time-picker](https://vuetifyjs.com/en/components/time-pickers/#usage), this components allows you to visually select time ranges.

[**Demo Video**](./public/demo.mp4)

![demo](C:\Development\moirei\packages\npm\vuetify-time-range-picker\public\demo.png)

## Installation

```bash
npm i --save @moirei/vuetify-time-range-picker
# or yarn add @moirei/vuetify-time-range-picker
```

## Usage

```html
<template>
  <v-time-range-picker v-model="time"/>
</template>
```

### Component

```javascript
import { VTimeRangePicker } from '@moirei/vuetify-time-range-picker'

export default {
  components: { VTimeRangePicker },
  data: () => ({
    time: null,
  })
}
```



### Plugin

```javascript
import Vue from 'vue'
import VTimeRangePicker from '@moirei/vuetify-time-range-picker'
Vue.use(VTimeRangePicker)

new Vue({}).$mount('#app')

export default Vue.extend({
  data: () => ({
    time: null,
  })
})
```



## API

### props

| Name              | Required? | Default | Type                | Description                                                                           |
| --------------    | --------- | ------- | ---------           | ------------------------------------------------------------------------------------  |
| `value`           | yes       |         | `string`            | The `v-model` input prop                                                              |
| `allowed-hours`   | no        |         | `function`/`array`  | Restricts which hours can be selected                                                 |
| `allowed-minutes` | no        |         | `function`/`array`  | Restricts which minutes can be selected                                               |
| `allowed-seconds` | no        |         | `function`/`array`  | Restricts which seconds can be selected                                               |
| `ampm-in-title`   | no        | `false` | `boolean`           | Place AM/PM switch in title, not near the clock.                                      |
| `color`           | no        |         | `string`            | Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).                                    |
| `dark`            | no        | `false` | `boolean`           | Applies the dark theme variant to the component.                                      |
| `elevation`       | no        |         | `string`/`number`   | Designates an elevation applied to the component between 0 and 24.                    |
| `format`          | no        | `24hr`  | `string`            | Defines the format of a time displayed in picker. Available options are ampm and 24hr.|
| `header-color`    | no        |         | `string`            | Defines the header color. If not specified it will use the color defined by color prop or the default picker color.|
| `height`          | no        |         | `string`/`number`   | Sets the height for the component.                                                    |
| `landscape`       | no        | `false` | `boolean`           | Orients picker horizontal.                                                            |
| `light`           | no        | `false` | `boolean`           | Applies the light theme variant to the component.                                     |
| `max-height`      | no        |         | `string`/`number`   | Sets the maximum height for the component.                                            |
| `max-width`       | no        |         | `string`/`number`   | Sets the maximum width for the component.                                             |
| `min-height`      | no        |         | `string`/`number`   | Sets the minimum height for the component.                                            |
| `min-width`       | no        |         | `string`/`number`   | Sets the minimum width for the component.                                             |
| `no-title`        | no        | `false` | `boolean`           | Hide the picker title.                                                                |
| `outlined`        | no        | `false` | `boolean`           | Removes elevation (box-shadow) and adds a *thin* border.                              |
| `readonly`        | no        | `false` | `boolean`           | Puts picker in readonly state.                                                        |
| `rounded`         | no        | `false` | `boolean`           | Designates the **border-radius** applied to the component.                            |
| `shaped`          | no        | `false` | `boolean`           | Applies a large border radius on the top left and bottom right of the card.           |
| `scrollable`      | no        | `false` | `boolean`           | Allows changing hour/minute with mouse scroll.                                        |
| `tag`             | no        | `div`   | `string`            | Specify a custom tag used on the root element.                                        |
| `tile`            | no        | `false` | `boolean`           | Removes the component’s **border-radius**.                                            |
| `use-seconds`     | no        | `false` | `boolean`           | Toggles the use of seconds in picker.                                                 |
| `width`           | no        |         | `string`/`number`   | Sets the width for the component.                                                     |


### events

| Name           | Description                                       |
| -------------- | ------------------------------------------------- |
| `input`        | The `v-model` input event                         |

### classes

| Name                      | Description                             |
| ------------------------- | --------------------------------------- |
| `v-time-range`          | The components class                    |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Changelog

Please see [CHANGELOG](./CHANGELOG.md).

## Credits

- [Augustus Okoye](https://github.com/augustusnaz)

## License

[MIT](https://choosealicense.com/licenses/mit/)
