import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px] relative overflow-hidden rounded-2xl">
      <Spline
        scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />
    </div>
  )
}
