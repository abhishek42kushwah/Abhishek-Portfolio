/**
 * Static, hand-highlighted editor visual for the hero. No runtime cost:
 * it renders on the server and ships zero JavaScript.
 */

type Token = [kind: keyof typeof tone, text: string];

const tone = {
  k: "text-[color:var(--code-keyword)]", // keyword
  f: "text-[color:var(--code-fn)]", // function / identifier
  s: "text-[color:var(--code-string)]", // string
  p: "text-[color:var(--code-prop)]", // property / type
  c: "text-[color:var(--code-comment)] italic", // comment
  t: "text-[color:var(--code-text)]", // plain text / punctuation
};

const code: Token[][] = [
  [["k", "import"], ["t", " { authenticate, authorize } "], ["k", "from"], ["s", ' "@/middleware/auth"'], ["t", ";"]],
  [],
  [["f", "router"], ["t", "."], ["p", "get"], ["t", "("]],
  [["s", '  "/purchase-orders"'], ["t", ","]],
  [["f", "  authenticate"], ["t", ",                      "], ["c", "// JWT"]],
  [["f", "  authorize"], ["t", "("], ["s", '"procurement"'], ["t", ", "], ["s", '"read"'], ["t", "),  "], ["c", "// RBAC"]],
  [["k", "  async"], ["t", " (req, res) "], ["k", "=>"], ["t", " {"]],
  [["k", "    const"], ["t", " page = "], ["f", "Number"], ["t", "(req.query.page) || "], ["p", "1"], ["t", ";"]],
  [["k", "    const"], ["t", " filter = { status: req.query.status };"]],
  [],
  [["k", "    const"], ["t", " [orders, total] = "], ["k", "await"], ["t", " Promise."], ["p", "all"], ["t", "(["]],
  [["f", "      PurchaseOrder"], ["t", "."], ["p", "find"], ["t", "(filter)."], ["p", "sort"], ["t", "({ createdAt: -"], ["p", "1"], ["t", " })"]],
  [["t", "        ."], ["p", "skip"], ["t", "((page - "], ["p", "1"], ["t", ") * "], ["p", "20"], ["t", ")."], ["p", "limit"], ["t", "("], ["p", "20"], ["t", "),"]],
  [["f", "      PurchaseOrder"], ["t", "."], ["p", "countDocuments"], ["t", "(filter),"]],
  [["t", "    ]);"]],
  [],
  [["t", "    res."], ["p", "json"], ["t", "({ data: orders, total, page });"]],
  [["t", "  }"]],
  [["t", ");"]],
];

const tabs = ["orders.routes.ts", "useRBAC.ts", "Dashboard.tsx"];

export function CodeWindow({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`overflow-hidden rounded-card border border-line-strong bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.02)] ${className}`}
      aria-label="Code editor showing an Express route protected by JWT authentication and role-based access control"
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-raised px-4">
        <div className="flex gap-1.5 py-3" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex min-w-0 overflow-hidden font-mono text-[11px]">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`whitespace-nowrap border-x border-transparent px-3 py-3 ${
                i === 0 ? "border-line bg-surface text-fg" : "text-muted"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto py-4 font-mono text-[12px] leading-[1.7] sm:text-[12.5px]" aria-hidden>
        <code className="grid">
          {code.map((line, i) => (
            <span key={i} className="flex pr-6">
              <span className="w-10 shrink-0 select-none pr-4 text-right text-[color:var(--code-gutter)]">{i + 1}</span>
              <span className="whitespace-pre">
                {line.length === 0
                  ? " "
                  : line.map(([kind, text], j) => (
                      <span key={j} className={tone[kind]}>
                        {text}
                      </span>
                    ))}
              </span>
            </span>
          ))}
        </code>
      </pre>

      {/* Status bar */}
      <figcaption className="flex items-center justify-between gap-4 border-t border-line bg-surface-raised px-4 py-2 font-mono text-[10.5px] text-muted">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          Node.js · Express · MongoDB
        </span>
        <span className="hidden sm:inline">TypeScript · UTF-8</span>
      </figcaption>
    </figure>
  );
}
