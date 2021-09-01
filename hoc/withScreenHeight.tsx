import React from 'react'

function withScreenHeight(WrappedComponent) {
  return class WithScreenHeight extends React.Component {
    ref = React.createRef()

    componentDidMount() {
      this.heroHeight(this.ref.current)
    }

    setHeightForElements(hero) {
      if (hero) {
        var vh = window.innerHeight
        hero.style.height = `${vh}px`
      }
    }
    heroHeight(comp) {
      if (window.innerWidth <= 1024) {
        this.setHeightForElements(comp)
      }

      var lastWidth = window.innerWidth
      window.addEventListener('resize', () => {
        if (window.innerWidth != lastWidth) {
          this.setHeightForElements(comp)
          lastWidth = window.innerWidth
        }
      }, {passive: true})
    }

    render() {
      return <WrappedComponent ref={this.ref} {...this.props} />
    }
  }
}

export { withScreenHeight }
