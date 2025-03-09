import { Nav } from './components/nav';
import { Main } from './components/main';
import { Aside } from './components/aside';

export default function App() {
  return(
    <div>
      <Nav />
        <div className='app-main'>
          <Main /> 
          <Aside />
        </div>  
    </div>
  )
}