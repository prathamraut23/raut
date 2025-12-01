
'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  mobile: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export async function handleFormSubmission(
  data: FormData
): Promise<{ success: boolean; error?: string }> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  // In a real application, you would process the data here:
  // - Send an email
  // - Save to a database
  // - Call a third-party API
  console.log('Form submission received:');
  console.log(parsedData.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for this demo
  return { success: true };
}
