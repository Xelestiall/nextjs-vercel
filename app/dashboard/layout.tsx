import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    //biar screen ttp flexibel
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* sidebar dibagi jadi 2 didalam screen yang udah di flex column 
      dan di sidenav juga udah diatur widthnya*/}
      <div className="w-full flex-none md:w-64"> <SideNav /> </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}