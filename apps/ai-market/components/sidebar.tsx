"use client";

import {
  Code2,
  Globe,
  Home,
  ImagePlus,
  Link,
  MessagesSquare,
  PlusSquare,
  Settings,
  ShoppingCart,
  Video,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "../lib/utils";
export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/home",
      pro: false,
    },
    {
      icon: MessagesSquare,
      href: "/conversation",
      pro: false,
    },
    {
      icon: ImagePlus,
      href: "/image",
      pro: false,
    },
    {
      icon: Video,
      href: "/video",
      pro: false,
    },
    {
      icon: Code2,
      href: "/code",
      pro: false,
    },
    {
      icon: Globe,
      href: "/",
      label: "Coming Soon",
      pro: false,
    },
    {
      icon: PlusSquare,
      href: "/",
      label: "Coming Soon",
      pro: true,
    },
    {
      icon: Link,
      href: "/",
      label: "Coming Soon",
      pro: false,
    },
    {
      icon: ShoppingCart,
      href: "/",
      label: "Coming Soon",
      pro: false,
    },
    {
      icon: Settings,
      href: "/",
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: Check if PRO

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs grout flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col w-24 gap-y-2 items-center flex-1">
                <route.icon className="h-7 w-6" />
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 justify-center shadow-md flex w-24 text-white pl-1 pr-1 rounded-full">
                  {route.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
