export type Name = string;
export type Role = string;
export type Qualification = string;
export type Biography = {
  period: string,
  overview: string
};
export type Pr = string;
export type Skill = {
  category: string,
  name: string,
  workExperience: boolean
};
export type Performance = {
  name: string,
  image: string[],
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
