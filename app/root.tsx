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
    <html lang="pt-BR" className="bg-white dark:bg-gray-800">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" />
      </head>
      <body className="flex">
        <SideBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
