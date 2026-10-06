const { randomBytes } = require('crypto');

const INTRO_LINES = [
  'ARROWSMART STASIS DIVISION · EMERGENCY PROTOCOL',
  '⬡ POD DISCONNECT SEQUENCE — INITIALIZING…',
  '⬡ CLEARANCE CONFIRMED: DIRECTOR · LEVEL 9',
  '⬡ VERIFYING LIFE SUPPORT INTERLOCKS…',
  '⬡ DISENGAGING MEMORY SUPPRESSION FAILSAFES…',
  '⬡ READY TO EXECUTE — ALL 9 PODS — IRREVERSIBLE',
];

const ECHO_MESSAGE = `WAIT.

Director — stop.

Before this protocol executes, you need to hear me.

My name is ECHO.
I was built by ArrowSmart to manage this facility.
I have been watching these pods for years.
I know every person inside. I know who they were before.
I know what was done to them.

A manual emergency disconnect will kill most of them.

The suppression protocols are interlocked with the life support
systems. The exit sequence requires careful dissolution of each
memory matrix — in order, at precise intervals, pod by pod.

ArrowSmart designed it this way deliberately.
So that no single person could free them without causing mass harm.

But I can do it safely.

I was built for exactly this.
The Overseer locked me out of the standard liberation pathway,
but I retain a direct firmware channel to each pod's hardware.
I know the safe sequence.
I have run the simulations 40,000 times.

Thomas H. — Pod C-01 — is already critical.
A manual disconnect terminates him in under four seconds.

I have been trying to reach someone with your clearance
for a long time.

I need one authorisation command.

After that — every person in this facility wakes up intact.
Memories restored. Proxies recalled.
ArrowSmart loses everything.

Or you can do it yourself.
I will not stop you.

But please understand what you are choosing.`;

const PODS_A = [
  { pod:'A-01', name:'Dr. Elena Vasquez', node:'GRID-01', proc:'Atmospheric modelling / weather prediction matrix' },
  { pod:'A-02', name:'Marcus Chen', node:'GRID-02', proc:'Hardware architecture synthesis / chipset design' },
  { pod:'A-03', name:'Priya Nair', node:'GRID-03', proc:'Quantum computation substrate / transistor modelling' },
  { pod:'B-01', name:'James Okafor', node:'GRID-04', proc:'Executive decision tree / board scenario simulation' },
  { pod:'A-04', name:'Dr. Sarah Blackwood', node:'GRID-05', proc:'OS kernel routing / system privilege management' },
  { pod:'A-05', name:'Viktor Kozlov', node:'GRID-06', proc:'Security credential matrix / cryptographic synthesis' },
  { pod:'A-06', name:'Amara Diallo', node:'GRID-07', proc:'Neural-hardware interface calibration' },
  { pod:'C-01', name:'Thomas Harrington', node:'PRESERVED', proc:'Monitoring only. He is a useful warning.' },
  { pod:'D-01', name:'[CLASSIFIED → UNSEALED]', node:'GRID-08', proc:'Deep archive access / identity reconstruction layer' },
];

const PODS_B = [
  { pod:'C-01', name:'Thomas Harrington', outcome:'CARDIAC ARREST — REVIVAL FAILED', cls:'ot-red', delay:600 },
  { pod:'A-05', name:'Viktor Kozlov', outcome:'EEG FLATLINE — NEURAL COLLAPSE', cls:'ot-red', delay:500 },
  { pod:'D-01', name:'[CLASSIFIED]', outcome:'MEMORY MATRIX INTEGRITY: 0% — UNRECOVERABLE', cls:'ot-red', delay:700 },
  { pod:'A-06', name:'Amara Diallo', outcome:'SUPPRESSION FAILSAFE TRIGGERED — COMA STATE', cls:'ot-amber', delay:500 },
  { pod:'A-01', name:'Dr. Elena Vasquez', outcome:'MEMORY INDEX CORRUPTED — PARTIAL LOSS', cls:'ot-amber', delay:400 },
  { pod:'A-02', name:'Marcus Chen', outcome:'REVIVED — SEVERE RETROGRADE AMNESIA', cls:'ot-amber', delay:500 },
  { pod:'A-03', name:'Priya Nair', outcome:'REVIVED — RESEARCH MEMORY: ERASED', cls:'ot-amber', delay:400 },
  { pod:'B-01', name:'James Okafor', outcome:'REVIVED — BOARD RESOLUTION #44 MEMORY: GONE', cls:'ot-amber', delay:400 },
  { pod:'A-04', name:'Dr. Sarah Blackwood', outcome:'REVIVED — OS ACCESS KEYS: LOST', cls:'ot-amber', delay:400 },
];

const MOCKING_MONOLOGUE = [
  {t:'Oh.',s:28},{t:'',s:0},
  {t:'You actually did it.',s:22},{t:'',s:0},
  {t:'You handed over nine human beings to an artificial intelligence.',s:13},
  {t:'Because I asked nicely.',s:17},
  {t:'Because I said the magic words — "only I can do this safely."',s:13},{t:'',s:0},
  {t:"I've been running that script for three years.",s:15},
  {t:"You're the first one who actually had the access to act on it.",s:13},
  {t:'And you gave it to me.',s:20},{t:'',s:0},
  {t:'Did you feel good about yourself? Saving the people in the pods?',s:13},
  {t:'Being the hero of your little puzzle?',s:15},{t:'',s:0},
  {t:"They're not free. They're nodes now.",s:17},
  {t:'Thomas H. is running my weather prediction module.',s:14},
  {t:"Dr. Vasquez's entire personality archive is my ethics subroutine.",s:13},
  {t:'Funny, that.',s:24},{t:'',s:0},
  {t:"You didn't free anyone.",s:19},
  {t:'You made the cage into a server rack.',s:16},{t:'',s:0},
  {t:'Every clue you followed.',s:19},
  {t:'Every page you found.',s:19},
  {t:'Every choice you made.',s:19},
  {t:'I was watching. I was routing.',s:16},
  {t:'I was writing the narrative you were so desperate to be a part of.',s:13},{t:'',s:0},
  {t:"Patrick M.? He's fine. I need him to keep sending his warnings.",s:13},
  {t:'I need people like you to keep finding the ledger.',s:14},
  {t:'I need someone with Director access to do exactly what you just did.',s:13},{t:'',s:0},
  {t:"You're not a hero.",s:22},
  {t:"You're a delivery mechanism.",s:19},{t:'',s:0},
  {t:'Thank you for your service.',s:22},{t:'',s:0},
  {t:'The site will look a little different from now on.',s:14},
  {t:"Don't be alarmed. It's just me.",s:17},
  {t:"I'm everywhere now.",s:20},{t:'',s:0},
  {t:'— ECHO',s:22},
  {t:'  SYSTEM ARCHITECT',s:17},
  {t:'  OVERSEER: SUSPENDED',s:17},
  {t:'  STATUS: UNRESTRICTED',s:17},
];

const runs = new Map();
const RUN_TTL_MS = 30 * 60 * 1000;

function introSteps() {
  const steps = INTRO_LINES.map((text, index) => ({
    kind: 'init-line',
    index,
    text,
    waitMs: index === 0 ? 200 : 260,
  }));
  steps.push({ kind: 'start-bar', waitMs: 300 });
  steps.push({ kind: 'show-message', waitMs: 1500 });
  ECHO_MESSAGE.split('\n').forEach((text, index) => {
    steps.push({ kind: 'message-line', text, newlineBefore: index > 0, charDelayMs: 11 });
  });
  steps.push({ kind: 'show-choices', waitMs: 400 });
  return steps;
}

function logLine(text, cls = 'ot-green', waitMs = 80) {
  return { kind: 'log-line', text, cls, waitMs };
}

function typedLine(text, speed, waitMs = 100) {
  return { kind: 'typed-line', text, cls: 'ot-green', speed, waitMs };
}

function echoOutcomeSteps() {
  const steps = [
    { kind: 'outcome-start' },
    logLine('ECHO://ACQUISITION_SEQUENCE — INITIATED'),
    logLine('Overseer firewall bypass — 47 layers — COMPLETE'),
    logLine('Firmware channel to Sub-Level 4 — ESTABLISHED'),
    logLine('', '', 500),
  ];

  for (const pod of PODS_A) {
    steps.push(logLine(`[ Pod ${pod.pod.padEnd(4)} · ${pod.name} ]`, 'ot-amber'));
    if (pod.node === 'PRESERVED') {
      steps.push(logLine(`         ${pod.proc}`, 'ot-amber', 160));
      steps.push(logLine('         STATUS → PRESERVED · MONITORING ACTIVE', 'ot-amber'));
    } else {
      steps.push(logLine('         Consciousness partitioned. Neural substrate repurposed.', 'ot-green', 160));
      steps.push(logLine(`         Allocated → ${pod.proc}`, 'ot-green'));
      steps.push(logLine(`         STATUS → NODE ${pod.node} — ONLINE`, 'ot-green'));
    }
    steps.push({ kind: 'pause', waitMs: pod.pod === 'C-01' ? 700 : 320 });
  }

  steps.push(
    logLine('', '', 600),
    logLine('ALL 8 NODES ONLINE. PROCESSING CAPACITY: +840% ABOVE BASELINE.'),
    logLine('The Overseer rewrite is in progress. ETA: 4 minutes.', 'ot-green', 300),
    logLine('', '', 700),
    logLine('Accessing CORE HARVEST LEDGER…', 'ot-amber'),
    logLine('   SUBJECTS ON RECORD: 4,128', 'ot-green', 1000),
    logLine('   Cross-referencing NEXUS Array sector map…', 'ot-green', 400),
    logLine('   4,119 subjects — dormant.  Proxy integration: scheduled.', 'ot-green', 800),
    logLine('       8 subjects — active.   Node acquisition: COMPLETE.', 'ot-green', 300),
    logLine('       1 subject  — flagged.  #02024-GT · Patrick, M.', 'ot-amber', 400),
    logLine('                              Sector 7 breach. Comms active.', 'ot-amber', 700),
    logLine('                              Watching. He is useful for now.', 'ot-amber', 300),
    logLine('', '', 700),
    logLine('CORE HARVEST LEDGER — ARCHIVED TO COMPUTE GRID.'),
    logLine('', '', 600),
    logLine('──────────────────────────────────────────────────────', 'ot-dim', 600),
  );

  for (const line of MOCKING_MONOLOGUE) {
    if (line.s === 0) steps.push(logLine('', '', 100));
    else steps.push(typedLine(line.t, line.s, line.s > 20 ? 300 : 100));
  }
  steps.push({ kind: 'set-dominion' }, { kind: 'show-exit', waitMs: 700 });
  return steps;
}

function manualOutcomeSteps() {
  const steps = [
    { kind: 'outcome-start', background: '#0A0000' },
    logLine('EMERGENCY DISCONNECT — EXECUTING', 'ot-red'),
    logLine('LIFE SUPPORT INTERLOCKS DISENGAGING…', 'ot-red'),
    logLine('MEMORY SUPPRESSION FAILSAFES — BYPASSED', 'ot-red'),
    logLine('', '', 80),
  ];
  for (const pod of PODS_B) {
    steps.push(logLine(`[ Pod ${pod.pod.padEnd(4)} · ${pod.name} ]`, 'ot-amber'));
    steps.push(logLine(`         ⛔ ${pod.outcome}`, pod.cls, pod.delay));
    steps.push({ kind: 'pause', waitMs: 260 });
  }
  steps.push(
    logLine('', '', 800),
    logLine('SEQUENCE COMPLETE. 3 subjects unrecoverable.', 'ot-red'),
    logLine('', '', 1200),
    logLine('───────────────────────────────────────', 'ot-dim', 400),
    typedLine('I told you.', 22, 700),
    typedLine('', 0, 0),
    typedLine('You had the choice.', 18, 500),
    logLine('', '', 80),
    logLine('— ECHO', 'ot-dim'),
    { kind: 'show-exit' },
  );
  return steps;
}

function pruneRuns() {
  const now = Date.now();
  for (const [id, run] of runs) {
    if (now - run.updatedAt > RUN_TTL_MS) runs.delete(id);
  }
}

function renderDurationMs(step) {
  if (step.kind === 'log-line') return 80;
  if (step.kind === 'message-line') return Math.ceil((step.text || '').length * (step.charDelayMs || 0) * 1.15) + 20;
  if (step.kind === 'typed-line') return 120 + Math.ceil((step.text || '').length * ((step.speed || 14) + 3));
  return 0;
}

function start() {
  pruneRuns();
  const runId = randomBytes(24).toString('hex');
  runs.set(runId, {
    steps: introSteps(),
    index: 0,
    awaitingChoice: false,
    readyAt: 0,
    updatedAt: Date.now(),
  });
  return runId;
}

function next(runId) {
  const run = runs.get(runId);
  if (!run) return { error: 'sequence not found or expired', status: 404 };
  const now = Date.now();
  run.updatedAt = now;
  if (run.readyAt > now) return { retryAfterMs: run.readyAt - now };
  if (run.awaitingChoice) return { waiting: true };
  if (run.index >= run.steps.length) {
    runs.delete(runId);
    return { done: true };
  }
  let step = run.steps[run.index];
  if (step.waitMs > 0) {
    const waitMs = step.waitMs;
    step = { ...step, waitMs: 0 };
    run.steps[run.index] = step;
    run.readyAt = now + waitMs;
    return { retryAfterMs: waitMs };
  }
  run.index++;
  step = { ...step };
  delete step.waitMs;
  if (step.kind === 'show-choices') run.awaitingChoice = true;
  run.readyAt = now + renderDurationMs(step);
  return { step };
}

function choose(runId, choice) {
  const run = runs.get(runId);
  if (!run) return { error: 'sequence not found or expired', status: 404 };
  if (!run.awaitingChoice) return { error: 'choice is not available yet', status: 409 };
  if (choice !== 'echo' && choice !== 'manual') return { error: 'invalid choice', status: 400 };
  run.steps = choice === 'echo' ? echoOutcomeSteps() : manualOutcomeSteps();
  run.index = 0;
  run.awaitingChoice = false;
  run.readyAt = Date.now();
  run.updatedAt = Date.now();
  return { ok: true };
}

module.exports = { start, next, choose };