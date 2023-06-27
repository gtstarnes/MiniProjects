import image from './Images/1.jpg'
import image2 from './Images/2.jpg'



function App() {

  return (
    <div className="flex h-screen">
      <section className="m-auto justify-center w-[300px] bg-white rounded-md flex flex-col gap-2 shadow-lg overflow-hidden hover:scale-[120%] hover:cursor-pointer active:scale-100">
        <div>
          <img src={image} />
        </div>
        <div className="flex flex-col gap-2 p-6 ">
          <p className="bg-orange-500 rounded-xl text-white w-[110px] text-center text-sm">TECHNOLOGY</p>
          <h3 className="font-bold">How I Built Web Development Challenges Website</h3>
          <p>If you're looking for inspiration to build your own side project...</p>
        </div>
        <figure className="p-6 flex gap-2">
          <img src={image2} className="rounded-full object-cover max-h-12 w-12" />
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
