import axios from "axios";

const resumeDataUrl = "./data/resumeData.json";

const getResumeData = async () => {
  const response = await axios.get(resumeDataUrl);
  return response.data;
};

export { getResumeData };
