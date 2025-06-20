'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
  token: z.string().min(1, 'Captcha required'),
  subscribe: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-lg bg-white shadow-md rounded-lg p-8 border-2 border-black'
      >
        <h1 className='text-3xl font-bold text-center tracking-wide'>
          Sign Up to Receive Updates
        </h1>
        <h2 className='text-xl font-bold mb-6 text-center tracking-wide'>
          or Send Us a Message
        </h2>
        {isSubmitted && (
          <p className='text-green-500 text-center mb-4'>
            Your message has been sent!
          </p>
        )}

        {['name', 'email', 'subject', 'message'].map((field) => (
          <div key={field} className='mb-4'>
            <label className='block text-m  mb-2 tracking-widest'>
              {field}
            </label>
            {field === 'message' ? (
              <textarea
                {...register('message')}
                className='w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500'
                rows={4}
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                {...register(field as keyof FormData)}
                className='w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500'
              />
            )}
            {errors[field as keyof FormData] && (
              <p className='text-red-500 text-sm'>
                {errors[field as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div className='mb-4 flex items-center gap-2'>
          <input
            type='checkbox'
            {...register('subscribe')}
            className='w-4 h-4'
          />
          <label className='text-sm tracking-wide'>
            I’d like to receive email updates about the book
          </label>
        </div>

        <div className='mb-6'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setValue('token', token || '')}
          />
          {errors.token && (
            <p className='text-red-500 text-sm'>{errors.token.message}</p>
          )}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
