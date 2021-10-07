import { useEffect } from 'react'
import { connect } from 'react-redux'

// antd core & themes styles
import 'antd/lib/style/index.less'
import './@tf/css/vendors/antd/themes/default.less'
import './@tf/css/vendors/antd/themes/dark.less'

// third-party plugins styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'c3/c3.min.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// tf vendors styles
import './@tf/css/vendors/antd/style.scss'
import './@tf/css/vendors/bootstrap/style.scss'
import './@tf/css/vendors/perfect-scrollbar/style.scss'
import './@tf/css/vendors/nprogress/style.scss'
import './@tf/css/vendors/chartist/style.scss'
import './@tf/css/vendors/chartist-tooltip-plugin/style.scss'
import './@tf/css/vendors/jvectormap/style.scss'
import './@tf/css/vendors/react-sortable-tree/style.scss'
import './@tf/css/vendors/react-draft-wysiwyg/style.scss'

// tf styles
import './@tf/css/core.scss'
import './@tf/css/measurements.scss'
import './@tf/css/colors.scss'
import './@tf/css/utils.scss'
import './@tf/css/layout.scss'
import './@tf/css/router.scss'

// tf extra styles
import './@tf/css/extra/clean.scss' // clean styles
import './@tf/css/extra/air.scss' // air styles

const mapStateToProps = ({ settings: { version, theme, primaryColor } }) => ({
  version,
  theme,
  primaryColor,
})

let isLoaded = false

const StylesLoader = ({ dispatch, children, version, theme, primaryColor }) => {
  // listen & set tf-version (pro, air, fluent, ...)
  useEffect(() => {
    document.querySelector('html').setAttribute('data-tf-version', version)
  }, [version])

  // listen & set tf-theme (dark, default, ...)
  useEffect(() => {
    document.querySelector('html').setAttribute('data-tf-theme', theme)
    dispatch({
      type: 'settings/SET_THEME',
      payload: {
        theme,
      },
    })
    if (isLoaded) {
      dispatch({
        type: 'settings/CHANGE_SETTING',
        payload: {
          setting: 'menuColor',
          value: theme === 'dark' ? 'dark' : 'white',
        },
      })
    }
    isLoaded = true
  }, [theme, dispatch])

  // listen & set primaryColor
  useEffect(() => {
    const styleElement = document.querySelector('#primaryColor')
    if (styleElement) {
      styleElement.remove()
    }
    const body = document.querySelector('body')
    const styleEl = document.createElement('style')
    const css = document.createTextNode(`:root { --tf-color-primary: ${primaryColor};}`)
    styleEl.setAttribute('id', 'primaryColor')
    styleEl.appendChild(css)
    body.appendChild(styleEl)
  }, [primaryColor])

  return children
}

export default connect(mapStateToProps)(StylesLoader)
