import axios from "axios";

export const Get = (url) => {
  const headers = {
    "accept": "application/json",
    "Authorization": "bearer 0iJ6q77vDLoWeOod_0VRej8bNBLpEG-T79vNoDkhY0DM_PtcVEveTm6alZ0LtrHJ_476_JPhbPC1JtZbHn_kJLwe0NgReB-ouuB-sxE5bIC_6_-cvlmhSZgJOSSMZHYx"
  }
  return(
    axios.get(url, { headers })
  );    
}