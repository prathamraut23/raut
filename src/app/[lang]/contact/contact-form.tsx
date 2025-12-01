
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
import { useDictionary } from '@/context/DictionaryProvider';

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const dictionary = useDictionary();
  const t = dictionary.contact;

  const formSchema = z.object({
    name: z.string().min(2, { message: t.validationName }),
    mobile: z.string().regex(/^[0-9]{10}$/, { message: t.validationMobile }),
    email: z.string().email({ message: t.validationEmail }),
    message: z.string().min(10, { message: t.validationMessageMin }).max(500, { message: t.validationMessageMax }),
  });

  type FormData = z.infer<typeof formSchema>;

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
          title: t.formSuccessTitle,
          description: t.formSuccessDesc,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: t.formErrorTitle,
          description: result.error || t.formErrorDesc,
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-2xl font-headline text-primary">{t.formTitle}</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.fullNameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.fullNamePlaceholder} {...field} />
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
                <FormLabel>{t.mobileLabel}</FormLabel>
                <FormControl>
                  <Input placeholder={t.mobilePlaceholder} {...field} />
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
                <FormLabel>{t.emailLabel}</FormLabel>
                <FormControl>
                  <Input placeholder={t.emailPlaceholder} {...field} />
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
              <FormLabel>{t.messageLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={t.messagePlaceholder} className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t.submittingButton}
            </>
          ) : (
            t.submitButton
          )}
        </Button>
      </form>
    </Form>
  );
}
