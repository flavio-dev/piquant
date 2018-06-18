import React, { Component } from 'react'

import Button from 'components/Button'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }

  render() {
    const menuClass = this.state.menuOpen
      ? 'HeaderMenu HeaderMenuOpen'
      : 'HeaderMenu'

    return (
      <div className='Header'>
        <div className='HeaderInner'>
          <div className='HeaderMenuButton'
            onClick={this.toggleMenu}
          >
            <Button text={'Menu'} clicked={this.state.menuOpen} />
          </div>
          <div className={menuClass}>
            <div onClick={this.closeMenu}>
              <Button text={'About'} url={'#about'} />
            </div>
            <div
              className='HeaderButton'
              onClick={this.closeMenu}
            >
              <Button text={'Future Events'} url={'#futureevent'} />
            </div>
            <div
              className='HeaderButton'
              onClick={this.closeMenu}
            >
              <Button text={'Contact'} url={'#contact'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
