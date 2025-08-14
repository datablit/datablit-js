import { Datablit } from './datablit';
import { InitConfig } from './types/initConfig';

// Export the singleton instance
const datablit = Datablit.getInstance();

export type { InitConfig };
export default datablit;