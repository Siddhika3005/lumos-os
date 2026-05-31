// Server Component: simple redirect to the dashboard, no client logic.
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard");
}
