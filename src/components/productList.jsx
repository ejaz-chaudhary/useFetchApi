import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <p className="text-center  text-3xl  italic text-black-500 mt-6">Loading products...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-6 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data &&
        data.slice(0, 9).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "https://via.placeholder.com/300"
              }
              alt={product.title}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">
              {product.title}
            </h3>

            <p className="text-gray-600 text-sm">
              ₹ {product.price}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
