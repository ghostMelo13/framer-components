import "./glitch.css";


export default function page() {
  return (
    <main className={`min-h-screen w-full flex justify-center items-center bg-gray1 text-white`}>
        <div className="glitch relative text-7xl
        before:content-[data-text] before:absolute before:top-0 before:left-1 before:w-full before:h-full
        after:content-[data-text] after:absolute after:top-0 after:left-0 after:w-full after:h-full" data-text="GLITCH">GLITCH</div>
    </main>
  )
}

/**
 * 
 * For reference: https://css-tricks.com/glitch-effect-text-images-svg/
 * 
 * 
 */