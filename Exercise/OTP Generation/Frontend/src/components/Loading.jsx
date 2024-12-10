import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = ({loading}) => {
  return (
    <div style={loadingStyle}>
        <ClipLoader color='#36d7b7' loading={loading} size={50} />
    </div>
  )
}

const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

export default Loading