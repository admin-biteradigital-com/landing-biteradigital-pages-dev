export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-grid"
      aria-hidden="true"
    >
      {/* Radial fade superior */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,200,240,.06), transparent 60%)",
        }}
      />
    </div>
  );
}
