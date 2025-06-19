package algo;

public class SearchMain {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "T-Shirt", "Clothing")
        };

        String target = "Watch";

        System.out.println("Linear Search:");
        Product result1 = SearchUtil.linearSearch(products, target);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search:");
        Product result2 = SearchUtil.binarySearch(products, target);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
