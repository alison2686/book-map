'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
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

    if (res.ok) setIsSubmitted(true);
  };

  // Small helper for consistent input classes
  const baseInput =
    'block w-full rounded-lg border-2 px-3 py-2 text-sm md:text-base ' +
    'focus:outline-none focus:ring-2 focus:ring-gray-500/30 focus:border-gray-700 ' +
    'placeholder:text-gray-400';

  const err = 'border-red-500 focus:ring-red-500/20 focus:border-red-600';

  return (
    <section className='px-4 py-10 sm:py-12'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto w-full max-w-xl bg-white border-2 border-black rounded-xl shadow-md p-6 sm:p-7 md:p-8'
      >
        <div className='text-center'>
          <h1 className='text-2xl sm:text-3xl font-bold tracking-wide'>
            Sign Up to Receive Updates
          </h1>
          <p className='mt-1 text-sm sm:text-base font-semibold tracking-wide'>
            or Send Us a Message
          </p>
        </div>

        {isSubmitted && (
          <p
            role='status'
            aria-live='polite'
            className='mt-4 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm px-3 py-2 text-center'
          >
            Your message has been sent!
          </p>
        )}

        {/* Fields */}
        <div className='mt-6 space-y-4'>
          {/* Name + Email in two columns on md+ */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='mb-1 block text-xs md:text-sm uppercase tracking-widest'>
                Name
              </label>
              <input
                type='text'
                autoComplete='name'
                {...register('name')}
                className={`${baseInput} border-gray-300 ${errors.name ? err : ''}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className='mt-1 text-red-600 text-xs'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className='mb-1 block text-xs md:text-sm uppercase tracking-widest'>
                Email
              </label>
              <input
                type='email'
                autoComplete='email'
                {...register('email')}
                className={`${baseInput} border-gray-300 ${errors.email ? err : ''}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className='mt-1 text-red-600 text-xs'>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className='mb-1 block text-xs md:text-sm uppercase tracking-widest'>
              Subject
            </label>
            <input
              type='text'
              {...register('subject')}
              className={`${baseInput} border-gray-300 ${errors.subject ? err : ''}`}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className='mt-1 text-red-600 text-xs'>
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className='mb-1 block text-xs md:text-sm uppercase tracking-widest'>
              Message
            </label>
            <textarea
              rows={4}
              {...register('message')}
              className={`${baseInput} border-gray-300 ${errors.message ? err : ''} resize-y`}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className='mt-1 text-red-600 text-xs'>
                {errors.message.message}
              </p>
            )}
          </div>

          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              {...register('subscribe')}
              className='w-4 h-4 accent-black border-2 border-gray-400 rounded'
            />
            <label className='text-sm tracking-wide'>
              I’d like to receive email updates about the book
            </label>
          </div>

          {/* ReCAPTCHA: slightly scaled down on small screens */}
          <div>
            <div className='origin-left scale-[0.92] sm:scale-100'>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => setValue('token', token || '')}
              />
            </div>
            {errors.token && (
              <p className='mt-1 text-red-600 text-xs'>
                {errors.token.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide py-2.5 disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
}
