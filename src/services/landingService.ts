
import type {
  IFormLanding,
  IGetStaticPathsCourses,
} from "../interfaces/programs";

// const url = "http://localhost:8000/api";

const url = "https://api.warmiventures.com/public/api";
class landingService {
  async getPrograms() {
    try {
      const response = await fetch(`${url}/courses`);
      const data = await response.json();
      return data;
    } catch (err) {
      //   if (request.isAxiosError(err) && err.response) {
      //     return err.response?.data as TodoErrorResponse;
      //   }
      return [];
    }
  }

  async getDataLanding() {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
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

  async insertForm(body: IFormLanding) {
    try {
      const response = await fetch(`${url}/insert-lading`, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Si estás enviando datos en formato JSON
        },
      });
      const data = await response.json();
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
