function ItemNav({ img, text, menu }) {
  return menu ? (
    <div className="text-white text-xl flex items-center font-medium gap-3 mb-2 hover:cursor-pointer bg-neutral-800 p-2 rounded-lg">
      <img className="h-9" src={img} alt="Item Nav" />
      <p className="text-lg">{text}</p>
    </div>
  ) : (
    <div className="h-full w-full text-white p-2 flex flex-col items-center justify-center font-medium mb-2 hover:cursor-pointer bg-neutral-800 rounded-lg">
      <img className="h-9" src={img} alt="Item Nav" />
      <p className="text-[10px]">{text}</p>
    </div>
  );
}

export default ItemNav;
