import '../src'

const radixEulaElement = document.querySelector('radix-eula')!

radixEulaElement.show = true

const onClose = (event: Event) => {
  const { eulaAccepted } = (event as CustomEvent<{ eulaAccepted: boolean }>)
    .detail

  console.log({ eulaAccepted })
}

radixEulaElement.addEventListener('onClose', onClose)
