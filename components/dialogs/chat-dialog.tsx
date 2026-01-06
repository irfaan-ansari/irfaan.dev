"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useChat } from "@ai-sdk/react";
import Tooltip from "@/components/tooltip";
import { useModalStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WaveIcon from "@/components/icons/wave-icon";
import { Loader } from "@/components/animate-ui/icons/loader";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { AlertOctagon, CheckCheck, SendHorizonal, X } from "lucide-react";

const ChatDialog = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [input, setInput] = React.useState("");
  const toggle = useModalStore((state) => state.toggle);
  const open = useModalStore((state) => state.isOpen("chat"));

  const { messages, sendMessage, status, clearError, error } = useChat();

  const handleSubmit = () => {
    input.trim();
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <Dialog open={open} onOpenChange={() => toggle("chat")}>
      <DialogContent className="top-auto bottom-0 gap-2 mb-6 translate-y-0 h-full sm:max-w-md pt-5 pb-0 px-0 flex max-h-[min(600px,80vh)] flex-col bg-background dark:bg-secondary/80 backdrop-blur-2xl border-b-4">
        <DialogTitle className="sr-only">Chat</DialogTitle>

        <div
          className="grow basis-0 flex flex-col overflow-auto px-5 no-scrollbar"
          ref={ref}
        >
          {messages.length > 0 ? (
            <ul
              className="flex flex-col justify-end gap-4"
              aria-describedby="chat-messages"
            >
              {messages.map(({ id, parts, role }) => (
                <li
                  className={`grid gap-3 max-w-3/4 px-4 py-3 text-sm rounded-lg last:mb-4 relative ${
                    role === "assistant"
                      ? "self-start rounded-bl-none [&>span]:justify-start bg-secondary dark:bg-background/30"
                      : "self-end flex-row-reverse rounded-br-none [&>span]:justify-end [&_svg]:inline bg-violet-500 dark:bg-violet-600"
                  }`}
                  key={id}
                >
                  {parts.map((part) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <p
                            key={`${id}-${part.text}`}
                            className="whitespace-pre-wrap"
                          >
                            {part.text}
                          </p>
                        );
                      default:
                        return null;
                    }
                  })}

                  <span className="flex gap-2 items-center text-xs opacity-70">
                    12:38
                    <CheckCheck className="size-3.5 hidden" />
                  </span>
                </li>
              ))}

              {/* error */}
              {status === "error" && (
                <Error clearError={clearError} error={error} />
              )}
            </ul>
          ) : (
            <Greeting />
          )}

          {/* loading */}
          {status === "submitted" && <Loading />}
        </div>

        <DialogFooter className="gap-3 px-0 sm:flex-col border-t">
          <form
            className="relative flex-1 flex gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              className="w-full h-14 pl-4 pr-14 border-none rounded-none focus-visible:ring-0 dark:bg-transparent"
              placeholder="Have a question? Ask me here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled
            />
            <Tooltip content="Send">
              <Button
                size="icon-sm"
                className="absolute right-3 top-3"
                type="submit"
                disabled={status !== "ready" || !input}
              >
                <SendHorizonal className="size-3.5" />
              </Button>
            </Tooltip>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;

const Greeting = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <span className="bg-violet-500 h-8 rounded-full -translate-y-4 rounded-bl-md! mx-2 justify-start inline-flex items-center px-2 w-14">
          <WaveIcon className="size-3.5" />
        </span>
        <p>Hello, how can I help you?</p>
        <p className="mt-10 text-muted-foreground text-lg font-semibold">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

const Error = ({
  error,
  clearError,
}: {
  error: Error | undefined;
  clearError: () => void;
}) => {
  if (!error) return;
  return (
    <li className="grid gap-3 max-w-3/4 px-4 py-3 text-sm rounded-lg overflow-hidden last:mb-4 relative self-start rounded-bl-none bg-secondary dark:bg-background/30">
      <div className="flex items-start gap-3">
        <AlertOctagon className="size-4 text-destructive! shrink-0 mt-0.5" />
        <p className="line-clamp-1 min-h-4 font-medium tracking-tight truncate">
          {error.message}
        </p>
      </div>
      <div className="flex justify-between items-start">
        <span className="flex gap-2 items-center text-xs opacity-70">
          12:38
        </span>
        <Tooltip content="Retry">
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={() => clearError()}
            className="text-muted-foreground absolute right-0.5 bottom-0.5"
          >
            <X />
          </Button>
        </Tooltip>
      </div>
    </li>
  );
};

const Loading = () => {
  return (
    <div className="mb-4">
      <span className="bg-secondary dark:bg-background/30 size-9 inline-flex items-center justify-center rounded">
        <AnimateIcon animate>
          <Loader className="size-4" />
        </AnimateIcon>
      </span>
    </div>
  );
};
