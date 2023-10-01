"use client";

import * as z from "zod";
import axios from "axios";
import { FileAudio, MessageSquare, VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../../../components/ui/form";
import { cn } from "../../../../lib/utils";

import { formSchema } from "./constants";
import { Heading } from "../../../../components/heading";
import { Empty } from "../../../../components/empty";
import { Loader } from "../../../../components/loader";
import { UserAvatar } from "../../../../components/user-avatar";
import { BotAvatar } from "../../../../components/bot-avatar";

const VideoPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);

      setVideo(response.data[0]);
      form.reset();
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generation"
        description="Our most advanced conversation model."
        icon={VideoIcon}
        iconcolor="text-violet-500"
        bgcolor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Ask Deep Dreamer to generate video for you :)"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Request
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!video && !isLoading && (
            <Empty label={"No video generated/not found in the database."} />
          )}
          {video && (
            <video
              controls
              className="w-full aspect-auto rounded-lg border bg-black mt-8"
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
