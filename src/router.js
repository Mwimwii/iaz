import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import Layout from 'layouts'

const routes = [
  // TF:REPLACE-START:ROUTER-CONFIG
  {
    path: '/dashboard',
    Component: lazy(() => import('pages/dashboard/main')),
    exact: true,
  },
  {
    path: '/dashboard/sales',
    Component: lazy(() => import('pages/charts/chartistjs')),
    exact: true,
  },
  {
    path: '/profile',
    Component: lazy(() => import('pages/profile')),
    exact: true,
  },
  {
    path: '/policy-documents',
    Component: lazy(() => import('pages/policy-documents')),
    exact: true,
  },
  {
    path: '/insurance/',
    Component: lazy(() => import('pages/insurance/')),
    exact: true,
  },
  {
    path: '/insurance/claims',
    Component: lazy(() => import('pages/insurance/claims')),
    exact: true,
  },
  {
    path: '/insurance/sales ',
    Component: lazy(() => import('pages/insurance/sales')),
    exact: true,
  },
  {
    path: '/insurance/list',
    Component: lazy(() => import('pages/insurance/list')),
    exact: true,
  },

  // TF:REPLACE-END:ROUTER-CONFIG
  {
    path: '/auth/login',
    Component: lazy(() => import('pages/auth/login')),
    exact: true,
  },
  {
    path: '/auth/forgot-password',
    Component: lazy(() => import('pages/auth/forgot-password')),
    exact: true,
  },
  {
    path: '/auth/register',
    Component: lazy(() => import('pages/auth/register')),
    exact: true,
  },
  {
    path: '/auth/lockscreen',
    Component: lazy(() => import('pages/auth/lockscreen')),
    exact: true,
  },
  {
    path: '/auth/404',
    Component: lazy(() => import('pages/auth/404')),
    exact: true,
  },
  {
    path: '/auth/500',
    Component: lazy(() => import('pages/auth/500')),
    exact: true,
  },
]

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={state => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    {/* TF:REPLACE-NEXT-LINE:ROUTER-REDIRECT */}
                    <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <div className={routerAnimation}>
                              <Suspense fallback={null}>
                                <Component />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}
                    <Redirect to="/auth/404" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
