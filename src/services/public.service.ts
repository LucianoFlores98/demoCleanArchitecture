import { User } from '@/models';
import { loadAbort } from '@/utilities';
import axios from 'axios';

export const login = () => {
  const controller = loadAbort();
  return {
    call: axios.get<User>('https://', { signal: controller.signal }),
    controller
  };
};

