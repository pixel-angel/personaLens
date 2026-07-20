export interface AnalysisResult {
  score: number;

  digital_twin: {
    skills: string[];
    traits: string[];
    interests: string[];
    summary: string;
  };

  recruiter: {
    strengths: string[];
    missing: string[];
  };

  privacy: {
    issues: string[];
    recommendations: string[];
  };

  attacker: {
    visible_information: string[];
    risks: string[];
  };

  action_plan: string[];
}
