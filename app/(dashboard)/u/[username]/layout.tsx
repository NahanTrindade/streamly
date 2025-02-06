import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Container from "./_components/container";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const DashboardLayout = async ({ children, params }: CreatorLayoutProps) => {
  const { username } = await params;
  const self = await getSelfByUsername(username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default DashboardLayout;
