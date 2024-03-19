import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-full max-h-full min-w-full flex-col items-center justify-center">
      <h1 className="text-[4rem] font-medium">Welcome to the Dashboard!</h1>
      <div className='flex flex-row justify-around items-baseline w-full'>
        <Link
          href={'./dashboard/customers'}
          className='text-[rem] text-blue-400 hover:underline'
        >
          Go to Customers Page
        </Link>
        <Link
          href={'./dashboard/invoices'}
          className='text-[rem] text-blue-400 hover:underline'
        >
          Go to Invoices Page
        </Link>
      </div>
    </main>
  )
}