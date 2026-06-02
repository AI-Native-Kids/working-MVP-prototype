import type { MockupKind } from '../data/dictionary';
import { useI18n } from '../i18n';

/**
 * Static placeholder "screenshots" for each demo case study. These are pure
 * CSS/HTML mockups (no real data or logic) that visually represent what the
 * finished student project looks like. Visible text comes from the dictionary
 * so the mockups translate along with the rest of the page.
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
  const { t } = useI18n();
  const m = t.mock.planner;
  const dots = ['bg-rose-500', 'bg-amber-500', 'bg-emerald-500'];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-slate-800">{m.title}</p>
        <span className="rounded-md bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
          {m.addTask}
        </span>
      </div>
      {m.tasks.map((task, i) => (
        <div key={task.name} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-white p-2">
          <span className={`h-2 w-2 rounded-full ${dots[i % dots.length]}`} />
          <span className="flex-1 text-[11px] text-slate-700">{task.name}</span>
          <span className="text-[10px] text-slate-400">{task.due}</span>
        </div>
      ))}
      <div className="rounded-lg bg-violet-50 p-2.5">
        <p className="text-[10px] font-semibold text-violet-700">{m.aiLabel}</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-600">{m.plan}</p>
      </div>
    </div>
  );
}

function FractionsMock() {
  const { t } = useI18n();
  const m = t.mock.fractions;
  return (
    <div className="space-y-3 text-center">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-semibold text-indigo-700">
          {m.level}
        </span>
        <span className="text-[11px] font-bold text-slate-800">{m.score}</span>
      </div>
      <p className="text-[11px] font-semibold text-slate-700">{m.question}</p>
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
  const { t } = useI18n();
  const m = t.mock.rocket;
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-slate-800">{m.title}</p>
      {/* Launch viewport with trajectory */}
      <div className="relative h-24 overflow-hidden rounded-lg bg-gradient-to-b from-sky-100 to-emerald-50">
        <svg viewBox="0 0 200 90" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <path d="M10 80 Q 100 -20 190 70" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <span className="absolute left-1.5 top-8 text-base">🚀</span>
        <span className="absolute bottom-1 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
          {m.distance}
        </span>
      </div>
      {/* Sliders */}
      <StatBar label={m.fuel} value={70} color="bg-emerald-500" />
      <StatBar label={m.angle} value={45} color="bg-teal-500" />
      <StatBar label={m.gravity} value={30} color="bg-sky-500" />
    </div>
  );
}

function StocksMock() {
  const { t } = useI18n();
  const m = t.mock.stocks;
  const bars = [40, 65, 50, 80, 72];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-800">{m.company}</p>
          <p className="text-[10px] text-slate-400">{m.sub}</p>
        </div>
        <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
          {m.risk}
        </span>
      </div>
      {/* Revenue bars */}
      <div className="flex h-16 items-end gap-1.5 rounded-lg bg-slate-50 p-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-amber-400 to-orange-400" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="rounded-lg bg-amber-50 p-2.5">
        <p className="text-[10px] font-semibold text-amber-700">{m.aiLabel}</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-600">{m.summary}</p>
      </div>
    </div>
  );
}

function RomeMock() {
  const { t } = useI18n();
  const m = t.mock.rome;
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold text-slate-800">{m.header}</p>
      <div className="space-y-2">
        <StatBar label={m.stability} value={68} color="bg-rose-500" />
        <StatBar label={m.happiness} value={54} color="bg-pink-500" />
        <StatBar label={m.treasury} value={42} color="bg-amber-500" />
      </div>
      {/* Decision card */}
      <div className="rounded-lg border border-slate-100 bg-white p-2.5">
        <p className="text-[10px] font-semibold text-slate-700">{m.question}</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <span className="rounded-md bg-rose-50 py-1 text-center text-[10px] font-semibold text-rose-700">
            {m.yes}
          </span>
          <span className="rounded-md bg-slate-100 py-1 text-center text-[10px] font-semibold text-slate-600">
            {m.no}
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
  const { t } = useI18n();
  const Body = mockups[kind];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {/* Fake browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[10px] font-medium text-slate-400">{t.mock.browser}</span>
      </div>
      <div className="p-4">
        <Body />
      </div>
    </div>
  );
}
