import Projects from './Container/Projects'
import Technology from './Container/Technology'
import Welcome from './Container/Welcome'

import './styles/Page.css'

function Page() {


  return (
    <div className='container'>
        <Welcome/>
        <Technology/>
        <Projects/>
    </div>
  )
}

export default Page