import React from "react";
const isLoggedIn = false;
export default function Layout({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) {
  return isLoggedIn ? dashboard : login;
}
