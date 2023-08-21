"use client";

import {
  ArrowRight,
  Code2,
  Globe,
  ImagePlus,
  Link,
  MessagesSquare,
  PlusSquare,
  Settings,
  ShoppingCart,
  Video,
} from "lucide-react";
import { Card } from "../../../../components/ui/card";
import { cn } from "../../../../lib/utils";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

const tools = [
  {
    label: "Text Generation",
    icon: MessagesSquare,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImagePlus,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/image",
  },
  {
    label: "Gif Generation",
    icon: Video,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code2,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/code",
  },
  {
    label: "AI Playground",
    icon: Globe,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/playground",
  },
  {
    label: "Create AI",
    icon: PlusSquare,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/conversation",
  },
  {
    label: "API's Zone",
    icon: Link,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/conversation",
  },
  {
    label: "Source code market",
    icon: ShoppingCart,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/conversation",
  },
  {
    label: "Settings",
    icon: Settings,
    color: "text-white",
    bgcolor: "bg-cyan-300",
    href: "/conversation",
  },
];

const Homepage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 mt-5 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Deep Dreamer (AI-Market) ~ Software as a service
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg text-center">
          Experience the power of AI, open source API`s & purchease source
          codes.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => {
              toast.success(`Navigating to ${tool.label}`);
              router.push(tool.href);
            }}
            key={tool.href}
            className="p-4 bg-gradient-to-r from-pink-400 to-purple-500 border-black/5 flex items-center justify-between hover:bg-gradient-to-l hover:shadow-pink-400 transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit p-1 rounded-md bg-green-200")}>
                <tool.icon className={cn("w-8 h-8 text-green-900")} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-7 h-7" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
