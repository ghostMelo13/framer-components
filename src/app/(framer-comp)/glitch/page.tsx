import "./glitch.css";


export default function page() {
  return (
    <main className={`h-screen overflow-hidden w-full flex flex-col justify-center bg-black text-white`}>
        <div className="lines w-full">
          <div className="w-full h-px bg-slate-800 -mt-4"></div>
          <div className="h-[98%] w-[0.5px] absolute left-[28%] top-0 bg-slate-800"></div>
        </div>
        <div className="glitch relative text-9xl" data-text="GLITCH">GLITCH</div>
    </main>
  )
}

/**
 * 
 * For reference: https://css-tricks.com/glitch-effect-text-images-svg/
 * 
 * 
 */