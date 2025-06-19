package algo;

public class Forecasting {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue; // base case
        }

        return calculateFutureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    // Optimized version using memoization (optional for large n)
    public static double calculateFutureValueMemo(double presentValue, double rate, int years, double[] memo) {
        if (years == 0) {
            return presentValue;
        }

        if (memo[years] != 0) {
            return memo[years];
        }

        memo[years] = calculateFutureValueMemo(presentValue, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }
}
