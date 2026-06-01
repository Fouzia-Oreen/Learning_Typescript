let userStatus = 0; // 0 for active, 1 for inactive
enum UserStatus {
    Active = 0,
    Inactive = 1
}
userStatus = UserStatus.Active; // Assigning enum value to variable
console.log(userStatus); // Output: 0

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Down); // Output: 2

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Green); // Output: "GREEN"



enum ResponseStatus {
    No = 0,
    Yes = 1
}
function respond(recipient: string, message: ResponseStatus): void {
    console.log(`${recipient}: ${message === ResponseStatus.Yes ? "Yes" : "No"}`);
}  


enum PaymentStatus {
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
function processPayment(status: PaymentStatus): void {
    switch (status) {
        case PaymentStatus.Pending:
            console.log("Payment is pending.");
            break;
        case PaymentStatus.Completed:
            console.log("Payment is completed.");
            break;
        case PaymentStatus.Failed:
            console.log("Payment has failed.");
            break;
    }
}

