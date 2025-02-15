import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/custom/Navbar";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

const AuthenticatedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar/>
        <div className="flex flex-1 flex-col gap-4 p-4 my-1">{children}</div>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
};

export default AuthenticatedLayout;
