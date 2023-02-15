import { IGetStaticPathsCourses } from "../interfaces/programs";

const url = "https://api.warmiventures.com/public/api";
class landingService {
  async getPrograms() {
    try {
      const response = await fetch(`${url}/courses`);
      const data: IGetStaticPathsCourses[] = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }
}
export default new landingService();
