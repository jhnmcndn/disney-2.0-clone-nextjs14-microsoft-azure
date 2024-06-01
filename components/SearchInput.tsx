"use client"

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});

const SearchInput = () => {
  const router = useRouter();

  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  // Define a submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    router.push(`/search/${values.input}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;