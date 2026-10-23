import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function Markdown({ content }: { content: string }) {
  return (
    <div className="min-w-0 text-base leading-8 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-7 [&_blockquote]:border-l-2 [&_blockquote]:border-border-strong [&_blockquote]:pl-5 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_hr]:my-8 [&_hr]:border-border [&_img]:my-6 [&_img]:max-w-full [&_img]:rounded-xl [&_li]:my-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-code [&_pre]:p-5 [&_pre]:text-code-foreground dark:[&_pre]:bg-code [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="my-7 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-left text-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-border bg-muted px-4 py-3 font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border px-4 py-3 last:border-b-0">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
