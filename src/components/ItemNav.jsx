function ItemNav({ img, text }) {
  return (
    <div className="text-white text-xl flex items-center pl-2 font-medium gap-3">
      <img className="h-10" src={img} alt="Item Nav" />
      <p>{text}</p>
    </div>
  );
}

export default ItemNav;
