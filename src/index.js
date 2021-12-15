import React, { Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RoutesData } from 'routes/route-generator'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavigationScroll from 'layout/NavigationScroll'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ValidateSSL } from 'layout/ValidateSSL'

const LazyLoad = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    NProgress.start()

    return () => {
      NProgress.done()
    }
  })

  return ''
}

const Pages = () => {
  return (
    <Routes>
      {RoutesData.map((el) => {
        return <Route key={el.path} path={el.path} element={<el.component />} />
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationScroll>
        <ToastContainer />
        <ValidateSSL>
          <Suspense fallback={<LazyLoad />}>
            <Pages />
          </Suspense>
        </ValidateSSL>
      </NavigationScroll>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
