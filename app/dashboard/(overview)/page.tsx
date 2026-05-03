//import ui modules for pages
import styles from '@/app/ui/home.module.css';
import { inter, lusitana } from '@/app/ui/fonts';

import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
//default function export gabisa digabung
import CardWrapper from '@/app/ui/dashboard/cards';
import Card from '@/app/ui/dashboard/cards';

//data
// import { fetchCardData } from '@/app/lib/data'; // remove fetchLatestInvoices, fetchRevenue

//interface
import { Suspense } from 'react'; //cm bisa gabung untuk named exports
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/skeletons';

//export itu titik masuk code, jadi import cm ngambil data"
export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();

  //cara jelek
  // const numberOfInvoices = await fetchCardData();
  // const numberOfCustomers = await fetchCardData();
  // const totalPaidInvoices = await fetchCardData();
  // const totalPendingInvoices = await fetchCardData();

  //all const juga udah destructure data, lebih efficient juga
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}> Dashboard </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers"/> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}