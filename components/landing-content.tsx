"use client";


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Conversation with AI",
    avatar: "J",
    title : "",
    description: "Diverse narratives, stories, and information presented.",
  },
  {
    name: "Code Generation",
    avatar: "J",
    title: "",
    description: " Automated creation of software instructions using AI algorithms for various applications.",
  },
  {
    name: "Music Generation",
    avatar: "I",
    title: "",
    description: "Melodies, rhythms, and harmonies evoking mood and atmosphere.",
  },
  {
    name: "Image Generation",
    avatar: "A",
    title: "",
    description: "Visual representation conveying emotions, ideas, and messages.",
  },
  {
    name: "Video Generation",
    avatar: "A",
    title: "",
    description: "Moving images, scenes, and sequences capturing moments and narratives.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features of Our Project.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#243456] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
