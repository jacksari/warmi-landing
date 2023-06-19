export interface IGetStaticPathsCourses {
    slug: string, 
    title: string,
    subtitle: string,
    description: string,
    objetive: string,
    resume: string,
    image: string,
    methodologies: string[],
    sections: {
        name: string,
        lessons: string[],
        active: boolean,
        description: string
    }[]
}

export interface IFormLanding {
    name: string;
    email: string;
    type: string;
    message: string;
    course: string;
  }
  