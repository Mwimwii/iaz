import React from 'react'
import { Helmet } from 'react-helmet'
import Register from '@tf/components/Auth/Register'

const SystemRegister = () => {
  return (
    <div>
      <Helmet title="Register" />
      <Register />
    </div>
  )
}

export default SystemRegister
