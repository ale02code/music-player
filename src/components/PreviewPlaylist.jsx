function PreviewPlaylist({ name, author }) {
  return (
    <div className="w-full bg-neutral-800 py-1 px-3 rounded-lg text-white hover:cursor-pointer">
      <span className="block text-base font-semibold">{name}</span>
      <span className="block text-sm">{author}</span>
    </div>
  );
}

export default PreviewPlaylist;
