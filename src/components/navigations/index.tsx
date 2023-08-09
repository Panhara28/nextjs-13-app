"use client";
import { navData } from "@/data/navs";
import style from "./navigations.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul className={style.navWrapper}>
          {navData.map((item: any) => {
            const isActive = pathname === item.url;
            return (
              <>
                <li key={Number(item.id)}>
                  <Link
                    className={`${isActive ? style.active : ""}`}
                    href={item.url}
                  >
                    {item.text}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
