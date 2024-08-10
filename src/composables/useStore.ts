export const useModuleScrolls = () =>
	useState<Record<string, number>>('moduleScrolls', () => {
		return {
			solu: 0,
			cov: 0,
			mission: 0,
			adv: 0,
			about: 0,
		}
	})
