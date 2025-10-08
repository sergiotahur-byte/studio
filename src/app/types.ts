
export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};
