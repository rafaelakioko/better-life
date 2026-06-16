export const PLAN_LIMITS = {
  FREE: {
    diasTreinoPorSemana: 3,
    exerciciosNaBiblioteca: 15,
    diasHistoricoStreak: 7,
    acessoProfissionais: false,
  },
  TRIAL: {
    diasTreinoPorSemana: 7,
    exerciciosNaBiblioteca: Infinity,
    diasHistoricoStreak: Infinity,
    acessoProfissionais: true,
  },
  PRO: {
    diasTreinoPorSemana: 7,
    exerciciosNaBiblioteca: Infinity,
    diasHistoricoStreak: Infinity,
    acessoProfissionais: true,
  },
}

export type PlanKey = keyof typeof PLAN_LIMITS
