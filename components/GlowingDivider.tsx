const GlowingDivider = () => (
  <div className="relative h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
    <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 blur-lg"></div>
  </div>
);

export default GlowingDivider;
