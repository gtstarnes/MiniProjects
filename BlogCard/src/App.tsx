import image from './Images/1.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className="flex h-screen">
      <section className="m-auto justify-center w-[300px] bg-white rounded-md flex flex-col gap-4 shadow-lg overflow-hidden">
        <div>
          <img src={image} />
        </div>
        <div className="flex flex-col gap-2 p-6 ">
          <p className="bg-orange-500 rounded-xl text-white w-[110px] text-center text-sm">TECHNOLOGY</p>
          <h3 className="font-bold">How I Built Web Development Challenges Website</h3>
          <p>If you're looking for inspiration to build your own side project...</p>
        </div>
        <figure>
          <img />
          <figcaption>
            <h4 className="font-bold">Corey Lubin</h4>
            <p className="text-slate-500">4 h ago</p>
          </figcaption>
        </figure>
      </section>
    </div>

  )
}

export default App
