import React from 'react'
import PostSharing from './PostSharing'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts'

const IndexPage = () => {

  return (
    <div className='flex flex-col gap-3 ml-[3rem]'>
      <PostSharing />
      {/* New */}
      <Posts />
    </div>
  )
}

export default IndexPage