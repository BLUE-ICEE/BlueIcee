'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="glass rounded-[40px] p-16 text-center max-w-4xl mx-6">

        <h1 className="text-8xl font-black mb-6">
          Blue Icee
        </h1>

        <p className="text-2xl text-cyan-50 leading-relaxed">
          Chill, collect, chat, and explore magical icy realms.
        </p>

        <div className="flex gap-6 justify-center mt-10">

          <button className="bg-white text-cyan-700 px-8 py-4 rounded-full font-bold text-xl">
            Enter Realm
          </button>

          <button className="glass px-8 py-4 rounded-full font-bold text-xl">
            Open Arcade
          </button>

        </div>

      </div>

    </section>
  )
}
