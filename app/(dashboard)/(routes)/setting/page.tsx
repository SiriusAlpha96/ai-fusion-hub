import { Settings } from "lucide-react";

import  Heading  from "@/components/heading";


const SettingsPage = () => {
  return(
    <div>
      <Heading 
        title= "Settings "
        description = "Manage account settings. "
        icon={Settings}
        iconColor = "text-gray-700"
        bgColor = "bg-gray-700/100"
        />
        <div className="px-4 lg:px-8 space-y-8">
          <div className="text-muted-foreground text-sm">
            {"You are currently on free plan."}
          </div>
        </div>
    </div>
  )
}

export default SettingsPage;


// "use client";

// import Heading from "@/components/heading";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { useState } from "react";
// import axios from "axios";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Settings } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Loader } from "@/components/ui/loader";

// // Define the schema for the settings form
// const settingsSchema = z.object({
//   username: z.string().nonempty({ message: "Username is required" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   darkMode: z.boolean(),
// });

// const SettingsPage = () => {
//   const router = useRouter();
//   const form = useForm<z.infer<typeof settingsSchema>>({
//     resolver: zodResolver(settingsSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       darkMode: false,
//     },
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit = async (values: z.infer<typeof settingsSchema>) => {
//     setIsLoading(true);
//     try {
//       // Send a request to save the settings
//       await axios.post("/api/settings", values);
//       alert("Settings saved!");
//     } catch (error) {
//       console.error("Error saving settings:", error);
//     } finally {
//       setIsLoading(false);
//       router.refresh();
//     }
//   };

//   return (
//     <div>
//       <Heading
//         title="Settings"
//         description="Manage your account settings and preferences."
//         icon={Settings}
//         iconColor="text-blue-500"
//         bgColor="bg-blue-600/10"
//       />
//       <div className="px-4 lg:px-8">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
//           >
//             <FormField
//               name="username"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-6">
//                   <FormControl className="m-0 p-0">
//                     <Input
//                       className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
//                       disabled={isLoading}
//                       placeholder="Username"
//                       {...field}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-6">
//                   <FormControl className="m-0 p-0">
//                     <Input
//                       className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
//                       disabled={isLoading}
//                       placeholder="Email"
//                       type="email"
//                       {...field}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="darkMode"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-6">
//                   <FormControl className="m-0 p-0">
//                     <label className="flex items-center space-x-3">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox"
//                         disabled={isLoading}
//                         {...field}
//                       />
//                       <span>Dark Mode</span>
//                     </label>
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <Button
//               className="col-span-12 lg:col-span-2 w-full bg-blue-500 hover:bg-blue-700"
//               disabled={isLoading}
//               type="submit"
//             >
//               {isLoading ? <Loader /> : "Save"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
