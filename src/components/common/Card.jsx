export default function Card({ children, className = '', hover = true, ...props }) {
  const hoverClass = hover ? 'hover:shadow-lg' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-soft p-6 transition-shadow duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
