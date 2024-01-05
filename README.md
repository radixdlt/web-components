[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

# Radix web components

- [Radix web components](#radix-web-components)
  - [Install](#install)
  - [EULA](#eula)
    - [Props](#props)
    - [Events](#events)
    - [HTML](#html)
    - [Typescript](#typescript)
- [License](#license)

## Install

```bash
npm install @radixdlt/web-components
```

## EULA

![EULA](docs/eula.png)

### Props

```typescript
  @property({
    type: String,
    reflect: true,
  })
  mode: Mode = Mode.light

  @property({
    type: String,
  })
  cookieName = 'eulaAccepted'

  @property({
    type: String,
  })
  url: string = ''

  @property({
    type: Boolean,
    reflect: true,
  })
  show = false

  @property({
    type: Boolean,
  })
  checked = false
```

### Events

```typescript
@onClose: CustomEvent<{ eulaAccepted: boolean }>
```

### HTML

```html
<radix-eula url="https://radixdlt.com" />
```

### Typescript

```typescript
import '@radixdlt/web-components'

const radixEulaElement = document.querySelector('radix-eula')!

radixEulaElement.show = true

const onClose = (event: Event) => {
  const { eulaAccepted } = (event as CustomEvent<{ eulaAccepted: boolean }>)
    .detail

  console.log({ eulaAccepted })
}

radixEulaElement.addEventListener('onClose', onClose)
```

# License
The Radix Web Components binaries are licensed under the [Radix Software EULA](http://www.radixdlt.com/terms/genericEULA).

The Radix Web Components code is released under [Apache 2.0 license](LICENSE).

      Copyright 2023 Radix Publishing Ltd

      Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

      You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

      See the License for the specific language governing permissions and limitations under the License.
