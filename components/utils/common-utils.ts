import { toast } from "@/hooks/use-toast";

export const toastMessage = (message?: string): void => {
    const date: Date = new Date();
    toast({
      title: message,
      description: date.toISOString as any,
    });
  };