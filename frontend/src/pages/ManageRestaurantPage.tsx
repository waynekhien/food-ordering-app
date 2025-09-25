import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const handleSave = (restaurantFormData: FormData) => {
    // TODO: Implement API call to save restaurant data
  };

  return (
    <ManageRestaurantForm onSave={handleSave} isLoading={false} />
  );
};

export default ManageRestaurantPage;