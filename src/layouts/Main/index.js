import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import TopBar from '@tf/components/TopBar'
import Breadcrumbs from '@tf/components/Breadcrumbs'
import Breadcrumbs2 from '@tf/components/Breadcrumbs2'
import MenuClassic from '@tf/components/MenuClassic'
import MenuFlyout from '@tf/components/MenuFlyout'
import MenuSimply from '@tf/components/MenuSimply'
import Footer from '@tf/components/Footer'
import Footer2 from '@tf/components/Footer2'
import Footer3 from '@tf/components/Footer3'
import Footer4 from '@tf/components/Footer4'
import Sidebar from '@tf/components/Sidebar'
import SupportChat from '@tf/components/SupportChat'
import Variants from '@tf/components/Variants'
import Tutorial from '@tf/components/Tutorial'

const mapStateToProps = ({ settings }) => ({
  isMobileMenuOpen: settings.isMobileMenuOpen,
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isSquaredBorders: settings.isSquaredBorders,
  isCardShadow: settings.isCardShadow,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  isTopbarSeparated: settings.isTopbarSeparated,
  isGrayTopbar: settings.isGrayTopbar,
  layoutTopbar: settings.layoutTopbar,
  layoutBreadcrumbs: settings.layoutBreadcrumbs,
  layoutFooter: settings.layoutFooter,
  layoutMenu: settings.layoutMenu,
})

let touchStartPrev = 0
let touchStartLocked = false

const MainLayout = ({
  dispatch,
  children,
  isMobileMenuOpen,
  isContentMaxWidth,
  isAppMaxWidth,
  isGrayBackground,
  isSquaredBorders,
  isCardShadow,
  isBorderless,
  isTopbarFixed,
  isTopbarSeparated,
  isGrayTopbar,
  layoutTopbar,
  layoutBreadcrumbs,
  layoutFooter,
  layoutMenu,
}) => {
  // touch slide mobile menu opener
  useEffect(() => {
    const unify = (e) => {
      return e.changedTouches ? e.changedTouches[0] : e
    }
    document.addEventListener(
      'touchstart',
      (e) => {
        const x = unify(e).clientX
        touchStartPrev = x
        touchStartLocked = x > 70
      },
      { passive: false },
    )
    document.addEventListener(
      'touchmove',
      (e) => {
        const x = unify(e).clientX
        const prev = touchStartPrev
        if (x - prev > 50 && !touchStartLocked) {
          toggleMobileMenu()
          touchStartLocked = true
        }
      },
      { passive: false },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const toggleMobileMenu = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMobileMenuOpen',
        value: !isMobileMenuOpen,
      },
    })
  }

  const TopbarWrapper = ({ children: c }) => (
    <Layout.Header
      className={classNames('tf__layout__header', {
        tf__layout__fixedHeader: isTopbarFixed,
        tf__layout__headerGray: isGrayTopbar,
        tf__layout__separatedHeader: isTopbarSeparated,
      })}
    >
      {c}
    </Layout.Header>
  )

  return (
    <div
      className={classNames({
        tf__layout__grayBackground: isGrayBackground,
      })}
    >
      <Layout
        className={classNames('tf__layout', {
          tf__layout__contentMaxWidth: isContentMaxWidth,
          tf__layout__appMaxWidth: isAppMaxWidth,
          tf__layout__squaredBorders: isSquaredBorders,
          tf__layout__cardsShadow: isCardShadow,
          tf__layout__borderless: isBorderless,
        })}
      >
        <Tutorial />
        <Variants />
        <Sidebar />
        <SupportChat />
        {layoutMenu === 'classic' && <MenuClassic />}
        {layoutMenu === 'flyout' && <MenuFlyout />}
        {layoutMenu === 'simply' && <MenuSimply />}
        <Layout>
          {layoutTopbar === 'v1' && (
            <TopbarWrapper>
              <TopBar />
            </TopbarWrapper>
          )}
          {layoutBreadcrumbs === 'v1' && <Breadcrumbs />}
          {layoutBreadcrumbs === 'v2' && <Breadcrumbs2 />}
          <Layout.Content className="tf__layout__content">{children}</Layout.Content>
          {layoutFooter === 'v1' && (
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          )}
          {layoutFooter === 'v2' && (
            <Layout.Footer>
              <Footer2 />
            </Layout.Footer>
          )}
          {layoutFooter === 'v3' && (
            <Layout.Footer>
              <Footer3 />
            </Layout.Footer>
          )}
          {layoutFooter === 'v4' && (
            <Layout.Footer>
              <Footer4 />
            </Layout.Footer>
          )}
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
