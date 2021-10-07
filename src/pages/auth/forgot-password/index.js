import React from 'react'
import { Helmet } from 'react-helmet'
import ForgotPassword from '@tf/components/Auth/ForgotPassword'

const SystemForgotPassword = () => {
  return (
    <div>
      <Helmet title="Forgot Password" />
      <ForgotPassword />
    </div>
  )
}

export default SystemForgotPassword
