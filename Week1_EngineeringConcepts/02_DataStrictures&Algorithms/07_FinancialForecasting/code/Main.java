package algo;

public class Main {
    public static void main(String[] args) {
        double presentValue = 10000;   // ₹10,000
        double rate = 0.05;            // 5% growth per year
        int years = 5;

        double future = Forecasting.calculateFutureValue(presentValue, rate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f%n", future);

        double[] memo = new double[years + 1];
        double futureMemo = Forecasting.calculateFutureValueMemo(presentValue, rate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f%n", futureMemo);
    }
}
