public class Person {
    private String firstName;
    private String lastName;

    Person(String fname, String lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    public String printName() {
        return this.firstName + ' ' + this.lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}
