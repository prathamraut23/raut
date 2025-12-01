'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleFormSubmission } from './actions';
import { useState, useTransition } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'नाव किमान २ अक्षरी असावे.' }),
  mobile: z.string().regex(/^[0-9]{10}$/, { message: 'कृपया वैध १०-अंकी मोबाईल नंबर प्रविष्ट करा.' }),
  email: z.string().email({ message: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा.' }),
  message: z.string().min(10, { message: 'संदेश किमान १० अक्षरी असावा.' }).max(500, { message: 'संदेश ५०० अक्षरांपेक्षा जास्त असू शकत नाही.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: FormData) {
    startTransition(async () => {
      const result = await handleFormSubmission(values);

      if (result.success) {
        toast({
          title: 'संदेश पाठवला!',
          description: 'संपर्क साधल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क साधू.',
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'काहीतरी चूक झाली.',
          description: result.error || 'तुमचा संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-2xl font-headline text-primary">आम्हाला संदेश पाठवा</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>पूर्ण नाव</FormLabel>
              <FormControl>
                <Input placeholder="तुमचे नाव" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>मोबाइल नंबर</FormLabel>
                <FormControl>
                  <Input placeholder="९८७६५४३२१०" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ईमेल पत्ता</FormLabel>
                <FormControl>
                  <Input placeholder="tumcha.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>तुमचा संदेश</FormLabel>
              <FormControl>
                <Textarea placeholder="तुम्ही आम्हाला कशी मदत करू शकता ते सांगा..." className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              पाठवत आहे...
            </>
          ) : (
            'संदेश पाठवा'
          )}
        </Button>
      </form>
    </Form>
  );
}
