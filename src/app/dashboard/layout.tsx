import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hello from dashboard",
  authors: [{ name: "Moc Development Team", url: "https://moc.gov.kh" }],
};

export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <section>
      {props.children} {props.analytics} {props.team}
    </section>
  );
}
