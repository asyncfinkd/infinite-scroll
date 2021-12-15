import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

export const ValidateSSL = ({ children }) => {
  const [val, setVal] = useState(null)

  useEffect(() => {
    if (window.location.protocol != 'http:') {
      toast.warning('This website work only http protocol!')
    } else {
      setVal(children)
    }
  })

  return val
}

ValidateSSL.propTypes = {
  children: PropTypes.node,
}
