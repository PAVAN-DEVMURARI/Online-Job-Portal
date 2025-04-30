// Use environment variables or fallback to localhost for development
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

export const USER_API_END_POINT = `${API_BASE}/user`;
export const JOB_API_END_POINT = `${API_BASE}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE}/application`;
export const COMPANY_API_END_POINT = `${API_BASE}/company`;
