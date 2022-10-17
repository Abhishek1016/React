import React ,{Suspense,lazy} from 'react'


const Image11=lazy(()=>import('./Image1'))
const Image22=lazy(()=>import('./Image2'))
function App() {
  return (
    <div>
        <Suspense fallback={<div>loading..</div>}>
            <Image11/>
        </Suspense>
        <Suspense fallback={<div>loading..</div>}>
            <Image22/>
        </Suspense>

    </div>
  );
}

export default App;
