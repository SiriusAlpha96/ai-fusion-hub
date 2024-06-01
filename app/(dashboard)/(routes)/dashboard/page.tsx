"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-600/10",
    arrowColor: "text-violet-600",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-400/10",
    arrowColor: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    arrowColor: "text-orange-600",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-yellow-400",
    bgColor: "bg-yellow-300/10",
    arrowColor: "text-yellow-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    arrowColor: "text-emerald-600",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI-FUSION HUB
        </h2>
        <p className="text-muted-foreground font-light text-small md:text-lg text-center">
          Unleash Your Creativity
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={cn("p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer", tool.bgColor)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className={cn("w-5 h-5",tool.arrowColor)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
