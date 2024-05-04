-- Table: Customer
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL
);

-- Table: Route
CREATE TABLE Route (
    RouteID INT PRIMARY KEY,
    StartLocation VARCHAR(255) NOT NULL,
    EndLocation VARCHAR(255) NOT NULL
);

-- Table: Bus
CREATE TABLE Bus (
    BusID INT PRIMARY KEY,
    BusName VARCHAR(255) NOT NULL,
    RouteID INT NOT NULL,
    FOREIGN KEY (RouteID) REFERENCES Route(RouteID)
);

-- Table: Seat
CREATE TABLE Seat (
    SeatID INT PRIMARY KEY,
    BusID INT NOT NULL,
    SeatNumber VARCHAR(10) NOT NULL,
    SeatClass VARCHAR(50) NOT NULL,
    FOREIGN KEY (BusID) REFERENCES Bus(BusID)
);

-- Table: Booking
CREATE TABLE Booking (
    BookingID INT PRIMARY KEY,
    CustomerID INT NOT NULL,
    SeatID INT NOT NULL,
    DateOfBooking DATE NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (SeatID) REFERENCES Seat(SeatID)
);

-- Table: Schedule
CREATE TABLE Schedule (
    ScheduleID INT PRIMARY KEY,
    BusID INT NOT NULL,
    DepartureTime TIME NOT NULL,
    DayOfOperation VARCHAR(20), -- Optional, can be NULL
    FOREIGN KEY (BusID) REFERENCES Bus(BusID)
);
