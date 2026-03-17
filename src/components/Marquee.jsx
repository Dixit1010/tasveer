const Marquee = ({ items, speed = 20, reverse = false }) => {
  const tripled = [...items, ...items, ...items]

  return (
    <div className="border-y border-[rgba(240,237,232,0.1)] py-4">
      <div
        className={`flex gap-20 whitespace-nowrap ${
          reverse ? 'marquee-reverse' : 'marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {tripled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(240,237,232,0.2)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee

