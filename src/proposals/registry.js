const STORAGE_KEY = "proposal_access_tokens_v1";

export const PROPOSAL_REGISTRY = {
  niofar: {
    id: "niofar",
    title: "Niofar Capital (MVP)",
    path: "/proposal-niofar",
    passcode: "NIOFAR-7GQ9-2026"
  }
};

function getAccessState() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function saveAccessState(state) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getProposalById(id) {
  return PROPOSAL_REGISTRY[id] || null;
}

export function hasProposalAccess(id) {
  const state = getAccessState();
  return Boolean(state[id]);
}

export function grantProposalAccess(id) {
  const state = getAccessState();
  state[id] = true;
  saveAccessState(state);
}

export function verifyProposalPasscode(id, passcode) {
  const proposal = getProposalById(id);
  if (!proposal) {
    return false;
  }

  return proposal.passcode === String(passcode || "").trim();
}
