import os from 'os';
 
const homeDir = () => {
  return os.homedir();
};

export {
  homeDir,
};
