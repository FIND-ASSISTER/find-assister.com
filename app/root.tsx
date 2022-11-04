import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import SideBar from "./components/sidebar";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Find Assister",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{rel: "stylesheet", href: styles}];
}

export default function App() {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <Meta />
        <Links />
      </head>
      <body className="flex bg-white dark:bg-gray-800">
        <SideBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
