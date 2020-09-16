public class Application {
    public static void main(String[] args) throws Exception{
        System.out.println("Hello Transformer");

        Person john = new Person("John", "Doe");
        System.out.println(john.printName());
        PersonAddress johnaddress = new PersonAddress();
        johnaddress = mapper(john, johnaddress, "Madison Street");
        System.out.println(johnaddress.getAddress());

    }

    public static PersonAddress mapper (Person person, PersonAddress personAndAddress, String address) {
        String fullName = person.getFirstName() + ' ' + person.getLastName();
        String personAddress = person.getFirstName() + " lives on " + address;
        personAndAddress.setName(fullName);
        personAndAddress.setAddress(personAddress);
        return personAndAddress;

    }
}
