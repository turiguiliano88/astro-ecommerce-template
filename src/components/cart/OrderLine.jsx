import Select from "../ui/Select";
import TrashIcon from "../icon/Trash";

export default function OrderLine({ line, quantities }) {
  return (
    <div className="flex justify-center text-neutral-600">
      <div className="w-[80px] md:w-[120px] flex p-xs justify-center">
        <a href={`/product/${line.productVariant.product.slug}`}>
          <img
            className="object-contain w-full"
            src={`${line.featuredAsset.preview}?preset=thumb`}
          />
        </a>
      </div>
      <div className="flex justify-between grow">
        <div className="p-xs">
          <div className="font-medium">{line.productVariant.product.name}</div>
          <div className="text-sm my-xs">{line.productVariant.name}</div>
          <div className="w-max">
            {quantities ? (
              <div className="flex items-center">
                <Select
                  options={quantities.map((item) => {
                    return {
                      name: item,
                      value: item,
                    };
                  })}
                  selected={line.quantity}
                />
                <div className="ml-xs cursor-pointer">
                  <TrashIcon className="w-4 h-4" />
                </div>
              </div>
            ) : (
              "x " + line.quantity
            )}
          </div>
        </div>
        <div className="p-xs">
          <span className="font-semibold">{`€${line.linePrice}`}</span>
        </div>
      </div>
    </div>
  );
}
