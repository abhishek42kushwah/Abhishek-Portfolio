"use client";

/**
 * Hand-highlighted, tabbed editor visual for the hero. Switching tabs swaps in a
 * different real-world snippet — route handler, custom hook, dashboard component.
 */

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

type Token = [kind: keyof typeof tone, text: string];

const tone = {
  k: "text-[color:var(--code-keyword)]", // keyword
  f: "text-[color:var(--code-fn)]", // function / identifier
  s: "text-[color:var(--code-string)]", // string
  p: "text-[color:var(--code-prop)]", // property / type
  c: "text-[color:var(--code-comment)] italic", // comment
  t: "text-[color:var(--code-text)]", // plain text / punctuation
};

type CodeFile = {
  name: string;
  status: string;
  description: string;
  code: Token[][];
};

const files: CodeFile[] = [
  {
    name: "orders.routes.ts",
    status: "Node.js · Express · MongoDB",
    description: "an Express route protected by JWT authentication and role-based access control",
    code: [
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
      [],
    ],
  },
  {
    name: "useRBAC.ts",
    status: "React · Context API · RBAC",
    description: "a custom React hook exposing permission checks from a role-based access control system",
    code: [
      [["k", "import"], ["t", " { useMemo } "], ["k", "from"], ["s", ' "react"'], ["t", ";"]],
      [["k", "import"], ["t", " { useAuth } "], ["k", "from"], ["s", ' "@/context/AuthContext"'], ["t", ";"]],
      [],
      [["k", "type"], ["t", " Action = "], ["s", '"read"'], ["t", " | "], ["s", '"write"'], ["t", " | "], ["s", '"delete"'], ["t", ";"]],
      [],
      [["k", "export function "], ["f", "useRBAC"], ["t", "(module: "], ["p", "string"], ["t", ") {"]],
      [["k", "  const"], ["t", " { user } = "], ["f", "useAuth"], ["t", "();"]],
      [],
      [["k", "  const"], ["t", " permissions = "], ["f", "useMemo"], ["t", "("]],
      [["t", "    () "], ["k", "=>"], ["t", " user?.permissions[module] ?? [],"]],
      [["t", "    [user, module]"]],
      [["t", "  );"]],
      [],
      [["k", "  return"], ["t", " {"]],
      [["p", "    can"], ["t", ": (action: "], ["p", "Action"], ["t", ") "], ["k", "=>"], ["t", " permissions."], ["p", "includes"], ["t", "(action),"]],
      [["p", "    role"], ["t", ": user?.role,"]],
      [["t", "  };"]],
      [["t", "}"]],
      [],
      [],
    ],
  },
  {
    name: "Dashboard.tsx",
    status: "React · TanStack Query · Tailwind CSS",
    description: "a React dashboard component rendering live stats behind a permission check",
    code: [
      [["k", "import"], ["t", " { useRBAC } "], ["k", "from"], ["s", ' "@/hooks/useRBAC"'], ["t", ";"]],
      [["k", "import"], ["t", " { useQuery } "], ["k", "from"], ["s", ' "@tanstack/react-query"'], ["t", ";"]],
      [["k", "import"], ["t", " { StatCard } "], ["k", "from"], ["s", ' "./StatCard"'], ["t", ";"]],
      [],
      [["k", "export function "], ["f", "Dashboard"], ["t", "() {"]],
      [["k", "  const"], ["t", " { can } = "], ["f", "useRBAC"], ["t", "("], ["s", '"inventory"'], ["t", ");"]],
      [["k", "  const"], ["t", " { data } = "], ["f", "useQuery"], ["t", "({"]],
      [["p", "    queryKey"], ["t", ": ["], ["s", '"inventory-stats"'], ["t", "],"]],
      [["p", "    queryFn"], ["t", ": fetchInventoryStats,"]],
      [["t", "  });"]],
      [],
      [["k", "  return"], ["t", " ("]],
      [["t", "    <section className="], ["s", '"grid gap-4 md:grid-cols-3"'], ["t", ">"]],
      [["t", "      <"], ["f", "StatCard"], ["t", " label="], ["s", '"Open orders"'], ["t", " value={data?.openOrders} />"]],
      [["t", "      <"], ["f", "StatCard"], ["t", " label="], ["s", '"Low stock"'], ["t", " value={data?.lowStock} />"]],
      [["t", "      {can("], ["s", '"write"'], ["t", ") && <"], ["f", "NewOrderButton"], ["t", " />}"]],
      [["t", "    </section>"]],
      [["t", "  );"]],
      [["t", "}"]],
      [],
    ],
  },
];

export function CodeWindow({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const file = files[active];

  return (
    <figure
      className={`overflow-hidden rounded-card border border-line-strong bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.02)] ${className}`}
      aria-label={`Code editor showing ${file.description}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-raised px-4">
        <div className="flex gap-1.5 py-3" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div role="tablist" aria-label="Example source files" className="flex min-w-0 overflow-hidden font-mono text-[11px]">
          {files.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap border-x border-transparent px-3 py-3 transition-colors duration-200 ${
                active === i ? "border-line bg-surface text-fg" : "text-muted hover:text-secondary"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      {/* Code */}
      <div className="relative h-[430px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <m.pre
            key={file.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hide-scrollbar absolute inset-0 overflow-x-auto overflow-y-hidden py-4 font-mono text-[12px] leading-[1.7] sm:text-[12.5px]"
            aria-hidden
          >
            <code className="grid">
              {file.code.map((line, i) => (
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
          </m.pre>
        </AnimatePresence>
      </div>

      {/* Status bar */}
      <figcaption className="flex items-center justify-between gap-4 border-t border-line bg-surface-raised px-4 py-2 font-mono text-[10.5px] text-muted">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {file.status}
        </span>
        <span className="hidden sm:inline">TypeScript · UTF-8</span>
      </figcaption>
    </figure>
  );
}
