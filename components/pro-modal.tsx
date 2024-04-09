"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Check, CodeIcon, ImageIcon, MessageSquare, Music, VideoIcon,Zap } from "lucide-react";
import { useProModel } from "@/hooks/use-pro-modal"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";


const tools = [
    {
            label: "Conversation",
            icon: MessageSquare,
            color: "text-violet-500",
            bgColor: "bg-violet-500/10",
           
        },
        {
            label: "Music Generation",
            icon: Music,
            color: "text-emerald-500",
            bgColor: "bg-emerald-500/10",
           
        },
        {
            label: "Image Generation",
            icon: ImageIcon,
            color: "text-pink-700",
            bgColor: "bg-pink-700/10",
           
        },
        {
            label: "Video Generation",
            icon: VideoIcon,
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            
        },
        {
            label: "Code Generation",
            icon: CodeIcon,
            color: "text-green-500",
            bgColor: "bg-green-500/10",
        
        }
]

export const ProModal = () =>{
    const proModal = useProModel()
    const [loading, setLoading] = useState(false)
    const onSubscribe = async() =>{
        try{
            setLoading(true)
            const response = axios.get("/api/stripe")

            window.location.href = (await response).data.url

        }catch(error){
            toast.error("Something went wrong!!")
        }finally{
            setLoading(false)
        }
    }


    return(
       <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                        Upgrade to AI-FUSION-HUB
                        <Badge variant="premium" className="uppercase text-sm py-1">
                            pro
                        </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool)=>(
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                                >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)}/>
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5"></Check>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                    disabled={loading}
                    onClick={onSubscribe}
                    size="lg"
                    variant="premium"
                    className="w-full">
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
             </DialogContent>
       </Dialog>
    )
}