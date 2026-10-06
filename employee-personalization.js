(function (window) {
  'use strict';

  const EMPLOYEES = {
    'j.doe@arrowsmart.com': { name: 'James Doe', role: 'Software Engineer II', department: 'Engineering', location: 'Remote — US' },
    'a.kamara@arrowsmart.com': { name: 'Aisha Kamara', role: 'Product Designer', department: 'Design', location: 'New York, NY' },
    'p.anand@arrowsmart.com': { name: 'Priya Anand', role: 'UX Researcher', department: 'Design', location: 'London, UK' },
    'a.hart@arrowsmart.com': { name: 'Amelia Hart', role: 'HR Business Partner', department: 'HR', location: 'San Mateo, CA' },
    'h.muller@arrowsmart.com': { name: 'Hana Müller', role: 'Software Engineer III', department: 'Engineering', location: 'Berlin, Germany' },
    'c.vega@arrowsmart.com': { name: 'Carlos Vega', role: 'Marketing Lead', department: 'Marketing', location: 'Austin, TX' },
    'o.park@arrowsmart.com': { name: 'Owen Park', role: 'Retail Operations Lead', department: 'Operations', location: 'New York, NY' },
    'l.okonkwo@arrowsmart.com': { name: 'Leo Okonkwo', role: 'Supply Chain Manager', department: 'Operations', location: 'Shenzhen, China' },
    'c.obi@arrowsmart.com': { name: 'Clara Obi', role: 'Retail Associate', department: 'Operations', location: 'San Mateo, CA' },
    'ana.mori@arrowsmart.com': { name: 'Ana Mori', role: 'Store Experience Lead', department: 'Operations', location: 'San Mateo, CA' },
    'd.webb@arrowsmart.com': { name: 'Darius Webb', role: 'IT Infrastructure Manager', department: 'IT', location: 'San Mateo, CA' },
    'n.orlov@arrowsmart.com': { name: 'Natalie Orlov', role: 'Technical Programme Manager', department: 'Engineering', location: 'Seattle, WA' },
    'c.beaumont@arrowsmart.com': { name: 'Claire Beaumont', role: 'Brand Director', department: 'Marketing', location: 'Paris, France' },
    'a.vasquez@arrowsmart.com': { name: 'Amara Vasquez', role: 'HR Director', department: 'HR', location: 'San Mateo, CA' },
    'm.webb@arrowsmart.com': { name: 'Marcus Webb', role: 'Senior Software Engineer', department: 'Engineering', location: 'Remote — US' },
    's.meridian@arrowsmart.com': { name: 'Sophia Meridian', role: 'VP, Platform Engineering', department: 'Engineering', location: 'San Mateo, CA' },
    'm.zhou@arrowsmart.com': { name: 'Mei Lin Zhou', role: 'Data Scientist', department: 'Research', location: 'Cambridge, MA' },
    's.greene@arrowsmart.com': { name: 'Samuel Greene', role: 'Compliance Manager', department: 'Legal', location: 'San Mateo, CA' },
    'r.flores@arrowsmart.com': { name: 'Ramirez Flores', role: 'AR/VR Engineer', department: 'Engineering', location: 'San Mateo, CA' },
    'maya.lin@arrowsmart.com': { name: 'Maya Lin', role: 'Lead Product Designer', department: 'Design', location: 'New York, NY' },
    'i.larsen@arrowsmart.com': { name: 'Ingrid Larsen', role: 'Head of Legal', department: 'Legal', location: 'San Mateo, CA' },
    't.brandt@arrowsmart.com': { name: 'Tobias Brandt', role: 'Finance Director', department: 'Finance', location: 'San Mateo, CA' },
    'f.alrashid@arrowsmart.com': { name: 'Fatima Al-Rashid', role: 'ML Engineer', department: 'Research', location: 'San Mateo, CA' },
    'y.sato@arrowsmart.com': { name: 'Yuki Sato', role: 'Firmware Engineer', department: 'Chip Engineering', location: 'Tokyo, Japan' },
    'raj.kapoor@arrowsmart.com': { name: 'Raj Kapoor', role: 'Silicon Engineer Lead', department: 'Chip Engineering', location: 'San Mateo, CA' },
    'r.hayes@arrowsmart.com': { name: 'R. Hayes', role: 'Security Ops Lead', department: 'Security', location: 'San Mateo, CA' },
    'k.tanaka@arrowsmart.com': { name: 'Kenji Tanaka', role: 'Senior Silicon Engineer', department: 'Chip Engineering', location: 'San Mateo, CA' },
    'm.freeman@arrowsmart.com': { name: 'Marcus Freeman', role: 'Security Analyst', department: 'Security', location: 'San Mateo, CA' },
    'sofia.chen@arrowsmart.com': { name: 'Sofia Chen', role: 'CFO', department: 'Finance', location: 'San Mateo, CA' },
    't.nakamura@arrowsmart.com': { name: 'Takeshi Nakamura', role: 'CTO', department: 'Engineering', location: 'San Mateo, CA' },
    'dr.anand@arrowsmart.com': { name: 'Dr. Priya Anand', role: 'Head of Memory Sciences', department: 'Research', location: 'San Mateo, CA' },
    'james.arrowood@arrowsmart.com': { name: 'James Arrowood', role: 'Chief Strategy Officer', department: 'Executive', location: 'San Mateo, CA' },
    'director@arrowsmart.com': { name: 'Director', role: 'Executive Director', department: 'Executive', location: 'San Mateo, CA' }
  };

  const DEPARTMENT_WORK = {
    Engineering: {
      focus: ['ArrowOS release readiness', 'platform reliability review', 'NEXUS-7 integration planning'],
      tasks: ['Review the latest build and release checklist', 'Close assigned code-review comments', 'Update sprint estimates for the platform team'],
      update: 'Platform release notes are due for the next engineering review.'
    },
    'Chip Engineering': {
      focus: ['AS-9 validation coverage', 'firmware sign-off', 'silicon thermal review'],
      tasks: ['Review the current validation run', 'Update the firmware handoff notes', 'Check open silicon review actions'],
      update: 'The chip team has a new AS-9 validation window on the shared calendar.'
    },
    Design: {
      focus: ['accessibility review', 'product-flow usability', 'design-system consistency'],
      tasks: ['Review open prototype feedback', 'Finalize accessibility notes for the current flow', 'Share design-system changes with product'],
      update: 'The next product critique is collecting updated prototypes and research notes.'
    },
    Marketing: {
      focus: ['campaign performance', 'brand review', 'launch content readiness'],
      tasks: ['Review campaign performance notes', 'Prepare the next brand approval pass', 'Update launch copy for the current product brief'],
      update: 'The upcoming launch review needs final campaign and brand materials.'
    },
    Legal: {
      focus: ['contract review queue', 'policy updates', 'regulatory readiness'],
      tasks: ['Review the next contract in your queue', 'Check policy changes against current guidance', 'Prepare notes for the compliance review'],
      update: 'The quarterly policy review is collecting department feedback.'
    },
    IT: {
      focus: ['infrastructure health', 'access review', 'employee support queue'],
      tasks: ['Review open infrastructure alerts', 'Confirm the access-review exceptions', 'Check aging employee support tickets'],
      update: 'Infrastructure maintenance windows have been refreshed for this month.'
    },
    Research: {
      focus: ['model validation', 'research quality review', 'memory-science study readiness'],
      tasks: ['Review experiment notes before the next run', 'Confirm data-quality checks are recorded', 'Update the validation summary for collaborators'],
      update: 'Research review sessions are being scheduled for the next study cycle.'
    },
    Finance: {
      focus: ['forecast accuracy', 'spend review', 'planning-cycle readiness'],
      tasks: ['Review the latest forecast assumptions', 'Reconcile open spend items', 'Prepare notes for the planning review'],
      update: 'Department forecasts are being collected for the upcoming planning cycle.'
    },
    Security: {
      focus: ['incident readiness', 'access hygiene', 'security operations review'],
      tasks: ['Review the current access exceptions', 'Check incident-response follow-ups', 'Update the security operations handoff'],
      update: 'The security team is refreshing its incident-response coverage schedule.'
    },
    Operations: {
      focus: ['store readiness', 'supply-chain handoffs', 'customer experience'],
      tasks: ['Review the next operations handoff', 'Check open store-readiness items', 'Update the supply-chain exception notes'],
      update: 'Operations is gathering regional readiness updates for the next review.'
    },
    HR: {
      focus: ['employee experience', 'people-operations follow-ups', 'manager support'],
      tasks: ['Review open employee-support follow-ups', 'Prepare the next manager check-in', 'Update people-operations notes for your team'],
      update: 'The people team has refreshed its manager-support resources.'
    },
    Executive: {
      focus: ['company operating priorities', 'cross-functional decisions', 'quarterly strategy review'],
      tasks: ['Review the latest operating-priority notes', 'Follow up on a cross-functional decision', 'Prepare a brief for the next leadership review'],
      update: 'Leadership review materials are being collected for the next operating update.'
    }
  };

  const COURSES = {
    'AS Data Ethics & Privacy 2026': {
      title: 'AS Data Ethics & Privacy 2026', category: 'Company-wide', duration: '45 min',
      description: 'Handle employee and customer data responsibly, with practical privacy scenarios.',
      due: 'Oct 31, 2026', certificate: 'Data Privacy & Ethics'
    },
    'Code of Conduct & Anti-Bribery 2026': {
      title: 'Code of Conduct & Anti-Bribery 2026', category: 'Company-wide', duration: '30 min',
      description: 'Review reporting expectations, conflicts of interest, and anti-bribery standards.',
      due: 'Nov 15, 2026', certificate: 'Ethical Workplace'
    },
    'Security Briefing 2026': {
      title: 'Security Briefing 2026', category: 'Security', duration: '60 min',
      description: 'Annual security briefing for employees with elevated information access.',
      due: 'Oct 20, 2026', certificate: 'Security Operations Briefing'
    },
    'Export Control': {
      title: 'Export Control Compliance Training', category: 'Compliance', duration: '90 min',
      description: 'Recognize controlled technical information and follow approved transfer procedures.',
      due: 'Oct 31, 2026', certificate: 'Export Control Compliance'
    },
    'Chrysalis NDA': {
      title: 'Project Chrysalis Confidentiality Agreement', category: 'Confidentiality', duration: '15 min',
      description: 'Review annual confidentiality obligations for restricted project materials.',
      due: 'Dec 31, 2026', certificate: 'Project Confidentiality'
    },
    'ArrowOS SDK Mastery': {
      title: 'ArrowOS SDK Mastery', category: 'Engineering', duration: '4.5 hrs',
      description: 'Advanced APIs, background tasks, and AS Neural Engine integration.',
      certificate: 'ArrowOS Certified Developer'
    },
    'AS Silicon Architecture': {
      title: 'AS Silicon Architecture Deep Dive', category: 'Hardware', duration: '6 hrs',
      description: 'Inside the AS-9: architecture, thermal management, and power efficiency.',
      certificate: 'AS Silicon Architecture'
    },
    'Leadership Essentials': {
      title: 'Engineering Leadership Essentials', category: 'Leadership', duration: '3 hrs',
      description: 'Technical leadership, mentoring, and running effective design reviews.',
      certificate: 'Leadership Essentials'
    },
    'Machine Learning On-Device': {
      title: 'Machine Learning on AS Neural Engine', category: 'AI / ML', duration: '8 hrs',
      description: 'Quantisation, model optimisation, and on-device inference pipelines.',
      certificate: 'On-Device ML Foundations'
    },
    'Inclusive Design': {
      title: 'Inclusive Design at ArrowSmart', category: 'Design', duration: '2 hrs',
      description: 'Accessibility principles, WCAG 3.0, and designing for diverse users.',
      certificate: 'Inclusive Design'
    },
    'Financial Literacy': {
      title: 'Financial Literacy for Technical Staff', category: 'Finance', duration: '2.5 hrs',
      description: 'Understand equity, RSUs, and how ArrowSmart’s business model works.',
      certificate: 'Financial Literacy'
    }
  };

  const LIBRARY_COURSES = [
    'ArrowOS SDK Mastery',
    'AS Silicon Architecture',
    'Leadership Essentials',
    'Machine Learning On-Device',
    'Inclusive Design',
    'Financial Literacy'
  ];

  const COURSE_POOLS = {
    Engineering: ['ArrowOS SDK Mastery', 'Machine Learning On-Device', 'Leadership Essentials', 'Inclusive Design'],
    'Chip Engineering': ['AS Silicon Architecture', 'ArrowOS SDK Mastery', 'Machine Learning On-Device', 'Leadership Essentials'],
    Design: ['Inclusive Design', 'Leadership Essentials', 'Financial Literacy', 'ArrowOS SDK Mastery'],
    Marketing: ['Inclusive Design', 'Financial Literacy', 'Leadership Essentials', 'ArrowOS SDK Mastery'],
    Legal: ['Financial Literacy', 'Leadership Essentials', 'Inclusive Design', 'ArrowOS SDK Mastery'],
    IT: ['ArrowOS SDK Mastery', 'AS Silicon Architecture', 'Machine Learning On-Device', 'Leadership Essentials'],
    Research: ['Machine Learning On-Device', 'AS Silicon Architecture', 'Financial Literacy', 'ArrowOS SDK Mastery'],
    Finance: ['Financial Literacy', 'Leadership Essentials', 'Machine Learning On-Device', 'Inclusive Design'],
    Security: ['ArrowOS SDK Mastery', 'Leadership Essentials', 'AS Silicon Architecture', 'Financial Literacy'],
    Operations: ['Financial Literacy', 'Leadership Essentials', 'Inclusive Design', 'ArrowOS SDK Mastery'],
    HR: ['Leadership Essentials', 'Inclusive Design', 'Financial Literacy', 'ArrowOS SDK Mastery'],
    Executive: ['Leadership Essentials', 'Financial Literacy', 'Machine Learning On-Device', 'Inclusive Design']
  };

  const ROLE_COURSE_RULES = [
    { match: /retail associate|store experience lead|retail operations lead/i, courses: ['Inclusive Design', 'Leadership Essentials', 'Financial Literacy', 'ArrowOS SDK Mastery'] },
    { match: /supply chain manager/i, courses: ['Financial Literacy', 'ArrowOS SDK Mastery', 'Machine Learning On-Device', 'Leadership Essentials'] },
    { match: /technical programme manager/i, courses: ['Leadership Essentials', 'Financial Literacy', 'Inclusive Design', 'ArrowOS SDK Mastery'] },
    { match: /security/i, courses: ['ArrowOS SDK Mastery', 'Leadership Essentials', 'AS Silicon Architecture', 'Financial Literacy'] },
    { match: /silicon|firmware/i, courses: ['AS Silicon Architecture', 'ArrowOS SDK Mastery', 'Machine Learning On-Device', 'Leadership Essentials'] },
    { match: /data scientist|ml engineer|memory sciences/i, courses: ['Machine Learning On-Device', 'AS Silicon Architecture', 'Financial Literacy', 'ArrowOS SDK Mastery'] },
    { match: /cfo|finance director/i, courses: ['Financial Literacy', 'Leadership Essentials', 'Machine Learning On-Device', 'Inclusive Design'] },
    { match: /legal|compliance/i, courses: ['Financial Literacy', 'Leadership Essentials', 'Inclusive Design', 'ArrowOS SDK Mastery'] },
    { match: /hr /i, courses: ['Leadership Essentials', 'Inclusive Design', 'Financial Literacy', 'ArrowOS SDK Mastery'] },
    { match: /brand director|marketing lead/i, courses: ['Inclusive Design', 'Financial Literacy', 'Leadership Essentials', 'ArrowOS SDK Mastery'] },
    { match: /product designer|ux researcher/i, courses: ['Inclusive Design', 'Leadership Essentials', 'Financial Literacy', 'ArrowOS SDK Mastery'] },
    { match: /infrastructure manager/i, courses: ['ArrowOS SDK Mastery', 'AS Silicon Architecture', 'Machine Learning On-Device', 'Leadership Essentials'] },
    { match: /chief strategy officer|executive director/i, courses: ['Leadership Essentials', 'Financial Literacy', 'Machine Learning On-Device', 'Inclusive Design'] },
    { match: /software engineer|ar\/vr engineer|vp, platform engineering|cto/i, courses: ['ArrowOS SDK Mastery', 'Machine Learning On-Device', 'Leadership Essentials', 'Inclusive Design'] }
  ];

  const ROLE_WORK_RULES = [
    {
      match: /retail associate/i,
      focus: ['daily store readiness', 'customer device setup', 'floor support handoff'],
      tasks: ['Complete the store opening readiness checklist', 'Review customer device-setup feedback', 'Share the shift handoff with the floor lead']
    },
    {
      match: /store experience lead/i,
      focus: ['regional store experience', 'service-flow improvements', 'customer feedback follow-up'],
      tasks: ['Review customer feedback from the latest store cycle', 'Coordinate the next service-flow walkthrough', 'Share regional experience notes with operations']
    },
    {
      match: /retail operations lead/i,
      focus: ['store readiness', 'regional operations review', 'retail service coverage'],
      tasks: ['Review open store-readiness items', 'Confirm regional operations coverage', 'Follow up on service issues from the last review']
    },
    {
      match: /supply chain manager/i,
      focus: ['supplier handoffs', 'shipment exception review', 'regional inventory planning'],
      tasks: ['Review supplier handoffs for open shipments', 'Update the latest delivery exception notes', 'Confirm inventory planning assumptions with regional teams']
    },
    {
      match: /technical programme manager/i,
      focus: ['cross-team milestone readiness', 'NEXUS-7 dependencies', 'release risk tracking'],
      tasks: ['Update cross-team milestone owners', 'Review NEXUS-7 dependency risks', 'Prepare the next engineering status summary']
    },
    {
      match: /security/i,
      focus: ['access review', 'incident response readiness', 'security operations handoff'],
      tasks: ['Review access exceptions for your assigned systems', 'Check incident-response follow-ups', 'Update the security operations handoff']
    },
    {
      match: /silicon|firmware/i,
      focus: ['AS-9 validation coverage', 'firmware sign-off', 'silicon thermal review'],
      tasks: ['Review the current AS-9 validation run', 'Update firmware sign-off notes', 'Check open silicon review actions']
    },
    {
      match: /data scientist|ml engineer|memory sciences/i,
      focus: ['model validation', 'research quality review', 'study readiness'],
      tasks: ['Review experiment notes before the next run', 'Confirm data-quality checks are recorded', 'Update the validation summary for collaborators']
    }
  ];

  const UNREAD_MAIL = [
    { id: 'e001', minLevel: 1 }, { id: 'e002', minLevel: 1 }, { id: 'e003', minLevel: 1 },
    { id: 'e004', minLevel: 2 }, { id: 'e005', minLevel: 2 },
    { id: 'e006', minLevel: 3 }, { id: 'e007', minLevel: 3 },
    { id: 'e008', minLevel: 4 }, { id: 'e009', minLevel: 4 },
    { id: 'e010', minLevel: 5 }, { id: 'e011', minLevel: 5 },
    { id: 'e012', minLevel: 6 }, { id: 'e013', minLevel: 6 }, { id: 'e014', minLevel: 6 },
    { id: 'e015', minLevel: 7 }, { id: 'e016', minLevel: 7 }, { id: 'e017', minLevel: 7 },
    { id: 'e018', minLevel: 8 }, { id: 'e019', minLevel: 8 },
    { id: 'e020', minLevel: 9 }, { id: 'e021', minLevel: 9 }
  ];
  const UNREAD_IDS = new Set(['e001', 'e002', 'e004', 'e007', 'e008', 'e010', 'e011', 'e012', 'e013', 'e015', 'e016', 'e017', 'e018', 'e019', 'e020', 'e021']);

  function hash(value) {
    let result = 2166136261;
    for (let i = 0; i < value.length; i++) {
      result ^= value.charCodeAt(i);
      result = Math.imul(result, 16777619);
    }
    return result >>> 0;
  }

  function resolveEmployee(sessionEmployee) {
    const email = String(sessionEmployee && sessionEmployee.email || '').trim().toLowerCase();
    const profile = EMPLOYEES[email] || {
      name: (sessionEmployee && sessionEmployee.name) || 'Employee',
      role: 'ArrowSmart Employee',
      department: 'General Staff',
      location: 'ArrowSmart'
    };
    return {
      ...profile,
      name: (sessionEmployee && sessionEmployee.name) || profile.name,
      email,
      level: Math.max(1, Math.min(9, Number(sessionEmployee && sessionEmployee.level) || 1)),
      seed: hash(email || profile.name)
    };
  }

  function getUnreadCount(profile) {
    let readIds = [];
    try {
      readIds = JSON.parse(localStorage.getItem('as_mail_read') || '[]');
      if (!Array.isArray(readIds)) readIds = [];
    } catch (_) {}
    const read = new Set(readIds);
    return UNREAD_MAIL.filter(mail => profile.level >= mail.minLevel && UNREAD_IDS.has(mail.id) && !read.has(mail.id)).length;
  }

  function getRequiredCourses(profile) {
    const required = [
      'AS Data Ethics & Privacy 2026',
      'Code of Conduct & Anti-Bribery 2026'
    ];
    if (profile.level >= 5) required.push('Security Briefing 2026');
    if (['Engineering', 'Chip Engineering', 'Research', 'IT', 'Operations'].includes(profile.department)) {
      required.push('Export Control');
    }
    if (profile.level >= 5) required.push('Chrysalis NDA');
    return required;
  }

  function getRecommendations(profile) {
    const roleRule = ROLE_COURSE_RULES.find(rule => rule.match.test(profile.role));
    const pool = roleRule ? roleRule.courses : (COURSE_POOLS[profile.department] || COURSE_POOLS.Engineering);
    const offset = profile.seed % pool.length;
    const rotated = pool.slice(offset).concat(pool.slice(0, offset));
    return rotated.slice(0, 3);
  }

  function getWorkForProfile(profile) {
    const roleRule = ROLE_WORK_RULES.find(rule => rule.match.test(profile.role));
    return roleRule || DEPARTMENT_WORK[profile.department] || DEPARTMENT_WORK.Engineering;
  }

  function stateKey(profile) {
    return 'as_training_progress_v1_' + hash(profile.email || profile.name).toString(36);
  }

  function createTrainingState(profile, trackedCourses, requiredCourses) {
    const requiredOrder = requiredCourses.slice().sort((a, b) =>
      hash(profile.email + a) - hash(profile.email + b)
    );
    const completedCount = 1 + (profile.seed % Math.max(1, requiredOrder.length - 1));
    const completedRequired = new Set(requiredOrder.slice(0, completedCount));
    const courses = {};

    trackedCourses.forEach(course => {
      const courseSeed = hash(profile.email + course);
      let status = 'not-started';
      let progress = 0;
      let completedAt = '';

      if (completedRequired.has(course) || (!requiredCourses.includes(course) && courseSeed % 11 === 0)) {
        status = 'complete';
        progress = 100;
        const month = courseSeed % 7;
        const day = 3 + (courseSeed % 24);
        completedAt = new Date(2026, month, day).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric'
        });
      } else if (requiredCourses.includes(course) && courseSeed % 3 !== 0) {
        status = 'in-progress';
        progress = 15 + (courseSeed % 61);
      } else if (!requiredCourses.includes(course) && courseSeed % 5 === 0) {
        status = 'in-progress';
        progress = 10 + (courseSeed % 51);
      }
      courses[course] = { status, progress, completedAt };
    });

    return { courses };
  }

  function loadTrainingState(profile, trackedCourses, requiredCourses) {
    const key = stateKey(profile);
    let state = null;
    try {
      state = JSON.parse(localStorage.getItem(key) || 'null');
    } catch (_) {}

    if (!state || !state.courses || typeof state.courses !== 'object') {
      state = createTrainingState(profile, trackedCourses, requiredCourses);
    } else {
      const defaults = createTrainingState(profile, trackedCourses, requiredCourses);
      trackedCourses.forEach(course => {
        const entry = state.courses[course];
        if (!entry || !['complete', 'in-progress', 'not-started'].includes(entry.status)) {
          state.courses[course] = defaults.courses[course];
        }
      });
    }
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (_) {}
    return state;
  }

  function saveTrainingState(profile, state) {
    try {
      localStorage.setItem(stateKey(profile), JSON.stringify(state));
    } catch (_) {}
  }

  function normalizeTrainingState(profile, source, trackedCourses, requiredCourses) {
    const defaults = createTrainingState(profile, trackedCourses, requiredCourses);
    const state = { courses: {} };
    const savedCourses = source && source.courses && typeof source.courses === 'object'
      ? source.courses
      : {};

    trackedCourses.forEach(course => {
      const entry = savedCourses[course];
      const valid = entry &&
        ['complete', 'in-progress', 'not-started'].includes(entry.status) &&
        Number.isInteger(entry.progress) &&
        entry.progress >= 0 &&
        entry.progress <= 100;
      state.courses[course] = valid
        ? {
            status: entry.status,
            progress: entry.progress,
            completedAt: typeof entry.completedAt === 'string' ? entry.completedAt : ''
          }
        : defaults.courses[course];
    });
    return state;
  }

  function setTrainingSyncStatus(message, failed) {
    const status = document.getElementById('training-sync-status');
    if (!status) return;
    status.textContent = message;
    status.className = failed
      ? 'text-red-300 text-xs mt-2'
      : 'text-[#94A3B8] text-xs mt-2';
  }

  async function saveTrainingStateToServer(profile, state, trackedCourses, requiredCourses) {
    let response;
    try {
      response = await fetch('/api/training/record', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courses: state.courses })
      });
    } catch (_) {
      throw new Error('Could not reach the server. Your training progress was not saved.');
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(result.error || 'Your training progress could not be saved.');
      error.status = response.status;
      throw error;
    }

    const canonical = normalizeTrainingState(profile, result.record, trackedCourses, requiredCourses);
    saveTrainingState(profile, canonical);
    return canonical;
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function getDashboard(profile) {
    const work = getWorkForProfile(profile);
    const seed = profile.seed;
    const focus = work.focus[seed % work.focus.length];
    const openTasks = 4 + (seed % 6);
    const dueToday = seed % Math.min(4, openTasks + 1);
    const pto = (6 + ((seed >>> 4) % 151) / 10).toFixed(1);
    const openTickets = (seed >>> 8) % 4;
    const resolvedTickets = 1 + ((seed >>> 12) % 5);
    const recommended = getRecommendations(profile);
    const tasks = work.tasks;
    const taskA = tasks[(seed >>> 3) % tasks.length];
    const taskB = tasks[(seed >>> 7) % tasks.length];
    const learningCourse = COURSES[recommended[0]].title;

    return {
      focus,
      focusDetail: `${profile.role} · ${profile.department}`,
      metrics: { openTasks, dueToday, unread: getUnreadCount(profile), pto, rollover: seed % 6, openTickets, resolvedTickets },
      activities: [
        { title: taskA, time: `${1 + (seed % 5)} hours ago`, tone: 'green' },
        { title: `${profile.department} review: ${focus}`, time: 'Yesterday', tone: 'amber' },
        { title: `Learning plan refreshed: ${learningCourse}`, time: `${2 + (seed % 4)} days ago`, tone: 'green' },
        { title: taskB, time: 'This week', tone: 'slate' }
      ],
      announcements: [
        {
          title: `${profile.department} team update`,
          body: work.update
        },
        {
          title: `Recommended learning: ${learningCourse}`,
          body: `Selected for your ${profile.role} role. Your required courses and progress are kept with your employee profile.`
        },
        profile.level >= 5
          ? { title: 'Annual security briefing', body: 'Your clearance requires the FY2026 briefing. Check your training plan for the due date and current status.' }
          : { title: 'FY2026 learning plan', body: `Your current plan is tailored to ${profile.department} and your role as ${profile.role}.` }
      ]
    };
  }

  function renderDashboard(profile) {
    const dashboard = getDashboard(profile);
    const metrics = dashboard.metrics;
    setText('stat-open-tasks', metrics.openTasks);
    setText('stat-tasks-subtitle', `${metrics.dueToday} due today`);
    setText('stat-unread-messages', metrics.unread);
    setText('stat-leadership-messages', `${Math.min(metrics.unread, 1 + (profile.seed % 4))} from leadership`);
    setText('stat-pto-balance', metrics.pto);
    setText('stat-pto-subtitle', `FY2026 rollover: ${metrics.rollover} days`);
    setText('stat-it-tickets', metrics.openTickets);
    setText('stat-it-subtitle', `Open · ${metrics.resolvedTickets} resolved`);
    setText('personal-focus', dashboard.focus);
    setText('personal-focus-detail', dashboard.focusDetail);
    setText('profile-role', profile.role);
    setText('profile-department', profile.department);
    setText('profile-location', profile.location);

    const activityList = document.getElementById('personal-activity');
    if (activityList) {
      activityList.replaceChildren(...dashboard.activities.map(activity => {
        const row = document.createElement('div');
        row.className = 'flex items-start gap-3 p-3 rounded-lg bg-[#1E293B] border border-[#334155]';
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full mt-1.5 shrink-0 ${activity.tone === 'green' ? 'bg-[#10B981]' : activity.tone === 'amber' ? 'bg-amber-400' : 'bg-[#64748B]'}`;
        const copy = document.createElement('div');
        const title = document.createElement('p');
        title.className = 'text-white text-xs font-medium';
        title.textContent = activity.title;
        const time = document.createElement('p');
        time.className = 'text-[#475569] text-xs';
        time.textContent = activity.time;
        copy.append(title, time);
        row.append(dot, copy);
        return row;
      }));
    }

    const announcements = document.getElementById('personal-announcements');
    if (announcements) {
      announcements.replaceChildren(...dashboard.announcements.map(item => {
        const article = document.createElement('div');
        article.className = 'p-4';
        const title = document.createElement('p');
        title.className = 'text-white text-xs font-medium mb-1';
        title.textContent = item.title;
        const body = document.createElement('p');
        body.className = 'text-[#94A3B8] text-xs';
        body.textContent = item.body;
        article.append(title, body);
        return article;
      }));
    }
  }

  function courseButton(label, courseName, className) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = label;
    button.addEventListener('click', () => {
      if (typeof window.startCourse === 'function') window.startCourse(courseName);
    });
    return button;
  }

  function renderMandatoryCourse(courseName, state) {
    const course = COURSES[courseName];
    const progress = state.courses[courseName];
    const row = document.createElement('div');
    row.className = 'px-6 py-4 flex items-center gap-4';

    const statusIcon = document.createElement('div');
    statusIcon.className = `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${progress.status === 'complete' ? 'bg-[#10B981]/10 text-[#10B981]' : progress.status === 'in-progress' ? 'bg-amber-400/10 text-amber-300' : 'bg-[#334155] text-[#94A3B8]'}`;
    statusIcon.textContent = progress.status === 'complete' ? '✓' : progress.status === 'in-progress' ? '↻' : '•';

    const details = document.createElement('div');
    details.className = 'flex-1 min-w-0';
    const title = document.createElement('p');
    title.className = 'text-white text-sm font-medium';
    title.textContent = course.title;
    const meta = document.createElement('p');
    meta.className = 'text-[#94A3B8] text-xs';
    meta.textContent = progress.status === 'complete'
      ? `Completed ${progress.completedAt} · ${course.duration}`
      : `Due ${course.due} · ${course.duration} · MANDATORY`;
    details.append(title, meta);

    if (progress.status !== 'complete') {
      const track = document.createElement('div');
      track.className = 'h-1 rounded-full bg-[#334155] mt-2 w-full';
      const bar = document.createElement('div');
      bar.className = `h-full rounded-full ${progress.status === 'in-progress' ? 'bg-amber-400' : 'bg-[#64748B]'}`;
      bar.style.width = `${progress.progress}%`;
      track.append(bar);
      details.append(track);
    }

    const status = document.createElement('span');
    status.className = progress.status === 'complete'
      ? 'text-[#10B981] text-xs font-bold border border-[#10B981]/20 px-2 py-0.5 rounded shrink-0'
      : 'text-amber-300 text-xs font-bold border border-amber-700/30 px-2 py-0.5 rounded shrink-0';
    status.textContent = progress.status === 'complete' ? 'Complete' : progress.status === 'in-progress' ? 'In progress' : 'Required';
    row.append(statusIcon, details, status);

    if (progress.status !== 'complete') {
      row.append(courseButton(
        progress.status === 'in-progress' ? 'Resume' : 'Start',
        courseName,
        'text-[#94A3B8] text-xs border border-[#334155] hover:border-[#10B981]/30 px-3 py-1.5 rounded transition-colors shrink-0'
      ));
    }
    return row;
  }

  function renderCourseCard(courseName, state, recommended) {
    const course = COURSES[courseName];
    const progress = state.courses[courseName];
    const card = document.createElement('article');
    card.className = 'p-5 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#10B981]/40 transition-colors group';

    const meta = document.createElement('div');
    meta.className = 'flex items-center justify-between gap-2 mb-3';
    const tag = document.createElement('span');
    tag.className = 'text-[10px] bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 rounded px-2 py-0.5';
    tag.textContent = course.category;
    const duration = document.createElement('span');
    duration.className = 'text-[#94A3B8] text-xs';
    duration.textContent = course.duration;
    meta.append(tag, duration);

    const title = document.createElement('h3');
    title.className = 'text-white font-bold text-sm mb-1 group-hover:text-[#10B981] transition-colors';
    title.textContent = course.title;
    const description = document.createElement('p');
    description.className = 'text-[#94A3B8] text-xs leading-relaxed min-h-10';
    description.textContent = course.description;
    const status = document.createElement('p');
    status.className = 'text-xs mt-4 mb-3';
    status.textContent = progress.status === 'complete'
      ? `Complete${progress.completedAt ? ` · ${progress.completedAt}` : ''}`
      : progress.status === 'in-progress'
        ? `In progress · ${progress.progress}%`
        : recommended ? 'Recommended for your role' : 'Available in the course library';
    status.className += progress.status === 'complete' ? ' text-[#10B981]' : ' text-[#94A3B8]';
    card.append(meta, title, description, status, courseButton(
      progress.status === 'in-progress' ? 'Resume course' : progress.status === 'complete' ? 'Review course' : 'Start course',
      courseName,
      'text-[#10B981] text-xs font-semibold border border-[#10B981]/20 hover:bg-[#10B981]/10 px-3 py-1.5 rounded transition-colors'
    ));
    return card;
  }

  function renderCertifications(profile, state, trackedCourses) {
    const container = document.getElementById('certifications-grid');
    if (!container) return;
    const earned = trackedCourses
      .filter(courseName => state.courses[courseName] && state.courses[courseName].status === 'complete' && COURSES[courseName].certificate)
      .map(courseName => ({
        title: COURSES[courseName].certificate,
        date: state.courses[courseName].completedAt
      }))
      .slice(0, 3);

    if (!earned.length) {
      const empty = document.createElement('div');
      empty.className = 'p-5 rounded-xl bg-[#1E293B] border border-[#334155] text-[#94A3B8] text-sm sm:col-span-3';
      empty.textContent = 'No certificates yet. Complete an assigned course to earn your first credential.';
      container.replaceChildren(empty);
      return;
    }

    container.replaceChildren(...earned.map(certificate => {
      const card = document.createElement('div');
      card.className = 'p-5 rounded-xl bg-[#1E293B] border border-[#10B981]/20 text-center';
      const icon = document.createElement('div');
      icon.className = 'w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-3 text-[#10B981] text-xl';
      icon.textContent = '✓';
      const title = document.createElement('p');
      title.className = 'text-white font-bold text-sm';
      title.textContent = certificate.title;
      const date = document.createElement('p');
      date.className = 'text-[#94A3B8] text-xs mt-1';
      date.textContent = `Issued ${certificate.date} · ${profile.department}`;
      card.append(icon, title, date);
      return card;
    }));
  }

  function renderTraining(profile, savedState) {
    const required = getRequiredCourses(profile);
    const recommendations = getRecommendations(profile);
    const trackedCourses = Array.from(new Set([...required, ...recommendations, ...LIBRARY_COURSES]));
    const state = savedState || loadTrainingState(profile, trackedCourses, required);
    const completed = required.filter(course => state.courses[course].status === 'complete').length;

    setText('training-personalized-subtitle', `Learning plan for ${profile.role} · ${profile.department}`);
    setTrainingSyncStatus('Progress synced to your ArrowSmart account.', false);
    setText('mandatory-count', `${completed} of ${required.length} complete`);
    setText('training-recommendation-copy', `Selected for your work in ${profile.department}. Your recommended path starts with ${COURSES[recommendations[0]].title}.`);

    const mandatoryList = document.getElementById('mandatory-training-list');
    if (mandatoryList) mandatoryList.replaceChildren(...required.map(course => renderMandatoryCourse(course, state)));

    const recommendedGrid = document.getElementById('recommended-course-grid');
    if (recommendedGrid) recommendedGrid.replaceChildren(...recommendations.map(course => renderCourseCard(course, state, true)));

    const libraryGrid = document.getElementById('course-library-grid');
    if (libraryGrid) libraryGrid.replaceChildren(...LIBRARY_COURSES.map(course => renderCourseCard(course, state, false)));

    renderCertifications(profile, state, trackedCourses);
    return { profile, required, recommendations, trackedCourses, state };
  }

  let activeTraining = null;

  async function markCourseStarted(courseName) {
    if (!activeTraining || !COURSES[courseName]) return false;
    const { profile, trackedCourses, required } = activeTraining;
    const state = {
      courses: Object.fromEntries(Object.entries(activeTraining.state.courses).map(([name, entry]) => [name, { ...entry }]))
    };
    const current = state.courses[courseName] || { status: 'not-started', progress: 0, completedAt: '' };
    if (current.status !== 'complete') {
      current.status = 'in-progress';
      current.progress = Math.min(90, Math.max(15, current.progress || 0) + 15);
      state.courses[courseName] = current;
      try {
        const savedState = await saveTrainingStateToServer(profile, state, trackedCourses, required);
        activeTraining = renderTraining(profile, savedState);
        return true;
      } catch (error) {
        setTrainingSyncStatus(error.message, true);
        throw error;
      }
    }
    return false;
  }

  async function renderTrainingPage(sessionEmployee) {
    const profile = resolveEmployee(sessionEmployee);
    const required = getRequiredCourses(profile);
    const recommendations = getRecommendations(profile);
    const trackedCourses = Array.from(new Set([...required, ...recommendations, ...LIBRARY_COURSES]));
    setTrainingSyncStatus('Loading your saved training progress…', false);

    let response;
    try {
      response = await fetch('/api/training/record', {
        credentials: 'same-origin',
        cache: 'no-store'
      });
    } catch (_) {
      const error = new Error('Could not reach the server. Training records are unavailable.');
      setTrainingSyncStatus(error.message, true);
      throw error;
    }

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(result.error || 'Training records could not be loaded.');
      error.status = response.status;
      setTrainingSyncStatus(error.message, true);
      throw error;
    }

    let state;
    const hasServerRecord = result.record && result.record.courses;
    if (hasServerRecord) {
      state = normalizeTrainingState(profile, result.record, trackedCourses, required);
      const hasEveryCourse = trackedCourses.every(course => result.record.courses[course]);
      if (!hasEveryCourse) {
        state = await saveTrainingStateToServer(profile, state, trackedCourses, required);
      } else {
        saveTrainingState(profile, state);
      }
    } else {
      const legacyState = loadTrainingState(profile, trackedCourses, required);
      state = normalizeTrainingState(profile, legacyState, trackedCourses, required);
      state = await saveTrainingStateToServer(profile, state, trackedCourses, required);
    }

    activeTraining = renderTraining(profile, state);
    return profile;
  }

  window.ASPersonalization = {
    resolveEmployee,
    renderDashboard,
    renderTrainingPage,
    markCourseStarted,
    showTrainingSyncError: error => setTrainingSyncStatus(error && error.message || 'Training progress could not be synchronized.', true),
    getDashboard,
    getRequiredCourses,
    getRecommendations,
    getUnreadCount,
    employeeCount: Object.keys(EMPLOYEES).length
  };
})(window);