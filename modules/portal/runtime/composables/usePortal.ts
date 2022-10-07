export default function () {
  const portalNames = Object.freeze({
    header: 'header-portal'
  })

  const portals = useState<Record<string, () => void>>('portalsList', () => ({}))

  function render (id: string) {
    if (document.getElementById(id) && portals.value[id]) {
      portals.value[id]()
    } else {
      setTimeout(() => {
        render(id)
      }, 100)
    }
  }

  function register (id: string, cb: () => void) {
    if (!portals.value[id]) {
      portals.value[id] = cb
    }

    render(id)
  }

  function remove (id: string) {
    delete portals.value[id]
  }

  return {
    portalNames,
    portals,
    render,
    register,
    remove
  }
}
