const state = {
  view: "overview",
  status: "all",
  crmStage: "all",
  approvalFilter: "all",
  propertyManagementFilter: "all",
  tradeFilter: "all",
  technicianFilter: "all",
  projectManagerFilter: "all",
  unitCostFilter: "all",
  clientPriceFilter: "all",
  billingStatusFilter: "all",
  search: "",
  syncCount: 0,
  projects: [
    {
      name: "Riverside Medical Office",
      client: "Pinnacle Health",
      phase: "MEP Rough-In",
      trade: "MEP",
      propertyManagement: "AppFolio",
      budget: 4820000,
      schedule: 76,
      margin: 17.8,
      owner: "A. Mitchell",
      projectManager: "A. Mitchell",
      technician: "Marco Diaz",
      unitCostApproved: true,
      clientUnitPriceApproved: true,
      billingStatus: "paid",
      workStatus: "work-in-progress",
      status: "on-track",
      risks: 1
    },
    {
      name: "Oakline Distribution Center",
      client: "Harbor Logistics",
      phase: "Sitework",
      trade: "Sitework",
      propertyManagement: "Buildium",
      budget: 12600000,
      schedule: 41,
      margin: 13.2,
      owner: "J. Rivera",
      projectManager: "J. Rivera",
      technician: "Hannah Lee",
      unitCostApproved: true,
      clientUnitPriceApproved: false,
      billingStatus: "need-invoice",
      workStatus: "work-in-progress",
      status: "watch",
      risks: 3
    },
    {
      name: "Cedar Court Renovation",
      client: "Mason Properties",
      phase: "Finishes",
      trade: "Finishes",
      propertyManagement: "Buildium",
      budget: 1880000,
      schedule: 88,
      margin: 21.4,
      owner: "T. Brooks",
      projectManager: "T. Brooks",
      technician: "Eli Carter",
      unitCostApproved: true,
      clientUnitPriceApproved: true,
      billingStatus: "paid",
      workStatus: "completed",
      status: "on-track",
      risks: 0
    },
    {
      name: "Summit School Addition",
      client: "Summit District",
      phase: "Procurement",
      trade: "HVAC",
      propertyManagement: "Yardi",
      budget: 7350000,
      schedule: 23,
      margin: 10.9,
      owner: "N. Patel",
      projectManager: "N. Patel",
      technician: "Sofia Nguyen",
      unitCostApproved: false,
      clientUnitPriceApproved: false,
      billingStatus: "overdue",
      workStatus: "work-in-progress",
      status: "critical",
      risks: 5
    }
  ],
  crm: [
    {
      company: "Atlas Property Group",
      contact: "Mara Evans",
      stage: "lead",
      value: 640000,
      probability: 28,
      nextStep: "Discovery call",
      due: "Today",
      mrr: 0,
      plan: "Preconstruction"
    },
    {
      company: "Foundry Homes",
      contact: "Luis Grant",
      stage: "qualified",
      value: 1250000,
      probability: 46,
      nextStep: "Site visit",
      due: "Jun 15",
      mrr: 1800,
      plan: "CRM + Estimating"
    },
    {
      company: "Northline Development",
      contact: "Priya Shah",
      stage: "proposal",
      value: 2850000,
      probability: 68,
      nextStep: "Proposal review",
      due: "Jun 17",
      mrr: 3200,
      plan: "Full Suite"
    },
    {
      company: "Pinnacle Health",
      contact: "Owen Brooks",
      stage: "won",
      value: 4820000,
      probability: 100,
      nextStep: "Renewal check-in",
      due: "Jul 01",
      mrr: 5400,
      plan: "Enterprise"
    }
  ],
  subscriptions: [
    ["Pinnacle Health", "Enterprise", 5400, "Renews Jul 01"],
    ["Foundry Homes", "CRM + Estimating", 1800, "Renews Aug 12"],
    ["Northline Development", "Full Suite", 3200, "Renews Jun 28"]
  ],
  connectors: [
    {
      name: "AppFolio",
      method: "API read access",
      status: "Connected",
      lastSync: "8 min ago"
    },
    {
      name: "Buildium",
      method: "Scheduled export",
      status: "Ready",
      lastSync: "22 min ago"
    },
    {
      name: "Yardi",
      method: "Database view",
      status: "Pending credentials",
      lastSync: "Not synced"
    }
  ],
  technicians: [
    { name: "Marco Diaz", skills: ["Water", "General Repair"], available: true, openJobs: 1 },
    { name: "Eli Carter", skills: ["Finish", "Cabinetry", "Drywall"], available: true, openJobs: 1 },
    { name: "Hannah Lee", skills: ["Doors", "Hardware", "Concrete"], available: true, openJobs: 2 },
    { name: "Sofia Nguyen", skills: ["HVAC", "Inspection"], available: false, openJobs: 3 },
    { name: "Ravi Singh", skills: ["HVAC", "General Repair"], available: true, openJobs: 0 }
  ],
  workOrders: [
    {
      id: "WO-10482",
      source: "AppFolio",
      property: "Harbor Lofts",
      unit: "4B",
      tenant: "Elena Morris",
      manager: "Mara Evans",
      projectManager: "A. Mitchell",
      technician: "Marco Diaz",
      type: "Water intrusion repair",
      trade: "Water",
      appointment: "Today 2:00 PM",
      crew: "Riverside Service",
      unitCostApproved: true,
      clientUnitPriceApproved: true,
      billingStatus: "paid",
      workStatus: "work-in-progress",
      communication: "Tenant confirmed, manager copied",
      automation: {
        accepted: true,
        propertyConfirmation: "Sent through AppFolio",
        tenantChannel: "SMS + email",
        tenantVerification: "Verified",
        details: "Photos received, leak source noted",
        availability: "Tue/Thu afternoon",
        assignment: "Technician match complete"
      },
      dispatch: {
        verificationAccurate: true,
        enabled: true,
        assignedTechnician: "Marco Diaz",
        timer: "Accepted in app",
        techResponse: "accepted",
        adminAlert: false,
        phoneOutcome: "Not needed",
        kpiNote: "Accepted promptly",
        reassignmentCount: 0,
        tenantPreferredSlots: ["Tue 1:00 PM", "Thu 3:30 PM"],
        earliestAvailability: "Mon 10:00 AM",
        selectedSchedule: "Tue 1:00 PM",
        scheduleSource: "Tenant preferred",
        tenantScheduleNotified: true,
        tenantConfirmedSchedule: true
      },
      status: "confirmed",
      protected: true
    },
    {
      id: "WO-10495",
      source: "Buildium",
      property: "Cedar Court",
      unit: "12A",
      tenant: "Andre Lewis",
      manager: "Kim Porter",
      projectManager: "T. Brooks",
      technician: "Eli Carter",
      type: "Drywall patch and paint",
      trade: "Drywall",
      appointment: "Tomorrow 9:30 AM",
      crew: "Finish Crew B",
      unitCostApproved: true,
      clientUnitPriceApproved: false,
      billingStatus: "need-invoice",
      workStatus: "work-in-progress",
      communication: "Reminder queued",
      automation: {
        accepted: true,
        propertyConfirmation: "Sent through Buildium",
        tenantChannel: "SMS",
        tenantVerification: "Pending reply",
        details: "Photo request sent",
        availability: "Collecting this week",
        assignment: "Waiting on tenant availability"
      },
      dispatch: {
        verificationAccurate: false,
        enabled: false,
        assignedTechnician: "Unassigned",
        timer: "Waiting for admin verification",
        techResponse: "not-sent",
        adminAlert: false,
        phoneOutcome: "Not started",
        kpiNote: "Verification pending",
        reassignmentCount: 0,
        tenantPreferredSlots: ["Wed 9:00 AM", "Fri 2:00 PM"],
        earliestAvailability: "Tue 8:30 AM",
        selectedSchedule: "Not selected",
        scheduleSource: "Waiting",
        tenantScheduleNotified: false,
        tenantConfirmedSchedule: false
      },
      status: "scheduled",
      protected: true
    },
    {
      id: "WO-10511",
      source: "AppFolio",
      property: "North Bank Retail",
      unit: "Suite 210",
      tenant: "Bright Bean Cafe",
      manager: "Owen Brooks",
      projectManager: "J. Rivera",
      technician: "Hannah Lee",
      type: "Door hardware replacement",
      trade: "Doors",
      appointment: "Jun 16 11:00 AM",
      crew: "Service Tech 3",
      unitCostApproved: false,
      clientUnitPriceApproved: true,
      billingStatus: "overdue",
      workStatus: "work-in-progress",
      communication: "Tenant response needed",
      automation: {
        accepted: true,
        propertyConfirmation: "Sent through AppFolio",
        tenantChannel: "Email",
        tenantVerification: "Follow-up needed",
        details: "Need hardware photos",
        availability: "No times selected",
        assignment: "Hold technician assignment"
      },
      dispatch: {
        verificationAccurate: false,
        enabled: false,
        assignedTechnician: "Unassigned",
        timer: "Waiting for tenant response",
        techResponse: "not-sent",
        adminAlert: false,
        phoneOutcome: "Not started",
        kpiNote: "Tenant details incomplete",
        reassignmentCount: 0,
        tenantPreferredSlots: [],
        earliestAvailability: "Thu 11:00 AM",
        selectedSchedule: "Not selected",
        scheduleSource: "Waiting",
        tenantScheduleNotified: false,
        tenantConfirmedSchedule: false
      },
      status: "needs-response",
      protected: false
    },
    {
      id: "WO-10518",
      source: "Yardi",
      property: "Summit School Staff Housing",
      unit: "2C",
      tenant: "Lena Ortiz",
      manager: "Priya Shah",
      projectManager: "N. Patel",
      technician: "Unassigned",
      type: "HVAC noise inspection",
      trade: "HVAC",
      appointment: "Unscheduled",
      crew: "Unassigned",
      unitCostApproved: false,
      clientUnitPriceApproved: false,
      billingStatus: "need-invoice",
      workStatus: "work-in-progress",
      communication: "Manager approval needed",
      automation: {
        accepted: false,
        propertyConfirmation: "Waiting for work order acceptance",
        tenantChannel: "Not started",
        tenantVerification: "Not started",
        details: "Not requested",
        availability: "Not requested",
        assignment: "Needs PM review"
      },
      dispatch: {
        verificationAccurate: false,
        enabled: false,
        assignedTechnician: "Unassigned",
        timer: "Work order not accepted",
        techResponse: "not-sent",
        adminAlert: false,
        phoneOutcome: "Not started",
        kpiNote: "Awaiting acceptance",
        reassignmentCount: 0,
        tenantPreferredSlots: [],
        earliestAvailability: "Fri 9:00 AM",
        selectedSchedule: "Not selected",
        scheduleSource: "Waiting",
        tenantScheduleNotified: false,
        tenantConfirmedSchedule: false
      },
      status: "hold",
      protected: false
    }
  ],
  estimates: [
    ["Maple Street Apartments", "$9.4M", "Due Jun 18", 72],
    ["North Bank Retail Shell", "$2.1M", "Client review", 46],
    ["Foundry Lab Fit-Out", "$4.8M", "Vendor pricing", 63]
  ],
  approvalCadence: [3, 5, 7, 14, 30, 60, 90],
  estimateApprovals: [
    {
      id: "EST-2408",
      project: "Maple Street Apartments",
      client: "Northline Development",
      manager: "Priya Shah",
      estimator: "Caleb Stone",
      amount: 9400000,
      daysWaiting: 3,
      status: "due",
      lastUpdate: "Sent for approval"
    },
    {
      id: "EST-2412",
      project: "North Bank Retail Shell",
      client: "Harbor Logistics",
      manager: "Owen Brooks",
      estimator: "Dana Cooper",
      amount: 2100000,
      daysWaiting: 7,
      status: "due",
      lastUpdate: "Scope clarification answered"
    },
    {
      id: "EST-2417",
      project: "Foundry Lab Fit-Out",
      client: "Foundry Homes",
      manager: "Luis Grant",
      estimator: "Caleb Stone",
      amount: 4800000,
      daysWaiting: 16,
      status: "overdue",
      lastUpdate: "Waiting on management approval"
    },
    {
      id: "EST-2399",
      project: "Cedar Court Renovation",
      client: "Mason Properties",
      manager: "Kim Porter",
      estimator: "Dana Cooper",
      amount: 1880000,
      daysWaiting: 0,
      status: "approved",
      lastUpdate: "Approved yesterday"
    }
  ],
  schedule: [
    ["Concrete pour", "Oakline DC", "Tomorrow", "Crew confirmed", "J. Rivera", "Hannah Lee"],
    ["AHU delivery", "Riverside Medical", "Jun 17", "Crane window held", "A. Mitchell", "Marco Diaz"],
    ["Punch walk", "Cedar Court", "Jun 19", "Owner invited", "T. Brooks", "Eli Carter"],
    ["Permit resubmittal", "Summit School", "Today", "Architect response needed", "N. Patel", "Sofia Nguyen"]
  ],
  priorities: [
    ["Approve change order 014", "Riverside Medical", "Revenue impact $82K"],
    ["Escalate steel shop drawings", "Summit School", "Blocking procurement"],
    ["Follow up proposal approval", "Northline Development", "Pipeline impact $2.85M"],
    ["Close daily safety observation", "Cedar Court", "One open action"]
  ],
  cash: [32, 46, 38, 64, 58, 77]
};

const viewCopy = {
  overview: ["Company Overview", "Portfolio", "Project Control Board"],
  crm: ["CRM", "Sales", "Lead, Sales, and Subscription Tracking"],
  integrations: ["Integrations", "Property Management", "Work Order Sync and Appointment Communication"],
  projects: ["Projects", "Portfolio", "Project Control Board"],
  estimates: ["Estimating", "Preconstruction", "Bid Pipeline and Award Readiness"],
  schedule: ["Schedule", "Field Operations", "Lookahead and Milestones"],
  costs: ["Costs", "Finance", "Budget, Change Orders, and Cash Flow"],
  crew: ["Crew", "Labor", "Assignments and Utilization"],
  safety: ["Safety", "Compliance", "Incidents, Inspections, and Observations"],
  docs: ["Documents", "Admin", "RFIs, Submittals, Permits, and Contracts"]
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const projectRows = document.querySelector("#projectRows");
const metricProjects = document.querySelector("#metricProjects");
const metricValue = document.querySelector("#metricValue");
const metricWorkOrders = document.querySelector("#metricWorkOrders");
const metricWorkOrderTrend = document.querySelector("#metricWorkOrderTrend");
const metricApprovals = document.querySelector("#metricApprovals");
const metricApprovalTrend = document.querySelector("#metricApprovalTrend");
const metricProjectTrend = document.querySelector("#metricProjectTrend");
const propertyManagementFilter = document.querySelector("#propertyManagementFilter");
const tradeFilter = document.querySelector("#tradeFilter");
const technicianFilter = document.querySelector("#technicianFilter");
const projectManagerFilter = document.querySelector("#projectManagerFilter");
const unitCostFilter = document.querySelector("#unitCostFilter");
const clientPriceFilter = document.querySelector("#clientPriceFilter");
const billingStatusFilter = document.querySelector("#billingStatusFilter");
const clearFiltersButton = document.querySelector("#clearFiltersButton");
const viewTitle = document.querySelector("#viewTitle");
const tableEyebrow = document.querySelector("#tableEyebrow");
const sectionTitle = document.querySelector("#sectionTitle");
const estimateCards = document.querySelector("#estimateCards");
const scheduleList = document.querySelector("#scheduleList");
const priorityList = document.querySelector("#priorityList");
const cashChart = document.querySelector("#cashChart");
const crmPipeline = document.querySelector("#crmPipeline");
const subscriptionList = document.querySelector("#subscriptionList");
const activityList = document.querySelector("#activityList");
const crmMrr = document.querySelector("#crmMrr");
const crmRenewals = document.querySelector("#crmRenewals");
const connectorList = document.querySelector("#connectorList");
const workOrderRows = document.querySelector("#workOrderRows");
const communicationList = document.querySelector("#communicationList");
const automationList = document.querySelector("#automationList");
const technicianScheduleBoard = document.querySelector("#technicianScheduleBoard");
const crewInfoBoard = document.querySelector("#crewInfoBoard");
const approvalBoard = document.querySelector("#approvalBoard");
const cadenceList = document.querySelector("#cadenceList");
const projectDialog = document.querySelector("#projectDialog");
const projectForm = document.querySelector("#projectForm");
const leadDialog = document.querySelector("#leadDialog");
const leadForm = document.querySelector("#leadForm");

function formatStatus(status) {
  return status
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function matchesQuery(values) {
  const query = state.search.trim().toLowerCase();
  return !query || values.join(" ").toLowerCase().includes(query);
}

function optionList(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function renderFilterOptions() {
  const propertySources = optionList([
    ...state.connectors.map((connector) => connector.name),
    ...state.projects.map((project) => project.propertyManagement),
    ...state.workOrders.map((order) => order.source)
  ]);
  const trades = optionList([
    ...state.projects.map((project) => project.trade),
    ...state.workOrders.map((order) => order.trade)
  ]);
  const technicians = optionList([
    ...state.projects.map((project) => project.technician),
    ...state.workOrders.map((order) => order.dispatch?.assignedTechnician || order.technician),
    ...state.technicians.map((technician) => technician.name)
  ]).filter((name) => name !== "Unassigned");
  const projectManagers = optionList([
    ...state.projects.map((project) => project.projectManager),
    ...state.workOrders.map((order) => order.projectManager)
  ]).filter((name) => name !== "Unassigned");

  propertyManagementFilter.innerHTML = `
    <option value="all">All property management</option>
    ${propertySources.map((source) => `<option value="${source}">${source}</option>`).join("")}
  `;
  tradeFilter.innerHTML = `
    <option value="all">All trades</option>
    ${trades.map((trade) => `<option value="${trade}">${trade}</option>`).join("")}
  `;
  technicianFilter.innerHTML = `
    <option value="all">All technicians</option>
    ${technicians.map((technician) => `<option value="${technician}">${technician}</option>`).join("")}
  `;
  projectManagerFilter.innerHTML = `
    <option value="all">All project managers</option>
    ${projectManagers.map((manager) => `<option value="${manager}">${manager}</option>`).join("")}
  `;
  propertyManagementFilter.value = state.propertyManagementFilter;
  tradeFilter.value = state.tradeFilter;
  technicianFilter.value = state.technicianFilter;
  projectManagerFilter.value = state.projectManagerFilter;
  unitCostFilter.value = state.unitCostFilter;
  clientPriceFilter.value = state.clientPriceFilter;
  billingStatusFilter.value = state.billingStatusFilter;
}

function approvalFilterMatch(value, filter) {
  return filter === "all" || (filter === "approved" && value) || (filter === "missing" && !value);
}

function billingFilterMatch(item) {
  return state.billingStatusFilter === "all"
    || item.billingStatus === state.billingStatusFilter
    || item.workStatus === state.billingStatusFilter;
}

function appointmentSortValue(appointment) {
  if (appointment === "Today 2:00 PM") return 1;
  if (appointment === "Tomorrow 9:30 AM") return 2;
  if (appointment === "Unscheduled") return 99;
  const match = appointment.match(/Jun (\d+)/);
  return match ? Number(match[1]) : 50;
}

function filteredProjects() {
  return state.projects.filter((project) => {
    const statusMatch = state.status === "all" || project.status === state.status;
    const propertyMatch = state.propertyManagementFilter === "all" || project.propertyManagement === state.propertyManagementFilter;
    const tradeMatch = state.tradeFilter === "all" || project.trade === state.tradeFilter;
    const technicianMatch = state.technicianFilter === "all" || project.technician === state.technicianFilter;
    const managerMatch = state.projectManagerFilter === "all" || project.projectManager === state.projectManagerFilter;
    const unitCostMatch = approvalFilterMatch(project.unitCostApproved, state.unitCostFilter);
    const clientPriceMatch = approvalFilterMatch(project.clientUnitPriceApproved, state.clientPriceFilter);
    const billingMatch = billingFilterMatch(project);
    const searchMatch = matchesQuery([
      project.name,
      project.client,
      project.phase,
      project.owner,
      project.trade,
      project.propertyManagement,
      project.technician,
      project.projectManager,
      project.billingStatus,
      project.workStatus
    ]);
    return statusMatch && propertyMatch && tradeMatch && technicianMatch && managerMatch && unitCostMatch && clientPriceMatch && billingMatch && searchMatch;
  });
}

function filteredCrm() {
  return state.crm.filter((lead) => {
    const stageMatch = state.crmStage === "all" || lead.stage === state.crmStage;
    const searchMatch = matchesQuery([lead.company, lead.contact, lead.stage, lead.nextStep, lead.plan]);
    return stageMatch && searchMatch;
  });
}

function filteredWorkOrders() {
  return state.workOrders.filter((order) => {
    const propertyMatch = state.propertyManagementFilter === "all" || order.source === state.propertyManagementFilter;
    const tradeMatch = state.tradeFilter === "all" || order.trade === state.tradeFilter;
    const assignedTechnician = order.dispatch?.assignedTechnician || order.technician;
    const technicianMatch = state.technicianFilter === "all" || assignedTechnician === state.technicianFilter;
    const managerMatch = state.projectManagerFilter === "all" || order.projectManager === state.projectManagerFilter;
    const unitCostMatch = approvalFilterMatch(order.unitCostApproved, state.unitCostFilter);
    const clientPriceMatch = approvalFilterMatch(order.clientUnitPriceApproved, state.clientPriceFilter);
    const billingMatch = billingFilterMatch(order);
    const searchMatch = matchesQuery([
      order.id,
      order.source,
      order.property,
      order.unit,
      order.tenant,
      order.manager,
      order.projectManager,
      order.technician,
      order.type,
      order.trade,
      order.appointment,
      order.communication,
      order.automation.propertyConfirmation,
      order.automation.tenantVerification,
      order.automation.details,
      order.automation.availability,
      order.automation.assignment,
      order.dispatch.assignedTechnician,
      order.dispatch.techResponse,
      order.dispatch.phoneOutcome,
      order.dispatch.kpiNote,
      order.dispatch.selectedSchedule,
      order.dispatch.scheduleSource,
      order.billingStatus,
      order.workStatus,
      order.status
    ]);
    return propertyMatch && tradeMatch && technicianMatch && managerMatch && unitCostMatch && clientPriceMatch && billingMatch && searchMatch;
  });
}

function dispatchPillClass(order) {
  if (order.dispatch.techResponse === "accepted") return "on-track";
  if (order.dispatch.adminAlert || order.dispatch.techResponse === "declined") return "critical";
  if (order.dispatch.enabled) return "watch";
  return "critical";
}

function dispatchStatusLabel(order) {
  if (!order.dispatch.verificationAccurate) return "Verification Needed";
  if (!order.dispatch.enabled) return "Ready to Dispatch";
  if (order.dispatch.techResponse === "accepted") return "Accepted";
  if (order.dispatch.techResponse === "declined") return "Declined";
  if (order.dispatch.adminAlert) return "Admin Call";
  return "15 Min Pending";
}

function scheduleStatusLabel(order) {
  if (order.dispatch.tenantConfirmedSchedule) return "Tenant Confirmed";
  if (order.dispatch.tenantScheduleNotified) return "Tenant Confirmation Needed";
  if (order.dispatch.techResponse === "accepted") return "Ready to Schedule";
  return "Waiting for Tech Acceptance";
}

function findMatchedTechnician(order, exclude = []) {
  const type = order.type.toLowerCase();
  const skillHints = [
    ["water", "Water"],
    ["leak", "Water"],
    ["drywall", "Drywall"],
    ["paint", "Finish"],
    ["cabinet", "Cabinetry"],
    ["door", "Doors"],
    ["hardware", "Hardware"],
    ["hvac", "HVAC"],
    ["inspection", "Inspection"]
  ];
  const neededSkill = skillHints.find(([keyword]) => type.includes(keyword))?.[1] || "General Repair";
  const candidates = state.technicians
    .filter((tech) => tech.available && !exclude.includes(tech.name))
    .filter((tech) => tech.skills.includes(neededSkill) || tech.skills.includes("General Repair"))
    .sort((a, b) => a.openJobs - b.openJobs);
  return candidates[0] || state.technicians.find((tech) => tech.available && !exclude.includes(tech.name));
}

function nextFollowUpDay(daysWaiting) {
  return state.approvalCadence.find((day) => day >= daysWaiting) || 90;
}

function filteredApprovals() {
  return state.estimateApprovals.filter((approval) => {
    const filterMatch = state.approvalFilter === "all" || approval.status === state.approvalFilter;
    const searchMatch = matchesQuery([
      approval.id,
      approval.project,
      approval.client,
      approval.manager,
      approval.estimator,
      approval.status,
      approval.lastUpdate
    ]);
    return filterMatch && searchMatch;
  });
}

function renderMetrics() {
  const totalValue = state.projects.reduce((sum, project) => sum + project.budget, 0);
  const onTrack = state.projects.filter((project) => project.status === "on-track").length;
  const protectedAppointments = state.workOrders.filter((order) => order.protected).length;
  const pendingApprovals = state.estimateApprovals.filter((approval) => approval.status !== "approved");
  const dueApprovals = pendingApprovals.filter((approval) => approval.status === "due" || approval.status === "overdue");

  metricProjects.textContent = state.projects.length;
  metricValue.textContent = money.format(totalValue);
  metricWorkOrders.textContent = state.workOrders.length;
  metricWorkOrderTrend.textContent = `${protectedAppointments} appointments protected`;
  metricApprovals.textContent = pendingApprovals.length;
  metricApprovalTrend.textContent = `${dueApprovals.length} follow-ups due`;
  metricProjectTrend.textContent = `${onTrack} on track`;
  document.querySelector("#sidebarHealth").textContent = `${Math.max(72, 98 - dueApprovals.length)}%`;
}

function renderIntegrations() {
  connectorList.innerHTML = state.connectors.map((connector) => `
    <article class="connector-card">
      <div class="stack-top">
        <strong>${connector.name}</strong>
        <span class="status-pill ${connector.status === "Connected" ? "on-track" : connector.status === "Ready" ? "watch" : "critical"}">${connector.status}</span>
      </div>
      <span class="muted">${connector.method}</span>
      <span class="muted">Last sync: ${connector.lastSync}</span>
    </article>
  `).join("");

  const orders = filteredWorkOrders();
  workOrderRows.innerHTML = orders.map((order) => `
    <tr>
      <td>
        <strong>${order.id}</strong>
        <span>${order.type} | ${order.trade} | ${order.source}</span>
        <span>Cost: ${order.unitCostApproved ? "approved" : "missing"} | Client price: ${order.clientUnitPriceApproved ? "approved" : "missing"}</span>
      </td>
      <td>
        <strong>${order.property}</strong>
        <span>Unit ${order.unit}</span>
      </td>
      <td>
        <strong>${order.tenant}</strong>
        <span>Manager: ${order.manager}</span>
      </td>
      <td>
        <strong>${order.appointment}</strong>
        <span>${order.crew}</span>
      </td>
      <td>
        <strong>${order.dispatch.assignedTechnician}</strong>
        <span>PM: ${order.projectManager}</span>
      </td>
      <td>
        <strong>${order.communication}</strong>
        <span>${formatStatus(order.billingStatus)} | ${formatStatus(order.workStatus)}</span>
      </td>
      <td>
        <span class="status-pill ${dispatchPillClass(order)}">${dispatchStatusLabel(order)}</span>
        <span>${formatStatus(order.status)}</span>
      </td>
    </tr>
  `).join("");

  if (!orders.length) {
    workOrderRows.innerHTML = `
      <tr>
        <td colspan="7">
          <strong>No matching work orders found</strong>
          <span>Clear the search to see synced property management requests.</span>
        </td>
      </tr>
    `;
  }

  communicationList.innerHTML = state.workOrders.map((order) => `
    <div class="schedule-item">
      <div class="schedule-top">
        <strong>${order.id} | ${order.tenant}</strong>
        <span>${order.appointment}</span>
      </div>
      <span class="muted">${order.communication}</span>
      <span class="muted">Manager: ${order.manager} | PM: ${order.projectManager} | Tech: ${order.dispatch.assignedTechnician}</span>
      <span class="muted">Tenant intake: ${order.automation.details} | Availability: ${order.automation.availability}</span>
    </div>
  `).join("");

  automationList.innerHTML = state.workOrders.map((order) => `
    <article class="automation-card">
      <div class="stack-top">
        <strong>${order.id}</strong>
        <span class="status-pill ${order.automation.accepted ? "on-track" : "critical"}">${order.automation.accepted ? "Accepted" : "Waiting"}</span>
      </div>
      <span class="muted">${order.property} | Unit ${order.unit}</span>
      <div class="automation-steps">
        <div>
          <span>Property confirmation</span>
          <strong>${order.automation.propertyConfirmation}</strong>
        </div>
        <div>
          <span>Tenant outreach</span>
          <strong>${order.automation.tenantChannel}</strong>
        </div>
        <div>
          <span>Verification</span>
          <strong>${order.automation.tenantVerification}</strong>
        </div>
        <div>
          <span>Details and photos</span>
          <strong>${order.automation.details}</strong>
        </div>
        <div>
          <span>Availability this week</span>
          <strong>${order.automation.availability}</strong>
        </div>
        <div>
          <span>Assignment readiness</span>
          <strong>${order.automation.assignment}</strong>
        </div>
      </div>
      <div class="dispatch-box">
        <div class="stack-top">
          <strong>Dispatch automation</strong>
          <span class="status-pill ${dispatchPillClass(order)}">${dispatchStatusLabel(order)}</span>
        </div>
        <div class="dispatch-grid">
          <div>
            <span>Verification</span>
            <strong>${order.dispatch.verificationAccurate ? "Admin confirmed accurate" : "Needs admin confirmation"}</strong>
          </div>
          <div>
            <span>Matched technician</span>
            <strong>${order.dispatch.assignedTechnician}</strong>
          </div>
          <div>
            <span>15 minute timer</span>
            <strong>${order.dispatch.timer}</strong>
          </div>
          <div>
            <span>KPI note</span>
            <strong>${order.dispatch.kpiNote}</strong>
          </div>
        </div>
        <div class="schedule-box">
          <div class="stack-top">
            <strong>Schedule confirmation</strong>
            <span class="status-pill ${order.dispatch.tenantConfirmedSchedule ? "on-track" : order.dispatch.tenantScheduleNotified ? "watch" : "critical"}">${scheduleStatusLabel(order)}</span>
          </div>
          <div class="dispatch-grid">
            <div>
              <span>Tenant preferred</span>
              <strong>${order.dispatch.tenantPreferredSlots.length ? order.dispatch.tenantPreferredSlots.join(" / ") : "No preferred times yet"}</strong>
            </div>
            <div>
              <span>Technician earliest</span>
              <strong>${order.dispatch.earliestAvailability}</strong>
            </div>
            <div>
              <span>Selected schedule</span>
              <strong>${order.dispatch.selectedSchedule}</strong>
            </div>
            <div>
              <span>Tenant notification</span>
              <strong>${order.dispatch.tenantScheduleNotified ? "SMS/email sent" : "Not sent"}</strong>
            </div>
          </div>
        </div>
        <div class="dispatch-actions">
          <button class="text-button" type="button" data-dispatch-action="verify" data-order-id="${order.id}">Verify</button>
          <button class="text-button" type="button" data-dispatch-action="dispatch" data-order-id="${order.id}">Dispatch</button>
          <button class="text-button" type="button" data-dispatch-action="accept" data-order-id="${order.id}">Tech Accept</button>
          <button class="text-button" type="button" data-dispatch-action="tenant-slot" data-order-id="${order.id}">Use Tenant Slot</button>
          <button class="text-button" type="button" data-dispatch-action="earliest-slot" data-order-id="${order.id}">Offer Earliest</button>
          <button class="text-button" type="button" data-dispatch-action="tenant-confirm" data-order-id="${order.id}">Tenant Confirmed</button>
          <button class="text-button" type="button" data-dispatch-action="no-response" data-order-id="${order.id}">15 Min No Response</button>
          <button class="text-button danger-text" type="button" data-dispatch-action="decline" data-order-id="${order.id}">Declined by Phone/App</button>
          <button class="text-button" type="button" data-dispatch-action="reassign" data-order-id="${order.id}">Reassign</button>
        </div>
        <span class="muted">Phone outcome: ${order.dispatch.phoneOutcome} | Reassignments: ${order.dispatch.reassignmentCount}</span>
      </div>
    </article>
  `).join("");
}

function renderApprovals() {
  const approvals = filteredApprovals();
  approvalBoard.innerHTML = approvals.map((approval) => {
    const nextDay = nextFollowUpDay(approval.daysWaiting);
    const nextLabel = approval.status === "approved"
      ? "No follow-up needed"
      : approval.daysWaiting >= 90
        ? "Escalate final approval"
        : `Auto follow-up at day ${nextDay}`;
    return `
      <article class="approval-card">
        <div class="stack-top">
          <strong>${approval.id}</strong>
          <span class="status-pill ${approval.status === "approved" ? "on-track" : approval.status === "due" ? "watch" : "critical"}">${formatStatus(approval.status)}</span>
        </div>
        <h3>${approval.project}</h3>
        <span class="muted">${approval.client} | ${money.format(approval.amount)}</span>
        <div class="assignment-row">
          <span>Manager</span>
          <strong>${approval.manager}</strong>
        </div>
        <div class="assignment-row">
          <span>Estimator</span>
          <strong>${approval.estimator}</strong>
        </div>
        <div class="follow-up-band">
          <strong>${approval.daysWaiting} days waiting</strong>
          <span>${nextLabel}</span>
        </div>
        <span class="muted">${approval.lastUpdate}</span>
      </article>
    `;
  }).join("");

  if (!approvals.length) {
    approvalBoard.innerHTML = `<p class="empty-note">No estimate approvals match this view.</p>`;
  }

  cadenceList.innerHTML = state.approvalCadence.map((day) => `
    <div class="cadence-step">
      <strong>Day ${day}</strong>
      <span>Send automated reminder to management and log the approval touchpoint.</span>
    </div>
  `).join("");
}

function renderTechnicianSchedule() {
  const orders = filteredWorkOrders()
    .filter((order) => order.appointment !== "Unscheduled")
    .sort((a, b) => appointmentSortValue(a.appointment) - appointmentSortValue(b.appointment));
  const technicianNames = optionList(orders.map((order) => order.dispatch?.assignedTechnician || order.technician))
    .filter((name) => name !== "Unassigned");

  technicianScheduleBoard.innerHTML = technicianNames.map((technician) => {
    const techOrders = orders.filter((order) => (order.dispatch?.assignedTechnician || order.technician) === technician);
    return `
      <article class="technician-column">
        <div class="pipeline-heading">
          <strong>${technician}</strong>
          <span>${techOrders.length} scheduled</span>
        </div>
        ${techOrders.map((order) => `
          <div class="schedule-card">
            <div class="stack-top">
              <strong>${order.appointment}</strong>
              <span class="status-pill ${order.dispatch.tenantConfirmedSchedule ? "on-track" : order.dispatch.tenantScheduleNotified ? "watch" : "critical"}">${scheduleStatusLabel(order)}</span>
            </div>
            <span class="muted">${order.id} | ${order.property} Unit ${order.unit}</span>
            <span>${order.type}</span>
            <span class="muted">PM: ${order.projectManager} | Tenant: ${order.tenant}</span>
          </div>
        `).join("")}
      </article>
    `;
  }).join("") || `<p class="empty-note">No future technician schedules match the current filters.</p>`;
}

function crewPendingTasks(technician) {
  const assignedOrders = state.workOrders.filter((order) => (order.dispatch?.assignedTechnician || order.technician) === technician);
  const taskList = [];
  assignedOrders.forEach((order) => {
    if (!order.unitCostApproved) taskList.push(`${order.id}: provide or approve unit cost`);
    if (!order.clientUnitPriceApproved) taskList.push(`${order.id}: confirm approved client unit price`);
    if (!order.dispatch.tenantConfirmedSchedule) taskList.push(`${order.id}: confirm schedule with tenant`);
    if (order.status === "needs-response") taskList.push(`${order.id}: clarify job details before dispatch`);
    if (order.billingStatus === "need-invoice") taskList.push(`${order.id}: ready invoice package`);
  });
  state.estimateApprovals.forEach((approval) => {
    if (approval.estimator === "Caleb Stone" && technician === "Marco Diaz") {
      taskList.push(`${approval.id}: pending estimate support for ${approval.project}`);
    }
    if (approval.estimator === "Dana Cooper" && technician === "Eli Carter") {
      taskList.push(`${approval.id}: quote clarification requested`);
    }
  });
  return taskList;
}

function renderCrewInfo() {
  const orders = filteredWorkOrders();
  const technicianNames = optionList([
    ...orders.map((order) => order.dispatch?.assignedTechnician || order.technician),
    ...state.technicians.map((technician) => technician.name)
  ]).filter((name) => name !== "Unassigned");

  crewInfoBoard.innerHTML = technicianNames.map((technician) => {
    const assignedOrders = orders.filter((order) => (order.dispatch?.assignedTechnician || order.technician) === technician);
    const approvedUnitCost = assignedOrders.filter((order) => order.unitCostApproved);
    const pendingTasks = crewPendingTasks(technician).slice(0, 5);
    const techProfile = state.technicians.find((item) => item.name === technician);
    return `
      <article class="crew-card">
        <div class="stack-top">
          <strong>${technician}</strong>
          <span class="status-pill ${techProfile?.available ? "on-track" : "critical"}">${techProfile?.available ? "Available" : "Unavailable"}</span>
        </div>
        <span class="muted">${techProfile?.skills.join(", ") || "Skills not listed"}</span>
        <div class="crew-metrics">
          <div>
            <span>Assigned work</span>
            <strong>${assignedOrders.length}</strong>
          </div>
          <div>
            <span>Approved unit cost</span>
            <strong>${approvedUnitCost.length}</strong>
          </div>
          <div>
            <span>Pending tasks</span>
            <strong>${pendingTasks.length}</strong>
          </div>
        </div>
        <div class="stack-list">
          ${assignedOrders.slice(0, 3).map((order) => `
            <div class="stack-item">
              <div class="stack-top">
                <strong>${order.id}</strong>
                <span>${formatStatus(order.workStatus)}</span>
              </div>
              <span class="muted">${order.type} | ${order.appointment}</span>
            </div>
          `).join("") || `<p class="empty-note">No assigned work in current filters.</p>`}
        </div>
        <div class="pending-list">
          ${pendingTasks.map((task) => `<span>${task}</span>`).join("") || `<span>No pending estimates, confirmations, or clarifications.</span>`}
        </div>
      </article>
    `;
  }).join("");
}

function renderProjects() {
  const rows = filteredProjects();
  projectRows.innerHTML = rows.map((project) => `
    <tr>
      <td>
        <strong>${project.name}</strong>
        <span>${project.client} | ${project.propertyManagement}</span>
      </td>
      <td>
        <span class="status-pill ${project.status}">${formatStatus(project.status)}</span>
        <span>${project.phase} | ${project.trade}</span>
      </td>
      <td>${money.format(project.budget)}</td>
      <td>
        <div class="progress" aria-label="${project.schedule}% complete"><span style="width: ${project.schedule}%"></span></div>
        <span>${project.schedule}% complete | ${formatStatus(project.billingStatus)}</span>
      </td>
      <td>
        <strong>${project.projectManager}</strong>
        <span>Client price: ${project.clientUnitPriceApproved ? "approved" : "missing"}</span>
      </td>
      <td>
        <strong>${project.technician}</strong>
        <span>Cost: ${project.unitCostApproved ? "approved" : "missing"}</span>
      </td>
    </tr>
  `).join("");

  if (!rows.length) {
    projectRows.innerHTML = `
      <tr>
        <td colspan="6">
          <strong>No matching work found</strong>
          <span>Clear the search or switch filters to restore the portfolio view.</span>
        </td>
      </tr>
    `;
  }
}

function renderCrm() {
  const stages = ["lead", "qualified", "proposal", "won"];
  const leads = filteredCrm();
  crmPipeline.innerHTML = stages.map((stage) => {
    const stageLeads = leads.filter((lead) => lead.stage === stage);
    const stageTotal = stageLeads.reduce((sum, lead) => sum + lead.value, 0);
    return `
      <section class="pipeline-column">
        <div class="pipeline-heading">
          <strong>${formatStatus(stage)}</strong>
          <span>${money.format(stageTotal)}</span>
        </div>
        ${stageLeads.map((lead) => `
          <article class="lead-card">
            <div class="stack-top">
              <strong>${lead.company}</strong>
              <span>${money.format(lead.value)}</span>
            </div>
            <span class="muted">${lead.contact} | ${lead.plan}</span>
            <div class="progress"><span style="width: ${lead.probability}%"></span></div>
            <div class="stack-top">
              <span>${lead.probability}% probability</span>
              <span>${lead.due}</span>
            </div>
            <strong>${lead.nextStep}</strong>
          </article>
        `).join("") || `<p class="empty-note">No ${formatStatus(stage).toLowerCase()} items.</p>`}
      </section>
    `;
  }).join("");

  const monthlyTotal = state.subscriptions.reduce((sum, subscription) => sum + subscription[2], 0);
  crmMrr.textContent = money.format(monthlyTotal);
  crmRenewals.textContent = state.subscriptions.filter((subscription) => subscription[3].includes("Jun") || subscription[3].includes("Jul")).length;

  subscriptionList.innerHTML = state.subscriptions.map(([company, plan, amount, renewal]) => `
    <div class="stack-item">
      <div class="stack-top">
        <strong>${company}</strong>
        <span>${money.format(amount)}</span>
      </div>
      <span class="muted">${plan} | ${renewal}</span>
    </div>
  `).join("");

  activityList.innerHTML = state.crm
    .filter((lead) => lead.stage !== "won")
    .map((lead) => `
      <div class="schedule-item">
        <div class="schedule-top">
          <strong>${lead.nextStep}</strong>
          <span>${lead.due}</span>
        </div>
        <span class="muted">${lead.company} | ${lead.contact}</span>
      </div>
    `).join("");
}

function renderLists() {
  estimateCards.innerHTML = state.estimates.map(([name, value, stage, percent]) => `
    <div class="stack-item">
      <div class="stack-top">
        <strong>${name}</strong>
        <span>${value}</span>
      </div>
      <div class="progress"><span style="width: ${percent}%"></span></div>
      <span class="muted">${stage}</span>
    </div>
  `).join("");

  scheduleList.innerHTML = state.schedule.map(([task, project, date, note, manager, technician]) => `
    <div class="schedule-item">
      <div class="schedule-top">
        <strong>${task}</strong>
        <span>${date}</span>
      </div>
      <span class="muted">${project} | ${note}</span>
      <span class="muted">PM: ${manager} | Tech: ${technician}</span>
    </div>
  `).join("");

  priorityList.innerHTML = state.priorities.map(([task, project, note], index) => `
    <div class="priority">
      <div class="priority-top">
        <strong>${index + 1}. ${task}</strong>
      </div>
      <span class="muted">${project} | ${note}</span>
    </div>
  `).join("");

  cashChart.innerHTML = state.cash.map((height, index) => `
    <div class="cash-bar">
      <span style="height: ${height}%"></span>
      <small>M${index + 1}</small>
    </div>
  `).join("");
}

function renderView() {
  const [title, eyebrow, section] = viewCopy[state.view];
  viewTitle.textContent = title;
  tableEyebrow.textContent = eyebrow;
  sectionTitle.textContent = section;
  document.querySelector("#newProjectButton").textContent = state.view === "crm" ? "New Lead" : "New Project";

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });

  document.querySelectorAll("[data-view-section]").forEach((sectionElement) => {
    const visibleViews = sectionElement.dataset.viewSection.split(" ");
    sectionElement.hidden = !visibleViews.includes(state.view);
  });
}

function render() {
  renderFilterOptions();
  renderView();
  renderMetrics();
  renderProjects();
  renderCrm();
  renderIntegrations();
  renderApprovals();
  renderTechnicianSchedule();
  renderCrewInfo();
  renderLists();
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    render();
  });
});

document.querySelectorAll("[data-status]").forEach((button) => {
  button.addEventListener("click", () => {
    state.status = button.dataset.status;
    document.querySelectorAll("[data-status]").forEach((segment) => {
      segment.classList.toggle("active", segment === button);
    });
    renderProjects();
  });
});

document.querySelectorAll("[data-crm-stage]").forEach((button) => {
  button.addEventListener("click", () => {
    state.crmStage = button.dataset.crmStage;
    document.querySelectorAll("[data-crm-stage]").forEach((segment) => {
      segment.classList.toggle("active", segment === button);
    });
    renderCrm();
  });
});

document.querySelectorAll("[data-approval-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.approvalFilter = button.dataset.approvalFilter;
    document.querySelectorAll("[data-approval-filter]").forEach((segment) => {
      segment.classList.toggle("active", segment === button);
    });
    renderApprovals();
  });
});

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProjects();
  renderCrm();
  renderIntegrations();
  renderApprovals();
});

propertyManagementFilter.addEventListener("change", (event) => {
  state.propertyManagementFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

tradeFilter.addEventListener("change", (event) => {
  state.tradeFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

technicianFilter.addEventListener("change", (event) => {
  state.technicianFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

projectManagerFilter.addEventListener("change", (event) => {
  state.projectManagerFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

unitCostFilter.addEventListener("change", (event) => {
  state.unitCostFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

clientPriceFilter.addEventListener("change", (event) => {
  state.clientPriceFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

billingStatusFilter.addEventListener("change", (event) => {
  state.billingStatusFilter = event.target.value;
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

clearFiltersButton.addEventListener("click", () => {
  state.propertyManagementFilter = "all";
  state.tradeFilter = "all";
  state.technicianFilter = "all";
  state.projectManagerFilter = "all";
  state.unitCostFilter = "all";
  state.clientPriceFilter = "all";
  state.billingStatusFilter = "all";
  propertyManagementFilter.value = "all";
  tradeFilter.value = "all";
  technicianFilter.value = "all";
  projectManagerFilter.value = "all";
  unitCostFilter.value = "all";
  clientPriceFilter.value = "all";
  billingStatusFilter.value = "all";
  renderProjects();
  renderIntegrations();
  renderTechnicianSchedule();
  renderCrewInfo();
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("contrast");
});

document.querySelector("#shufflePriorities").addEventListener("click", () => {
  state.priorities.push(state.priorities.shift());
  renderLists();
});

document.querySelector("#newProjectButton").addEventListener("click", () => {
  if (state.view === "crm") {
    leadDialog.showModal();
    return;
  }
  projectDialog.showModal();
});

document.querySelector("#newLeadButton").addEventListener("click", () => {
  leadDialog.showModal();
});

automationList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-dispatch-action]");
  if (!button) return;

  const order = state.workOrders.find((item) => item.id === button.dataset.orderId);
  if (!order) return;

  const action = button.dataset.dispatchAction;
  if (action === "verify") {
    order.dispatch.verificationAccurate = true;
    order.dispatch.timer = "Ready for admin dispatch toggle";
    order.dispatch.kpiNote = "Admin verified details, photos, and availability";
    order.automation.assignment = "Ready for matched technician dispatch";
  }

  if (action === "dispatch") {
    if (!order.dispatch.verificationAccurate) {
      order.dispatch.kpiNote = "Dispatch blocked until admin confirms verification";
      order.dispatch.adminAlert = true;
    } else {
      const matchedTech = findMatchedTechnician(order);
      order.dispatch.enabled = true;
      order.dispatch.assignedTechnician = matchedTech?.name || "Unassigned";
      order.technician = order.dispatch.assignedTechnician;
      order.dispatch.timer = "15 minute acceptance window started";
      order.dispatch.techResponse = "pending";
      order.dispatch.adminAlert = false;
      order.dispatch.phoneOutcome = "Awaiting in-app response";
      order.dispatch.kpiNote = "Matched by availability, skill, and workload";
      order.automation.assignment = `Assigned to ${order.dispatch.assignedTechnician}`;
      order.communication = "Dispatch sent to matched technician";
    }
  }

  if (action === "accept") {
    order.dispatch.techResponse = "accepted";
    order.dispatch.timer = "Accepted in app";
    order.dispatch.adminAlert = false;
    order.dispatch.phoneOutcome = "Not needed";
    order.dispatch.kpiNote = "Accepted within 15 minutes";
    order.status = "confirmed";
    order.protected = true;
    order.communication = "Technician accepted, schedule selection needed";
  }

  if (action === "tenant-slot") {
    if (order.dispatch.techResponse !== "accepted") {
      order.dispatch.kpiNote = "Schedule selection blocked until technician accepts";
    } else {
      const preferredSlot = order.dispatch.tenantPreferredSlots[0] || order.dispatch.earliestAvailability;
      order.dispatch.selectedSchedule = preferredSlot;
      order.dispatch.scheduleSource = order.dispatch.tenantPreferredSlots.length ? "Tenant preferred" : "Technician earliest";
      order.dispatch.tenantScheduleNotified = true;
      order.dispatch.tenantConfirmedSchedule = false;
      order.appointment = preferredSlot;
      order.communication = `Schedule notification sent for ${preferredSlot}`;
      order.dispatch.kpiNote = "Tenant must confirm schedule from automated SMS/email";
    }
  }

  if (action === "earliest-slot") {
    if (order.dispatch.techResponse !== "accepted") {
      order.dispatch.kpiNote = "Earliest schedule blocked until technician accepts";
    } else {
      order.dispatch.selectedSchedule = order.dispatch.earliestAvailability;
      order.dispatch.scheduleSource = "Technician earliest";
      order.dispatch.tenantScheduleNotified = true;
      order.dispatch.tenantConfirmedSchedule = false;
      order.appointment = order.dispatch.earliestAvailability;
      order.communication = `Technician earliest availability sent: ${order.dispatch.earliestAvailability}`;
      order.dispatch.kpiNote = "Awaiting tenant confirmation via SMS/email toggle";
    }
  }

  if (action === "tenant-confirm") {
    if (!order.dispatch.tenantScheduleNotified) {
      order.dispatch.kpiNote = "Tenant confirmation blocked until schedule notice is sent";
    } else {
      order.dispatch.tenantConfirmedSchedule = true;
      order.dispatch.kpiNote = "Tenant confirmed schedule through automated SMS/email";
      order.communication = `Tenant confirmed ${order.dispatch.selectedSchedule}`;
      order.status = "confirmed";
      order.protected = true;
    }
  }

  if (action === "no-response") {
    order.dispatch.techResponse = "no-response";
    order.dispatch.timer = "15 minutes expired";
    order.dispatch.adminAlert = true;
    order.dispatch.phoneOutcome = "Admin needs to call technician";
    order.dispatch.kpiNote = "No in-app response within SLA";
    order.communication = "Admin call required before reassignment";
  }

  if (action === "decline") {
    order.dispatch.techResponse = "declined";
    order.dispatch.timer = "Declined after dispatch";
    order.dispatch.adminAlert = true;
    order.dispatch.phoneOutcome = "Technician declined by phone and app";
    order.dispatch.kpiNote = "Decline recorded for technician KPI";
    order.communication = "Admin can reassign after confirmed decline";
  }

  if (action === "reassign") {
    const previousTech = order.dispatch.assignedTechnician === "Unassigned" ? [] : [order.dispatch.assignedTechnician];
    const matchedTech = findMatchedTechnician(order, previousTech);
    order.dispatch.reassignmentCount += 1;
    order.dispatch.enabled = true;
    order.dispatch.assignedTechnician = matchedTech?.name || "Unassigned";
    order.technician = order.dispatch.assignedTechnician;
    order.dispatch.techResponse = "pending";
    order.dispatch.timer = "15 minute acceptance window restarted";
    order.dispatch.adminAlert = false;
    order.dispatch.phoneOutcome = "Reassigned after decline or no response";
    order.dispatch.kpiNote = "Reassignment logged for dispatch KPI";
    order.automation.assignment = `Reassigned to ${order.dispatch.assignedTechnician}`;
    order.communication = "Reassignment sent to matched technician";
    order.dispatch.selectedSchedule = "Not selected";
    order.dispatch.scheduleSource = "Waiting";
    order.dispatch.tenantScheduleNotified = false;
    order.dispatch.tenantConfirmedSchedule = false;
  }

  renderMetrics();
  renderIntegrations();
});

document.querySelector("#syncWorkOrdersButton").addEventListener("click", () => {
  state.syncCount += 1;
  state.connectors = state.connectors.map((connector) => ({
    ...connector,
    status: connector.status === "Pending credentials" ? "Pending credentials" : "Connected",
    lastSync: "Just now"
  }));

  if (state.syncCount === 1) {
    state.workOrders.unshift({
      id: "WO-10527",
      source: "Buildium",
      property: "Maple Street Apartments",
      unit: "7D",
      tenant: "Noah Kim",
      manager: "Dana Cooper",
      projectManager: "T. Brooks",
      technician: "Eli Carter",
      type: "Kitchen cabinet repair",
      trade: "Cabinetry",
      appointment: "Jun 17 1:30 PM",
      crew: "Finish Crew A",
      unitCostApproved: true,
      clientUnitPriceApproved: false,
      billingStatus: "need-invoice",
      workStatus: "work-in-progress",
      communication: "Tenant and manager reminders sent",
      automation: {
        accepted: true,
        propertyConfirmation: "Sent through Buildium",
        tenantChannel: "SMS + email",
        tenantVerification: "Verification requested",
        details: "Photo and cabinet issue form sent",
        availability: "Awaiting weekly availability",
        assignment: "Suggested: Finish Crew A"
      },
      dispatch: {
        verificationAccurate: false,
        enabled: false,
        assignedTechnician: "Unassigned",
        timer: "Waiting for admin verification",
        techResponse: "not-sent",
        adminAlert: false,
        phoneOutcome: "Not started",
        kpiNote: "Verification pending",
        reassignmentCount: 0,
        tenantPreferredSlots: ["Wed 12:00 PM", "Fri 4:00 PM"],
        earliestAvailability: "Tue 2:30 PM",
        selectedSchedule: "Not selected",
        scheduleSource: "Waiting",
        tenantScheduleNotified: false,
        tenantConfirmedSchedule: false
      },
      status: "confirmed",
      protected: true
    });
  }

  renderMetrics();
  renderIntegrations();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(projectForm);
  state.projects.unshift({
    name: data.get("name"),
    client: data.get("client"),
    phase: data.get("phase"),
    trade: data.get("phase"),
    propertyManagement: "Manual",
    budget: Number(data.get("budget")),
    schedule: 5,
    margin: Number(data.get("margin")),
    owner: "Unassigned",
    projectManager: "Unassigned",
    technician: "Unassigned",
    unitCostApproved: false,
    clientUnitPriceApproved: false,
    billingStatus: "need-invoice",
    workStatus: "work-in-progress",
    status: "watch",
    risks: 1
  });
  projectForm.reset();
  projectDialog.close();
  state.view = "projects";
  render();
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(leadForm);
  const stage = data.get("stage");
  const mrr = Number(data.get("mrr"));
  const company = data.get("company");
  state.crm.unshift({
    company,
    contact: data.get("contact"),
    stage,
    value: Number(data.get("value")),
    probability: stage === "won" ? 100 : 35,
    nextStep: stage === "won" ? "Onboarding kickoff" : "Schedule follow-up",
    due: "This week",
    mrr,
    plan: mrr > 3000 ? "Full Suite" : "CRM Starter"
  });

  if (mrr > 0) {
    state.subscriptions.unshift([company, mrr > 3000 ? "Full Suite" : "CRM Starter", mrr, "Renews next month"]);
  }

  leadForm.reset();
  leadDialog.close();
  state.view = "crm";
  render();
});

render();
