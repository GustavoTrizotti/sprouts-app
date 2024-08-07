import { MainHeader } from "@/src/components/layout/main-header";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactElement }>) {
  return (
    <div className="flex flex-col w-full">
      <MainHeader />
      <div className="flex border border-white/5 mx-4" />
      {children}
    </div>
  );
}
