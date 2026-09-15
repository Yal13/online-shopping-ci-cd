import java.util.*;

class StudentMarks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();

        int[] marks = new int[n];
        ArrayList<Integer> pass = new ArrayList<>();

        int total = 0, high = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Enter mark: ");
            marks[i] = sc.nextInt();
            total += marks[i];

            if (marks[i] > high)
                high = marks[i];

            if (marks[i] >= 50)
                pass.add(marks[i]);
        }

        System.out.println("Marks: " + Arrays.toString(marks));
        System.out.println("Total: " + total);
        System.out.println("Average: " + (double) total / n);
        System.out.println("Highest: " + high);
        System.out.println("Passing marks: " + pass);
        System.out.println("Passed students: " + pass.size());

        sc.close();
    }
}
