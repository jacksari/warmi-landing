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

  async getTestimonials() {
    try {
      const response = await fetch(`${url}/testimonials`);
      const data = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }

  async getAlliances() {
    try {
      const response = await fetch(`${url}/alliances`);
      const data = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }

  async getBenefits() {
    try {
      const response = await fetch(`${url}/benefits`);
      const data = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }

  async getStatistics() {
    try {
      const response = await fetch(`${url}/statistics`);
      const data = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }

  //
}
export default new landingService();
