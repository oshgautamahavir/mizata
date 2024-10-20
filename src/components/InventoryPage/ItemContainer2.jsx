const ItemContainer = ({}) => {
  return (
    <>
        <div className="grid grid-cols-1 py-4">
            <div className="grid grid-cols-6 px-3 pb-4 border border-transparent border-b-gray-400">
            <p className="font-bold">ITEM NAME</p>
            <p className="font-bold">DESCRIPTION</p>
            <p className="font-bold">QUANTITY</p>
            <p className="font-bold">PRICE</p>
            <p className="font-bold">STATUS</p>
            </div>
        </div>
    </>
  );
};

export default ItemContainer;
