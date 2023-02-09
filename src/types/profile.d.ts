export type Name = string;
export type Role = string;
export type Qualification = string;
export type Biography = {
  id: string,
  period: string,
  overview: string
};
export type Pr = string;
export type Skill = {
  id: string,
  category: string,
  name: string,
  workExperience: boolean
};
export type PerformanceImage = {
  id: string,
  src: string,
}
export type Performance = {
  id: string,
  name: string,
  image: PerformanceImage[],
  overview: string,
  team: string,
  role: string
};

export type Profile = {
  name: Name,
  role: Role,
  qualification: Qualification,
  biography: Biography[],
  pr: Pr,
  skill: Skill[],
  performance: Performance[]
};
