import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import DetailSection from "./DetailSection";
import { Form } from "@/components/ui/form";
import { Separator } from "@radix-ui/react-separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantName: z.string().min(1, "restaurant name is required"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
  deliveryPrice: z.number().min(0, "delivery price must be positive"),
  estimatedDeliveryTime: z.number().min(1, "estimated delivery time must be positive"),
  cuisines: z.array(z.string()).min(1, "please select at least one cuisine"),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.number().min(0.01, "price must be greater than 0"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    // TODO: Convert formDataJson to FormData and call onSave
    const formData = new FormData();
    
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
    formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());
    formData.append("cuisines", JSON.stringify(formDataJson.cuisines));
    formData.append("menuItems", JSON.stringify(formDataJson.menuItems));
    formData.append("imageFile", formDataJson.imageFile);
    
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
