import type { MockupKind } from '../data/content';

/**
 * Static placeholder "screenshots" for each demo case study. These are pure
 * CSS/HTML mockups (no real data or logic) that visually represent what the
 * finished student project looks like. Each kind renders a distinct fake UI.
 */

// Small reusable bar used by several mockups.
function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-medium text-slate-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function PlannerMock() {
  const tasks = [
    { name: 'Math worksheet', due: 'Today', dot: 'bg-rose-500' },
    { name: 'History essay', due: 'Fri', dot: 'bg-amber-500' },
    { name: 'Science reading', due: 'Mon', dot: 'bg-emerald-500' },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-slate-800">My Homework</p>
        <span className="rounded-md bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
          + Add task
        </span>
      </div>
      {tasks.map((t) => (
        <div key={t.name} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white p-2">
          <span className={`h-2 w-2 rounded-full ${t.dot}`} />
          <span className="flex-1 text-[11px] text-slate-700">{t.name}</span>
          <span className="text-[10px] text-slate-400">{t.due}</span>
        </div>
      ))}
      <div className="rounded-lg bg-violet-50 p-2.5">
        <p className="text-[10px] font-semibold text-violet-700">🤖 AI study plan</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-600">
          4:00 Math · 4:45 break · 5:00 History essay draft
        </p>
      </div>
    </div>
  );
}

function FractionsMock() {
  return (
    <div className="space-y-3 text-center">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
          Level 3
        </span>
        <span className="text-[11px] font-bold text-slate-800">Score 120</span>
      </div>
      <p className="text-[11px] font-semibold text-slate-700">Which fraction is larger?</p>
      {/* Two visual fraction bars */}
      <div className="space-y-2">
        <div className="flex h-4 overflow-hidden rounded-md border border-slate-200">
          <div className="w-1/2 bg-indigo-500" />
          <div className="w-1/2 bg-slate-100" />
        </div>
        <div className="flex h-4 overflow-hidden rounded-md border border-slate-200">
          <div className="w-3/4 bg-blue-500" />
          <div className="w-1/4 bg-slate-100" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <span className="rounded-lg border border-slate-200 py-1.5 text-[11px] font-semibold text-slate-600">
          1/2
        </span>
        <span className="rounded-lg border-2 border-emerald-400 bg-emerald-50 py-1.5 text-[11px] font-semibold text-emerald-700">
          3/4 ✓
        </span>
      </div>
    </div>
  );
}

function RocketMock() {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-slate-800">Rocket Launch Simulator</p>
      {/* Launch viewport with trajectory */}
      <div className="relative h-24 overflow-hidden rounded-lg bg-gradient-to-b from-sky-100 to-emerald-50">
        <svg viewBox="0 0 200 90" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <path d="M10 80 Q 100 -20 190 70" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <span className="absolute left-1.5 top-8 text-base">🚀</span>
        <span className="absolute bottom-1 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
          1,240 m
        </span>
      </div>
      {/* Sliders */}
      <StatBar label="Fuel" value={70} color="bg-emerald-500" />
      <StatBar label="Launch angle" value={45} color="bg-teal-500" />
      <StatBar label="Gravity" value={30} color="bg-sky-500" />
    </div>
  );
}

function StocksMock() {
  const bars = [40, 65, 50, 80, 72];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-800">NovaTech Inc.</p>
          <p className="text-[10px] text-slate-400">Sample data · NVT</p>
        </div>
        <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
          Risk: Medium
        </span>
      </div>
      {/* Revenue bars */}
      <div className="flex h-16 items-end gap-1.5 rounded-lg bg-slate-50 p-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-amber-400 to-orange-400" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="rounded-lg bg-amber-50 p-2.5">
        <p className="text-[10px] font-semibold text-amber-700">🤖 AI summary</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-600">
          Revenue grew steadily; profit margins are stable with moderate risk.
        </p>
      </div>
    </div>
  );
}

function RomeMock() {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-slate-800">Year 117 AD · Emperor</p>
      <div className="space-y-2">
        <StatBar label="Stability" value={68} color="bg-rose-500" />
        <StatBar label="Happiness" value={54} color="bg-pink-500" />
        <StatBar label="Treasury" value={42} color="bg-amber-500" />
      </div>
      {/* Decision card */}
      <div className="rounded-lg border border-slate-100 bg-white p-2.5">
        <p className="text-[10px] font-semibold text-slate-700">Raise taxes to fund the army?</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <span className="rounded-md bg-rose-50 py-1 text-center text-[10px] font-semibold text-rose-700">
            Yes
          </span>
          <span className="rounded-md bg-slate-100 py-1 text-center text-[10px] font-semibold text-slate-600">
            No
          </span>
        </div>
      </div>
    </div>
  );
}

const mockups: Record<MockupKind, () => JSX.Element> = {
  planner: PlannerMock,
  fractions: FractionsMock,
  rocket: RocketMock,
  stocks: StocksMock,
  rome: RomeMock,
};

export function MockScreen({ kind }: { kind: MockupKind }) {
  const Body = mockups[kind];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {/* Fake browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[10px] font-medium text-slate-400">student-demo.app</span>
      </div>
      <div className="p-4">
        <Body />
      </div>
    </div>
  );
}
