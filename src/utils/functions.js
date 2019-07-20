// Estimated Food Cost Saving
export const estimatedFoodCost = (monthlySpending) => {
    return monthlySpending * 0.3;
};

// Your estimated annual savings
export const estimatedAnualSavings = (employees, estimatedFoodCost) => {
    return employees * 1337 + estimatedFoodCost;
};
