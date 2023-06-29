import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts, postProduct, putProduct } from "../helpers/crud";
import { addProducts } from "../features/crudSlice";
import Form from "../components/Form";
import Loading from "../components/Loading";

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const categories = useSelector((state) => state.data.categories);
  const isLoading = useSelector((state) => state.data.isLoading);

  const [isEditing, setIsEditing] = useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    unit_price: "",
    quantity: "",
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleFormSubmit() {
    // Esto se debe poner en el post y agregar un edited_at: en put
    const dataToSend = {
      ...formData,
      created_at: new Date().toISOString(),
    };

    try {
      // Edit mode
      if (isEditing) {
        await putProduct({ id, ...dataToSend });
        const updatedData = await getProducts();
        dispatch(addProducts(updatedData));
      } else {
        // Create mode
        await postProduct(dataToSend);
        const updatedData = await getProducts();
        dispatch(addProducts(updatedData));
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancel() {
    navigate("/");
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          setIsEditing(true);
          const productToEdit = await getProductById(id);
          setFormData(productToEdit);
          setIsLoadingProduct(false);
        } else {
          setFormData((prevData) => ({
            ...prevData,
            category: categories[0],
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id, categories]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container flex flex-col gap-8 mx-auto xl:max-w-6xl grow">
      <h1 className="text-2xl font-semibold text-left">{isEditing ? "Edit product" : "Add new product"}</h1>
      <Form
        data={formData}
        handleFormSubmit={handleFormSubmit}
        handleFormChange={handleFormChange}
        handleCancel={handleCancel}
        categories={categories}
        isEditing={isEditing}
        isLoadingProduct={isLoadingProduct}
      />
    </div>
  );
}
