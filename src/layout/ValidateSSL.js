import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ValidateSSL = ({ children }) => {
  const [val, setVal] = useState(null)

  useEffect(() => {
    if (window.location.protocol != 'http:') {
      setVal(null)
    } else {
      setVal(children)
    }
  })

  return val
}

ValidateSSL.propTypes = {
  children: PropTypes.any,
}
