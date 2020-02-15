let remotehost = 'http://127.0.0.1:8000';
if (process.env.NODE_ENV === 'production')
  remotehost = "https://www.adpalai.com";
export const REMOTE_HOST = remotehost;

export const VIEW_NAME = {
  LIST_PAYROLLS: 'list_payrolls',
  LIST_EMPLOYEES: 'list_employees',
  ADD_EARNINGS: 'add_earnings',
  FINALIZE_PAYROLL: 'finalize_payroll',
};
