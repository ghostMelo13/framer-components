import DisperseText from "@/components/DisperseText";


export default function SpectralTestimonial() {

    return (
        <div className="relative w-full h-screen bg-black">
            <DisperseText text="SOVE PAVE" color={0x00ffff} />

            {/* Your Tailwind testimonial content here */}
            <div className="absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h2 className="text-2xl font-bold">NAME NAME</h2>
                <p>Speaker, Your Vreat</p>
            </div>
        </div>
    )
}