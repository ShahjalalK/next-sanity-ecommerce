import Head from 'next/head'
import {NextStudio} from 'next-sanity/studio'
import {NextStudioHead} from 'next-sanity/studio/head'

import config from '../../sanity.config'

const StudioPage = () => {
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
        
      <link rel="shortcut icon" href="/favicon.png" />

      </Head>
      <NextStudio config={config} />
    </>
  )
}

export default StudioPage