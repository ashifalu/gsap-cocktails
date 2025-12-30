import {ScrollTrigger, SplitText} from 'gsap/all';
import { gsap } from 'gsap'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className='flex-center h-[100vh]'>
    <h1 className='font-bold text-orange-500 text-6xl'>App</h1>
    </div>
  )
}

export default App