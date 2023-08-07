import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hello from dashboard",
  authors: [{ name: "Moc Development Team", url: "https://moc.gov.kh" }],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
